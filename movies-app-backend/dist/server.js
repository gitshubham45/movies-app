"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const movies_1 = __importDefault(require("./routes/movies"));
const reviews_1 = __importDefault(require("./routes/reviews"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;
mongoose_1.default.connect(`${mongoUri}`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.json("hello world!");
});
app.use('/api/movies', movies_1.default);
app.use('/api/reviews', reviews_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
