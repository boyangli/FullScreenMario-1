/// <reference path="External/FPSAnalyzr.ts" />
/**
 * GamesRunnr
 * A class to continuously series of "game" Functions. Each game is run in a
 * set order and the group is run as a whole at a particular interval, with a
 * configurable speed. Playback can be triggered manually, or driven by a timer
 * with pause and play hooks. For automated playback, statistics are
 * available via an internal FPSAnalyzer.
 * @example
 * // Creating and using a GamesRunnr to print the screen size every second.
 * var GamesRunner = new GamesRunnr({
 *     "interval": 1000,
 *     "games": [
 *         function () {
 *             console.log("Screen size: " + innerWidth + "x" + innerHeight);
 *         }
 *     ]
 * });
 * GamesRunner.play();
 * @example
 * // Creating and using a GamesRunnr to remove the first member of an Array
 * // and output the remaining members every second until only one is left.
 * var numbers = ['a', 'b', 'c', 'd'],
 *     GamesRunner = new GamesRunnr({
 *         "interval": 1000,
 *         "games": [
 *             numbers.pop.bind(numbers),
 *             console.log.bind(console, numbers),
 *             function () {
 *                 if (numbers.length === 1) {
 *                     GamesRunner.pause();
 *                     console.log("All done!");
 *                 }
 *             }
 *         ]
 *
 *     });
 * GamesRunner.play();
 * // After 1 second:  ['a', 'b', 'c']
 * // After 2 seconds: ['a', 'b']
 * // After 3 seconds: ['a']
 * //                  "All done!"
 * @author "Josh Goldberg" <josh@fullscreenmario.com>
 */
var GamesRunnr = (function () {
    /**
     * Resets the GamesRunnr.
     *
     * @param {IGamesRunnrSettings} settings
     */
    function GamesRunnr(settings) {
        var i;
        if (typeof settings.games === "undefined") {
            throw new Error("No games given to GamesRunnr.");
        }
        this.games = settings.games;
        this.interval = settings.interval || 1000 / 60;
        this.speed = settings.speed || 1;
        this.onPause = settings.onPause;
        this.onPlay = settings.onPlay;
        this.callbackArguments = settings.callbackArguments || [this];
        this.FPSAnalyzer = settings.FPSAnalyzer || new FPSAnalyzr();
        this.adjustFramerate = settings.adjustFramerate;
        this.scope = settings.scope || this;
        this.paused = true;
        this.upkeepScheduler = settings.upkeepScheduler || function (handler, timeout) {
            setTimeout(handler, timeout);
        };
        this.upkeepCanceller = settings.upkeepCanceller || function (handle) {
            clearTimeout(handle);
        };
        this.upkeepBound = this.upkeep.bind(this);
        for (i = 0; i < this.games.length; i += 1) {
            this.games[i] = this.games[i].bind(this.scope);
        }
        this.setIntervalReal();
    }
    /* Gets
    */
    /**
     * @return {FPSAnalyzer} The FPSAnalyzer used in the GamesRunnr.
     */
    GamesRunnr.prototype.getFPSAnalyzer = function () {
        return this.FPSAnalyzer;
    };
    /**
     * @return {Boolean} Whether this is paused.
     */
    GamesRunnr.prototype.getPaused = function () {
        return this.paused;
    };
    /**
     * @return {Function[]} The Array of game Functions.
     */
    GamesRunnr.prototype.getGames = function () {
        return this.games;
    };
    /**
     * @return {Number} The interval between upkeeps.
     */
    GamesRunnr.prototype.getInterval = function () {
        return this.interval;
    };
    /**
     * @return {Number} The speed multiplier being applied to the interval.
     */
    GamesRunnr.prototype.getSpeed = function () {
        return this.speed;
    };
    /* Runtime
    */
    /**
     * Meaty function, run every <interval*speed> milliseconds, to mark an FPS
     * measurement and run every game once.
     */
    GamesRunnr.prototype.upkeep = function () {
        if (this.paused) {
            return;
        }
        // Prevents double upkeeping, in case a new upkeepNext was scheduled.
        this.upkeepCanceller(this.upkeepNext);
        if (this.adjustFramerate) {
            this.upkeepNext = this.upkeepScheduler(this.upkeepBound, this.intervalReal - (this.upkeepTimed() | 0));
        }
        else {
            this.upkeepNext = this.upkeepScheduler(this.upkeepBound, this.intervalReal);
            this.games.forEach(this.run);
        }
        this.FPSAnalyzer.measure();
    };
    /**
     * A utility for this.upkeep that calls the same games.forEach(run), timing
     * the total execution time.
     *
     * @return {Number} The total time spent, in milliseconds.
     */
    GamesRunnr.prototype.upkeepTimed = function () {
        var now = this.FPSAnalyzer.getTimestamp();
        this.games.forEach(this.run);
        return this.FPSAnalyzer.getTimestamp() - now;
    };
    /**
     * Continues execution of this.upkeep by calling it. If an onPlay has been
     * defined, it's called before.
     */
    GamesRunnr.prototype.play = function () {
        if (!this.paused) {
            return;
        }
        this.paused = false;
        if (this.onPlay) {
            this.onPlay(this);
        }
        this.upkeep();
    };
    /**
     * Stops execution of this.upkeep, and cancels the next call. If an onPause
     * has been defined, it's called after.
     */
    GamesRunnr.prototype.pause = function () {
        if (this.paused) {
            return;
        }
        this.paused = true;
        if (this.onPause) {
            this.onPause(this);
        }
        this.upkeepCanceller(this.upkeep);
    };
    /**
     * Calls upkeep a <num or 1> number of times, immediately.
     *
     * @param {Number} [num]   How many times to upkeep, if not 1.
     */
    GamesRunnr.prototype.step = function (times) {
        this.play();
        this.pause();
        if (times > 0) {
            this.step(times - 1);
        }
    };
    /**
     * Toggles whether this is paused, and calls the appropriate Function.
     */
    GamesRunnr.prototype.togglePause = function () {
        this.paused ? this.play() : this.pause();
    };
    /* Games manipulations
    */
    /**
     * Sets the interval between between upkeeps.
     *
     * @param {Number} The new time interval in milliseconds.
     */
    GamesRunnr.prototype.setInterval = function (interval) {
        var intervalReal = Number(interval);
        if (isNaN(intervalReal)) {
            throw new Error("Invalid interval given to setInterval: " + interval);
        }
        this.interval = intervalReal;
        this.setIntervalReal();
    };
    /**
     * Sets the speed multiplier for the interval.
     *
     * @param {Number} The new speed multiplier. 2 will cause interval to be
     *                 twice as fast, and 0.5 will be half as fast.
     */
    GamesRunnr.prototype.setSpeed = function (speed) {
        var speedReal = Number(speed);
        if (isNaN(speedReal)) {
            throw new Error("Invalid speed given to setSpeed: " + speed);
        }
        this.speed = speedReal;
        this.setIntervalReal();
    };
    /* Utilities
    */
    /**
     * Sets the intervalReal variable, which is interval * (inverse of speed).
     */
    GamesRunnr.prototype.setIntervalReal = function () {
        this.intervalReal = (1 / this.speed) * this.interval;
    };
    /**
     * Curry function to fun a given function. Used in games.forEach(game).
     *
     * @param {Function} game
     */
    GamesRunnr.prototype.run = function (game) {
        game();
    };
    return GamesRunnr;
})();
