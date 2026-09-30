import express from 'express';
export function createServerOfExpress() {
    const app = express();
    //middel 
    app.use(express.json());
    app.get("/", (req, res) => {
        return res.status(200).json({ msg: "welcome to om zirpe word" });
    });
    //routes
    return app;
}
//# sourceMappingURL=index.js.map