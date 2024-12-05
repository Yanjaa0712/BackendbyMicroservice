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
exports.getSizeByFoodId = exports.createFoodSize = exports.getAllFoodSizes = void 0;
// food_service/src/models/foodsizeModel.ts
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const getAllFoodSizes = () => __awaiter(void 0, void 0, void 0, function* () {
    const [foodsize] = yield dbConfig_1.default.query("SELECT * FROM food_size");
    return foodsize;
});
exports.getAllFoodSizes = getAllFoodSizes;
const createFoodSize = (size_name, size_price, food_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield dbConfig_1.default.execute("INSERT INTO food_size (size_name, size_price, food_id) VALUES (?, ?, ?)", [size_name, size_price, food_id]);
    return result;
});
exports.createFoodSize = createFoodSize;
const getSizeByFoodId = (food_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [food_sizes] = yield dbConfig_1.default.query("SELECT * FROM food_size WHERE food_id = ?", [food_id]);
    return Array.isArray(food_sizes) && food_sizes.length > 0 ? food_sizes : null;
});
exports.getSizeByFoodId = getSizeByFoodId;
