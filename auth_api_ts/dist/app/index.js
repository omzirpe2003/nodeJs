import express from 'express';
import { authRouter } from './auth/router.js';
import { authenticationMidd } from './middelware/auth.meddileware.js';
export function createServerOfExpress() {
    const app = express();
    //middel 
    app.use(express.json());
    app.use(authenticationMidd());
    app.get("/", (req, res) => {
        return res.status(200).json({ msg: "welcome to om zirpe word" });
    });
    app.use("/api/auth", authRouter);
    //routes
    return app;
}
//# sourceMappingURL=index.js.map