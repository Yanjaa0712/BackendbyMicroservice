"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 4001;
app_1.app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map