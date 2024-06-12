"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    }
    else {
        res.status(403).json({ error: "Access forbidden: Admins only" });
    }
};
exports.default = authorizeAdmin;
//# sourceMappingURL=adminauth.js.map