export function Logger(req, res, next) {
    console.log(`Data: ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url}`);
    next();
}
;
//# sourceMappingURL=logger.middleware.js.map