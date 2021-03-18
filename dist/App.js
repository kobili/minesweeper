"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Minefield_1 = __importDefault(require("./Minefield"));
var mineField = new Minefield_1.default(9, 9, 10);
// let mineField = new Minefield(3, 3, 3);
mineField.test();
