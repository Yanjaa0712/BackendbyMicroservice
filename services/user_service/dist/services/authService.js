"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUserById = exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const JWT_SECRET = "your_jwt_secret"; // Replace with your secret key
// Signup service - hash password and store user
const signup = (username, email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10); // Hash password
    const user = {
        username,
        email,
        password: hashedPassword,
        role,
    };
    // Call the model to save the user to the database
    const createdUser = yield (0, userModel_1.createUser)(user);
    return createdUser;
});
exports.signup = signup;
// Login service - compare password and generate JWT token
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userModel_1.findUserByEmail)(email);
    if (!user)
        throw new Error("User not found");
    const passwordMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!passwordMatch)
        throw new Error("Invalid password");
    // Generate JWT token
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    return { token, user };
});
exports.login = login;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userModel_1.findUserById)(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
});
exports.getUserById = getUserById;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userModel_1.getAllUsers)();
    if (!user) {
        throw new Error("Don't get users");
    }
    return user;
});
exports.getUsers = getUsers;
//# sourceMappingURL=authService.js.map