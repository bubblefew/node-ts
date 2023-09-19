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
const authController = {
    login: (req, res)=>{
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(400).json({
                    status: "fail",
                    message: "username or password is required"
                });
            }
            res.json({
                status: "success",
                data: {
                    username,
                    password
                }
            });
        } catch (error) {
            res.status(500).send({
                message: error.message
            });
        }
    },
    register: (req, res)=>{
        try {
            const { username, password } = req.body;
            res.json({
                message: "register",
                username,
                password
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    }
};
const _default = authController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInXG5cbmNvbnN0IGF1dGhDb250cm9sbGVyID0ge1xuICBsb2dpbjogKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VyID0gcmVxLmJvZHlcbiAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3RhdHVzOiAnZmFpbCcsIG1lc3NhZ2U6ICd1c2VybmFtZSBvciBwYXNzd29yZCBpcyByZXF1aXJlZCcgfSlcbiAgICAgIH1cbiAgICAgIHJlcy5qc29uKHsgc3RhdHVzOiAnc3VjY2VzcycsIGRhdGE6IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogc3RyaW5nIHwgYW55KSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSlcbiAgICB9XG4gIH0sXG4gIHJlZ2lzdGVyOiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IFVzZXIgPSByZXEuYm9keVxuICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiAncmVnaXN0ZXInLCB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogc3RyaW5nIHwgYW55KSB7XG4gICAgICByZXMuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSlcbiAgICB9XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhDb250cm9sbGVyXG4iXSwibmFtZXMiOlsiYXV0aENvbnRyb2xsZXIiLCJsb2dpbiIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYXRhIiwiZXJyb3IiLCJzZW5kIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeUJBOzs7ZUFBQTs7O0FBdEJBLE1BQU1BLGlCQUFpQjtJQUNyQkMsT0FBTyxDQUFDQyxLQUFjQztRQUNwQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFTSCxJQUFJSSxJQUFJO1lBQzdDLElBQUksQ0FBQ0YsWUFBWSxDQUFDQyxVQUFVO2dCQUMxQkYsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUQsUUFBUTtvQkFBUUUsU0FBUztnQkFBbUM7WUFDckY7WUFDQU4sSUFBSUssSUFBSSxDQUFDO2dCQUFFRCxRQUFRO2dCQUFXRyxNQUFNO29CQUFFTjtvQkFBVUM7Z0JBQVM7WUFBRTtRQUM3RCxFQUFFLE9BQU9NLE9BQXFCO1lBQzVCUixJQUFJSSxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDO2dCQUFFSCxTQUFTRSxNQUFNRixPQUFPO1lBQUM7UUFDaEQ7SUFDRjtJQUNBSSxVQUFVLENBQUNYLEtBQWNDO1FBQ3ZCLElBQUk7WUFDRixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFLEdBQVNILElBQUlJLElBQUk7WUFDN0NILElBQUlLLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBWUw7Z0JBQVVDO1lBQVM7UUFDckQsRUFBRSxPQUFPTSxPQUFxQjtZQUM1QlIsSUFBSUssSUFBSSxDQUFDO2dCQUFFQyxTQUFTRSxNQUFNRixPQUFPO1lBQUM7UUFDcEM7SUFDRjtBQUNGO01BRUEsV0FBZVQifQ==