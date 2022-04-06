const Draw2d = {
    /**
     * @description 
     * A curried function that returns a function with a CanvasRenderingContext2D argument pre-pended
     * 
     * @param {HTMLCanvasElement} canvasEl 
     * @returns 
     * A function that takes as argument a function that receives a CanvasRenderingContext2D instance
     */
    buildWithContext(canvasEl) {
        const context = canvasEl.getContext("2d");

        return function (fn) {
            return fn.bind(this, context);
        }
    },
    /**
     * @description 
     * A curreid function that returns a function a function with a style config object argument pre-pended
     * 
     * @param {Record<"fillStyle" | "lineCap" | "lineWidth" | "strokeStyle", any>} config 
     * @returns 
     * A function that takes as agrument a function that receives a style config object
     */
    buildWithStyles(config) {
        return function (fn) {
            return fn.bind(this, config);
        }
    },
    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     * @param {Record<"width" | "height", Number>} margins 
     */
    clear(context, margins) {
        context.clearRect(0, 0, margins.width, margins.height);
    },
    /**
     * @description 
     * Draws a line with stroke styles on the provided rendering context
     * 
     * @param {CanvasRenderingContext2D} context 
     * @param {Record<"lineCap" | "lineWidth" | "strokeStyle", any>} styleConfig 
     * @param {Record<"x1" | "x2" | "y1" | "y2">} lineVector
     */
    line(context, styleConfig, lineVector) {
        context.lineCap = styleConfig.lineCap || "square";
        context.lineWidth = styleConfig.lineWidth || 1;
        context.strokeStyle = styleConfig.strokeStyle || "#000000";

        context.beginPath();
        context.moveTo(lineVector.x1, lineVector.y1);
        context.lineTo(lineVector.x2, lineVector.y2);
        context.stroke();
        context.closePath();
    },
    /**
     * @description 
     * Draws an arc with stroke styles on the provided rendering context
     * 
     * @param {CanvasRenderingContext2D} context 
     * @param {Record<"lineCap" | "lineWidth" | "strokeStyle", any>} styleConfig 
     * @param {Record<"x" | "y" | "radius" | "start" | "end" | "clockwise", any>} arcOptions
     */
    arc(context, styleConfig, arcOptions) {
        context.lineCap = styleConfig.lineCap || "square";
        context.lineWidth = styleConfig.lineWidth || 1;
        context.strokeStyle = styleConfig.strokeStyle || "#000000";

        const arcStart = arcOptions.start || 0;
        const arcEnd = arcOptions.end || Math.PI * 2;
        const arcClockwise = arcOptions.clockwise || false;

        context.beginPath();
        context.arc(arcOptions.x, arcOptions.y, arcOptions.radius, arcStart, arcEnd, arcClockwise);
        context.stroke();
        context.closePath();
    },
    /**
     * @description 
     * Draws an arc with fill styles on the provided rendering context
     * 
     * @param {CanvasRenderingContext2D} context 
     * @param {Record<"fillStyle", any>} styleConfig 
     * @param {Record<"x" | "y" | "radius" | "start" | "end" | "clockwise", any>} arcOptions
     */
    arcFilled(context, styleConfig, arcOptions) {
        context.fillStyle = styleConfig.fillStyle || "#000000";

        const arcStart = arcOptions.start || 0;
        const arcEnd = arcOptions.end || Math.PI * 2;
        const arcClockwise = arcOptions.clockwise || false;

        context.beginPath();
        context.arc(arcOptions.x, arcOptions.y, arcOptions.radius, arcStart, arcEnd, arcClockwise);
        context.fill();
        context.closePath();
    },
    /**
     * @description
     * Draws a qudratic bezier curve on the provided rendering context
     * 
     * @param {CanvasRenderingContext2D} context 
     * @param {Record<"lineCap" | "lineWidth" | "strokeStyle", any>} styleConfig 
     * @param {Record<"x1"| "y1" | "cpx1" | "cpy1" | "x2" | "y2", Number>} vector 
     */
    quadraticBezierCurve(context, styleConfig, vector) {
        context.lineCap = styleConfig.lineCap || "square";
        context.lineWidth = styleConfig.lineWidth || 1;
        context.strokeStyle = styleConfig.strokeStyle || "#000000";

        context.beginPath();
        context.moveTo(vector.x1, vector.y1);
        context.quadraticCurveTo(vector.cpx1, vector.cpy1, vector.x2, vector.y2);
        context.stroke();
        context.closePath();
    },
    /**
     * @description
     * Draws a cubic bezier curve on the provided rendering context
     * 
     * @param {CanvasRenderingContext2D} context 
     * @param {Record<"lineCap" | "lineWidth" | "strokeStyle", any>} styleConfig 
     * @param {Record<"x1"| "y1" | "cpx1" | "cpy1" | "cpx2" | "cpy2" | "x2" | "y2", Number>} vector 
     */
    cubicBezierCurve(context, styleConfig, vector) {
        context.lineCap = styleConfig.lineCap || "square";
        context.lineWidth = styleConfig.lineWidth || 1;
        context.strokeStyle = styleConfig.strokeStyle || "#000000";

        context.beginPath();
        context.moveTo(vector.x1, vector.y1);
        context.bezierCurveTo(vector.cpx1, vector.cpy1, vector.cpx2, vector.cpy2, vector.x2, vector.y2);
        context.stroke();
        context.closePath();
    },
};
