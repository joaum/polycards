import * as express from 'express'
import * as path from 'path';

class App {
  public express;
  private staticFolder: string = "../../frontend/build";

  constructor() {
    this.express = express();
    this.mountRoutes();

    // this.express.use(this.staticFolder, express.static('assets'))
    this.express.use(express.static(path.join(__dirname, this.staticFolder)));
  }
  
  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, this.staticFolder + '/index.html'));
    });

    router.get('/hello', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    });

    this.express.use('/', router);
  }
}

export default new App().express;
