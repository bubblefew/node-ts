//// this file for auth middleware
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "authMiddleware", {
    enumerable: true,
    get: function() {
        return authMiddleware;
    }
});
const authMiddleware = (req, res, next)=>{
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2F1dGhNaWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8gdGhpcyBmaWxlIGZvciBhdXRoIG1pZGRsZXdhcmVcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJ1xuXG5leHBvcnQgY29uc3QgYXV0aE1pZGRsZXdhcmUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgY29uc3QgYXV0aG9yaXphdGlvbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb25cbiAgaWYgKCFhdXRob3JpemF0aW9uKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcbiAgfVxuICBjb25zdCB0b2tlbiA9IGF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcbiAgfVxuICBuZXh0KClcbn1cbiJdLCJuYW1lcyI6WyJhdXRoTWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidG9rZW4iLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDOzs7OzsrQkFHckJBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLGlCQUFpQixDQUFDQyxLQUFjQyxLQUFlQztJQUMxRCxNQUFNQyxnQkFBZ0JILElBQUlJLE9BQU8sQ0FBQ0QsYUFBYTtJQUMvQyxJQUFJLENBQUNBLGVBQWU7UUFDbEIsT0FBT0YsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDeEQ7SUFDQSxNQUFNQyxRQUFRTCxjQUFjTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDekMsSUFBSSxDQUFDRCxPQUFPO1FBQ1YsT0FBT1AsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDeEQ7SUFDQUw7QUFDRiJ9