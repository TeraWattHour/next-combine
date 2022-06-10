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
exports.composeServerSideProps = void 0;
const lodash_1 = __importDefault(require("lodash"));
const composeServerSideProps = (...use) => {
    const handler = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        let p = {};
        for (const useFn of use) {
            const result = yield useFn(ctx, p);
            if (result.notFound) {
                return { notFound: true };
            }
            if (result.redirect) {
                return { redirect: result.redirect };
            }
            p = lodash_1.default.merge(p, result.props);
            if (result.break) {
                return { props: p };
            }
        }
        return { props: p };
    });
    return handler;
};
exports.composeServerSideProps = composeServerSideProps;
