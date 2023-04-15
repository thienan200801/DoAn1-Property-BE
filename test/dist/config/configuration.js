"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    dbURI: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET,
    port: process.env.PORT,
});
//# sourceMappingURL=configuration.js.map