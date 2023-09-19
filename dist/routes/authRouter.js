"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = require("express");
const _authController = /*#__PURE__*/ _interop_require_default(require("../controllers/authController"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const authRouter = (0, _express.Router)();
authRouter.post("/login", _authController.default.login);
authRouter.post("/register", _authController.default.register);
const _default = authRouter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aFJvdXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGF1dGhDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL2F1dGhDb250cm9sbGVyJ1xuXG5jb25zdCBhdXRoUm91dGVyID0gUm91dGVyKClcblxuYXV0aFJvdXRlci5wb3N0KCcvbG9naW4nLCBhdXRoQ29udHJvbGxlci5sb2dpbilcbmF1dGhSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgYXV0aENvbnRyb2xsZXIucmVnaXN0ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXJcbiJdLCJuYW1lcyI6WyJhdXRoUm91dGVyIiwiUm91dGVyIiwicG9zdCIsImF1dGhDb250cm9sbGVyIiwibG9naW4iLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRQTs7O2VBQUE7Ozt5QkFSdUI7dUVBQ0k7Ozs7OztBQUUzQixNQUFNQSxhQUFhQyxJQUFBQSxlQUFNO0FBRXpCRCxXQUFXRSxJQUFJLENBQUMsVUFBVUMsdUJBQWMsQ0FBQ0MsS0FBSztBQUM5Q0osV0FBV0UsSUFBSSxDQUFDLGFBQWFDLHVCQUFjLENBQUNFLFFBQVE7TUFFcEQsV0FBZUwifQ==