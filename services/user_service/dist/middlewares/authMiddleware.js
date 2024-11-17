"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = 'your_jwt_secret'; // Use a stronger secret in production
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Extract token from Authorization header
    if (!token)
        return res.status(403).json({ message: 'No token provided' });
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: 'Unauthorized' });
        req.user = decoded; // Attach user info to request object
        next();
    });
};
exports.verifyToken = verifyToken;
const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};
exports.checkRole = checkRole;
