const validate = (ajvValidate) => {
    return (req, res, next) => {
        const valid = ajvValidate(req.body);
        if (!valid) {
            const error = ajvValidate.errors;
            res.status(400).json({
                message: error[0].message,
                error: true,
            });
        } else {
            next();
        }
    }
}

module.exports = validate
