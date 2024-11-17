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
exports.getFood = exports.createFood = exports.getAllFoods = void 0;
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const getAllFoods = () => __awaiter(void 0, void 0, void 0, function* () {
    const [foods] = yield dbConfig_1.default.query('SELECT * FROM foods');
    return foods;
});
exports.getAllFoods = getAllFoods;
const createFood = (name, price, type, image, description) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield dbConfig_1.default.execute('INSERT INTO foods (name, price, type, image, description) VALUES (?, ?)', [name, price, type, image, description]);
    return result;
});
exports.createFood = createFood;
const getFood = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [foods] = yield dbConfig_1.default.query('SELECT * FROM foods WHERE id = ?', [id]);
    return Array.isArray(foods) && foods.length > 0 ? foods[0] : null;
});
exports.getFood = getFood;
