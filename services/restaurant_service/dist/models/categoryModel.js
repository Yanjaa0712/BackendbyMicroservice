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
exports.deleteCategory = exports.getCategory = exports.createCategory = exports.getAllCategories = void 0;
// food_service/src/models/categoryModel.ts
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const [category] = yield dbConfig_1.default.query('SELECT * FROM category');
    return category;
});
exports.getAllCategories = getAllCategories;
const createCategory = (name, description) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield dbConfig_1.default.execute('INSERT INTO category (name, description) VALUES (?, ?)', [name, description]);
    return result;
});
exports.createCategory = createCategory;
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [category] = yield dbConfig_1.default.query('SELECT * FROM category WHERE id = ?', [id]);
    return Array.isArray(category) && category.length > 0 ? category[0] : null;
});
exports.getCategory = getCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield dbConfig_1.default.query('DELETE FROM category WHERE id = ?', [id]);
    return result.affectedRows > 0;
});
exports.deleteCategory = deleteCategory;
