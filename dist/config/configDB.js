"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "env", {
    enumerable: true,
    get: function() {
        return env;
    }
});
const _dotenv = /*#__PURE__*/ _interop_require_default(require("dotenv"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Load environment variables from the .env file
_dotenv.default.config({
    path: "../../.env"
});
const env = {
    DB_URL: process.env.DB_URL || "",
    DB_NAME: process.env.DB_NAME || "",
    DB_USER: process.env.DB_USER || "",
    DB_PASSWORD: process.env.DB_PASSWORD || ""
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlnREIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuLy8gTG9hZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZnJvbSB0aGUgLmVudiBmaWxlXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy4uLy4uLy5lbnYnIH0pO1xuXG4vLyBEZWZpbmUgdHlwZXMgZm9yIGVudmlyb25tZW50IHZhcmlhYmxlc1xudHlwZSBFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHtcbiAgREJfVVJMOiBzdHJpbmc7XG4gIERCX05BTUU6IHN0cmluZztcbiAgREJfVVNFUjogc3RyaW5nO1xuICBEQl9QQVNTV09SRDogc3RyaW5nO1xufTtcblxuLy8gRXhwb3J0IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbmV4cG9ydCBjb25zdCBlbnY6IEVudmlyb25tZW50VmFyaWFibGVzID0ge1xuICBEQl9VUkw6IHByb2Nlc3MuZW52LkRCX1VSTCB8fCAnJyxcbiAgREJfTkFNRTogcHJvY2Vzcy5lbnYuREJfTkFNRSB8fCAnJyxcbiAgREJfVVNFUjogcHJvY2Vzcy5lbnYuREJfVVNFUiB8fCAnJyxcbiAgREJfUEFTU1dPUkQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JEIHx8ICcnLFxufTtcbiJdLCJuYW1lcyI6WyJlbnYiLCJkb3RlbnYiLCJjb25maWciLCJwYXRoIiwiREJfVVJMIiwicHJvY2VzcyIsIkRCX05BTUUiLCJEQl9VU0VSIiwiREJfUEFTU1dPUkQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYWFBOzs7ZUFBQUE7OzsrREFiTTs7Ozs7O0FBQ25CLGdEQUFnRDtBQUNoREMsZUFBTSxDQUFDQyxNQUFNLENBQUM7SUFBRUMsTUFBTTtBQUFhO0FBVzVCLE1BQU1ILE1BQTRCO0lBQ3ZDSSxRQUFRQyxRQUFRTCxHQUFHLENBQUNJLE1BQU0sSUFBSTtJQUM5QkUsU0FBU0QsUUFBUUwsR0FBRyxDQUFDTSxPQUFPLElBQUk7SUFDaENDLFNBQVNGLFFBQVFMLEdBQUcsQ0FBQ08sT0FBTyxJQUFJO0lBQ2hDQyxhQUFhSCxRQUFRTCxHQUFHLENBQUNRLFdBQVcsSUFBSTtBQUMxQyJ9