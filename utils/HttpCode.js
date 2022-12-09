class HttpCode {
    /**
     * @param {Number} code
     * @param {String} message
     * @param {String?} cause
     */
    constructor(code, message, cause = undefined) {
        this.code = code;
        this.message = message;
        this.cause = cause;
    }
}

const HttpCodes = Object.freeze({
    400: new HttpCode(400, 'Bad Request'),
    401: new HttpCode(401, 'Unauthorized'),
    403: new HttpCode(403, 'Forbidden'),
    404: new HttpCode(404, 'Not found'),
    409: new HttpCode(409, 'Conflict'),
    422: new HttpCode(422, 'Unprocessable Entity'), // semantic errors or required parameter is missing
    440: new HttpCode(440, 'Off session'),
    500: new HttpCode(500, 'Internal Server Error'),
});
/**
 *
 * @param {HttpCode} error
 * @returns {Boolean}
 */
const isHttpCode = (error) => {
    for (let i in HttpCodes) {
        if (HttpCodes[i] === error.code) return true;
    }
    return false;
};
/**
 *
 * @param {HttpCode} error
 * @param {String} cause
 * @returns {HttpCode}
 */
const getHttpCode = (error, cause = undefined) => {
    /**
     * @type {HttpCode}
     */
    let result;
    if (isHttpCode(error)) {
        result = error;
    } else {
        result = HttpCodes[500];
    }

    if (cause) result.cause = cause;

    return result;
};

module.exports = {
    HttpCodes,
    getHttpCode,
};
