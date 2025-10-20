export default class ErrorService extends Error {
    static errorCode = Object.freeze({
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        CONFLICT: 409,
    });

    
    constructor(message, code = 500) {
        super(message);
        this.code = code;
    }

    
    static handleError(error) {
       
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((item) => item.message);
            return new ErrorService(messages.join(",").trim(), this.errorCode.BAD_REQUEST);
        }

       
        if (error.code === 11000) {
            return new ErrorService(error.message, this.errorCode.CONFLICT);
        }

        
        if (Object.values(ErrorService.errorCode).includes(error.code)) {
            return new ErrorService(error.message, error.code);
        }

        
        return new ErrorService(error.message, 500);
    }
}