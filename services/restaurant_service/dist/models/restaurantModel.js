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
exports.createRestaurantInfo = exports.getRestaurantInfo = void 0;
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const getRestaurantInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const [restaurant] = yield dbConfig_1.default.query('SELECT * FROM restaurant_info');
    return restaurant;
});
exports.getRestaurantInfo = getRestaurantInfo;
const createRestaurantInfo = (name, description, image, phone_number, address) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield dbConfig_1.default.execute('INSERT INTO restaurant_info (name, description, image, phone_number, address) VALUES (?, ?)', [name, description, image, phone_number, address]);
    return result;
});
exports.createRestaurantInfo = createRestaurantInfo;
