"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATIC_SERVE_ROOT_PATH = exports.ROOT_PATH = exports.STATIC_SERVE_FOLDER = exports.IMAGE_FOLDER = exports.DBURI = exports.NODE_ENV = exports.PORT = void 0;
exports.PORT = process.env.PORT;
exports.NODE_ENV = process.env.NODE_ENV;
exports.DBURI = process.env.DATABASE_URL;
exports.IMAGE_FOLDER = '';
exports.STATIC_SERVE_FOLDER = 'public/';
exports.ROOT_PATH = process.cwd();
exports.STATIC_SERVE_ROOT_PATH = `${process.cwd()}/${exports.STATIC_SERVE_FOLDER}`;
//# sourceMappingURL=constant.js.map