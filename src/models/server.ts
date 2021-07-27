import express, {Application} from 'express';

class Server {
    private app: Application;
    private readonly port: string;
    private path = {

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}

export default Server;