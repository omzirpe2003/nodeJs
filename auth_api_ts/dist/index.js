import { createServer } from 'node:http';
import { createServerOfExpress } from "./app/index.js";
function main() {
    try { //servercreatetion    //need handelr
        const app = createServer(createServerOfExpress());
        const PORT = 8080;
        app.listen(PORT, () => {
            console.log(`server is runing on port: ${PORT}`);
        });
    }
    catch (error) {
        console.log("Error come in starting oof server");
        throw error;
    }
}
main();
//# sourceMappingURL=index.js.map