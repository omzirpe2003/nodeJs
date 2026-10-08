export class ApiResponse {

    static ok(res, message = "Success", data = null) {
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message,
            data
        });
    }

    static created(res, message = "Created successfully", data = null) {
        return res.status(201).json({
            success: true,
            statusCode: 201,
            message,
            data
        });
    }

    static accepted(res, message = "Request accepted", data = null) {
        return res.status(202).json({
            success: true,
            statusCode: 202,
            message,
            data
        });
    }

    static nonAuthoritative(res, message = "Non-authoritative information", data = null) {
        return res.status(203).json({
            success: true,
            statusCode: 203,
            message,
            data
        });
    }

    static noContent(res) {
        return res.status(204).send();
    }

    static resetContent(res) {
        return res.status(205).send();
    }

    static partialContent(res, message = "Partial content", data = null) {
        return res.status(206).json({
            success: true,
            statusCode: 206,
            message,
            data
        });
    }
}