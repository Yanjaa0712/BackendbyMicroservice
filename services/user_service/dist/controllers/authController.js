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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signUp = void 0;
const authService_1 = require("../services/authService");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, role } = req.body;
        const result = yield (0, authService_1.signup)(email, password, role);
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { token, user } = yield (0, authService_1.login)(email, password);
        res.json({ message: 'Login successful', token, user });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ message: error.message });
        }
        else {
            res.status(401).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.logIn = logIn;
