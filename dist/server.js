"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _authRouter = /*#__PURE__*/ _interop_require_default(require("./routes/authRouter"));
const _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
const _cors = /*#__PURE__*/ _interop_require_default(require("cors"));
const _helmet = /*#__PURE__*/ _interop_require_default(require("helmet"));
const _authMiddleware = require("./middleware/authMiddleware");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
require("dotenv").config({
    path: "../.env"
});
const app = (0, _express.default)();
const port = process.env.PORT || 3000;
app.use(_express.default.json());
app.use(_express.default.urlencoded({
    extended: false
}));
app.use((0, _morgan.default)("combined"));
app.use((0, _cors.default)());
app.use(_helmet.default.crossOriginResourcePolicy({
    policy: "cross-origin"
}));
app.use("/auth", _authMiddleware.authMiddleware, _authRouter.default);
app.use("/api/images", _express.default.static("./src/public/images"));
app.use("/api/images", (req, res, next)=>{
    const error = {
        status: 404,
        message: "Not found"
    };
    next(error);
});
app.get("/", (req, res)=>{
    res.json(`Server started on port ${port}`);
});
app.listen(port, ()=>console.log(`Server started on port ${port}`));
app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error"
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgYXV0aFJvdXRlciBmcm9tICcuL3JvdXRlcy9hdXRoUm91dGVyJ1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoeyBwYXRoOiAnLi4vLmVudicgfSlcblxuaW1wb3J0IHsgYXV0aE1pZGRsZXdhcmUgfSBmcm9tICcuL21pZGRsZXdhcmUvYXV0aE1pZGRsZXdhcmUnXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gJy4vbW9kZWxzL0Vycm9yJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKVxuYXBwLnVzZShtb3JnYW4oJ2NvbWJpbmVkJykpXG5hcHAudXNlKGNvcnMoKSlcbmFwcC51c2UoaGVsbWV0LmNyb3NzT3JpZ2luUmVzb3VyY2VQb2xpY3koeyBwb2xpY3k6ICdjcm9zcy1vcmlnaW4nIH0pKVxuXG5hcHAudXNlKCcvYXV0aCcsIGF1dGhNaWRkbGV3YXJlLCBhdXRoUm91dGVyKVxuYXBwLnVzZSgnL2FwaS9pbWFnZXMnLCBleHByZXNzLnN0YXRpYygnLi9zcmMvcHVibGljL2ltYWdlcycpKVxuXG5hcHAudXNlKCcvYXBpL2ltYWdlcycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBjb25zdCBlcnJvcjogRXJyb3IgPSB7XG4gICAgc3RhdHVzOiA0MDQsXG4gICAgbWVzc2FnZTogJ05vdCBmb3VuZCcsXG4gIH1cbiAgbmV4dChlcnJvcilcbn0pXG5cbmFwcC5nZXQoJy8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5qc29uKGBTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICR7cG9ydH1gKVxufSlcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBzdGFydGVkIG9uIHBvcnQgJHtwb3J0fWApKVxuXG5hcHAudXNlKChlcnJvcjogYW55LCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmpzb24oe1xuICAgIGVycm9yOiB7XG4gICAgICBzdGF0dXM6IGVycm9yLnN0YXR1cyB8fCA1MDAsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxuICAgIH0sXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJwYXRoIiwiYXBwIiwiZXhwcmVzcyIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJtb3JnYW4iLCJjb3JzIiwiaGVsbWV0IiwiY3Jvc3NPcmlnaW5SZXNvdXJjZVBvbGljeSIsInBvbGljeSIsImF1dGhNaWRkbGV3YXJlIiwiYXV0aFJvdXRlciIsInN0YXRpYyIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJnZXQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7O2dFQUF5RDttRUFDbEM7K0RBQ0o7NkRBQ0Y7K0RBQ0U7Z0NBSVk7Ozs7OztBQUYvQkEsUUFBUSxVQUFVQyxNQUFNLENBQUM7SUFBRUMsTUFBTTtBQUFVO0FBSzNDLE1BQU1DLE1BQU1DLElBQUFBLGdCQUFPO0FBQ25CLE1BQU1DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJO0FBRWpDTCxJQUFJTSxHQUFHLENBQUNMLGdCQUFPLENBQUNNLElBQUk7QUFDcEJQLElBQUlNLEdBQUcsQ0FBQ0wsZ0JBQU8sQ0FBQ08sVUFBVSxDQUFDO0lBQUVDLFVBQVU7QUFBTTtBQUM3Q1QsSUFBSU0sR0FBRyxDQUFDSSxJQUFBQSxlQUFNLEVBQUM7QUFDZlYsSUFBSU0sR0FBRyxDQUFDSyxJQUFBQSxhQUFJO0FBQ1pYLElBQUlNLEdBQUcsQ0FBQ00sZUFBTSxDQUFDQyx5QkFBeUIsQ0FBQztJQUFFQyxRQUFRO0FBQWU7QUFFbEVkLElBQUlNLEdBQUcsQ0FBQyxTQUFTUyw4QkFBYyxFQUFFQyxtQkFBVTtBQUMzQ2hCLElBQUlNLEdBQUcsQ0FBQyxlQUFlTCxnQkFBTyxDQUFDZ0IsTUFBTSxDQUFDO0FBRXRDakIsSUFBSU0sR0FBRyxDQUFDLGVBQWUsQ0FBQ1ksS0FBY0MsS0FBZUM7SUFDbkQsTUFBTUMsUUFBZTtRQUNuQkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFDQUgsS0FBS0M7QUFDUDtBQUVBckIsSUFBSXdCLEdBQUcsQ0FBQyxLQUFLLENBQUNOLEtBQWNDO0lBQzFCQSxJQUFJWixJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRUwsS0FBSyxDQUFDO0FBQzNDO0FBQ0FGLElBQUl5QixNQUFNLENBQUN2QixNQUFNLElBQU13QixRQUFRQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsRUFBRXpCLEtBQUssQ0FBQztBQUVuRUYsSUFBSU0sR0FBRyxDQUFDLENBQUNlLE9BQVlILEtBQWNDLEtBQWVDO0lBQ2hERCxJQUFJRyxNQUFNLENBQUNELE1BQU1DLE1BQU0sSUFBSSxLQUFLZixJQUFJLENBQUM7UUFDbkNjLE9BQU87WUFDTEMsUUFBUUQsTUFBTUMsTUFBTSxJQUFJO1lBQ3hCQyxTQUFTRixNQUFNRSxPQUFPLElBQUk7UUFDNUI7SUFDRjtBQUNGIn0=