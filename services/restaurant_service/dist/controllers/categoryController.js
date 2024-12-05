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
exports.deleteCategoryById = exports.getCategoryById = exports.addCategory = exports.getCategories = void 0;
const categoryModel_1 = require("../models/categoryModel");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, categoryModel_1.getAllCategories)();
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
    }
});
exports.getCategories = getCategories;
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, categoryID, image, description } = req.body;
    try {
        const result = yield (0, categoryModel_1.createCategory)(name, description);
        res.status(201).json({ message: 'Food item created', id: result.insertId });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating food item', error });
    }
});
exports.addCategory = addCategory;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield (0, categoryModel_1.getCategory)(Number(id));
        if (!category) {
            return res.status(404).json({ message: 'Category item not found' });
        }
        res.json(category);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching category item', error });
    }
});
exports.getCategoryById = getCategoryById;
const deleteCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const success = yield (0, categoryModel_1.deleteCategory)(Number(id));
        if (!success) {
            return res.status(404).json({ message: 'Category item not found' });
        }
        res.json({ message: 'Category item deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting Category item', error });
    }
});
exports.deleteCategoryById = deleteCategoryById;
