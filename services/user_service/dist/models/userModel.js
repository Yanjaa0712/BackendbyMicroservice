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
exports.getAllUsers = exports.findUserById = exports.findUserByEmail = exports.createUser = void 0;
// src/models/userModel.ts
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
// Create a new user
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield dbConfig_1.default.execute("INSERT INTO user (username, email, password, role) VALUES (?, ?, ?, ?)", [user.username, user.email, user.password, user.role]);
        return result; // Return the result of the insertion
    }
    catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Internal Server Error");
    }
});
exports.createUser = createUser;
// Find user by email
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield dbConfig_1.default.execute("SELECT * FROM user WHERE email = ?", [email]);
        if (Array.isArray(rows) && rows.length > 0) {
            return rows[0]; // Return the first matched user
        }
        return null; // No user found
    }
    catch (error) {
        console.error("Error fetching user by email:", error);
        throw new Error("Internal Server Error");
    }
});
exports.findUserByEmail = findUserByEmail;
// Find user by id
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield dbConfig_1.default.execute("SELECT * FROM user WHERE id = ?", [id]);
        if (Array.isArray(rows) && rows.length > 0) {
            return rows[0]; // Return the user by id
        }
        return null; // No user found
    }
    catch (error) {
        console.error("Error fetching user by id:", error);
        throw new Error("Internal Server Error");
    }
});
exports.findUserById = findUserById;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const [users] = yield dbConfig_1.default.query('SELECT * FROM user');
    return users;
});
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=userModel.js.map