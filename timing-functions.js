const TimingFunctions = {
    /**
     * @param {Number} timeFraction Integer between 0 and 1
     * @param {Number | undefined} power Positive integer; if not provided will default to 2
     * 
     * @example
     * https://css-tricks.com/emulating-css-timing-functions-javascript/
     */
    easeIn(timeFraction, power) {
        if (timeFraction > 1) {
            timeFraction = 1;
        }

        return Math.pow(timeFraction, power || 2);
    },
    /**
     * @param {Number} timeFraction Integer between 0 and 1
     * @param {Number | undefined} power Positive integer; if not provided will default to 2
     * 
     *  @example
     *  https://css-tricks.com/emulating-css-timing-functions-javascript/
     */
    easeOut(timeFraction, power) {
        if (timeFraction > 1) {
            timeFraction = 1;
        }

        power = power || 2;

        return 1 - Math.pow(1 - timeFraction, power);
    },
    /**
     * @param {Number} timeFraction Integer between 0 and 1
     * 
     *  @example
     *  https://css-tricks.com/emulating-css-timing-functions-javascript/
     */
    easeInOut(timeFraction,) {
        return 0.5 * (Math.sin((timeFraction - 0.5) * Math.PI) + 1);
    }
};
