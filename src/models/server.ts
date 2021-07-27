import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';

class Server {
    private app: Application;
    private readonly port: string;
    private path = {}

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';

        // Middlewares
        this.middlewares();

        // Definir las rutas
        this.routes();
    }

    middlewares(): void {
        // Morgan
        this.app.use(morgan('dev'));

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta public
        this.app.use(express.static('public'));
    }

    routes(): void {
        //this.app.use(this.path.users, userRoutes);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}

export default Server;