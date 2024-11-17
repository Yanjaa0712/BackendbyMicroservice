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
exports.RestaurantModel = void 0;
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
class RestaurantModel {
    constructor() {
        this.pool = dbConfig_1.default; // Assuming dbConfig exports a configured MySQL pool
    }
    getAllRestaurants() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.pool.query('SELECT * FROM restaurants');
            return rows;
        });
    }
    createRestaurant(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // Insert the restaurant into the database
            const [result] = yield this.pool.query('INSERT INTO restaurants (name) VALUES (?)', [name]);
            // Access insertId from the result, which is a ResultSetHeader
            return result.insertId; // Return the newly created restaurant ID
        });
    }
}
exports.RestaurantModel = RestaurantModel;
exports.default = new RestaurantModel();
