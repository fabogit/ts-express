import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import routes from "./routes/books.route";
import swaggerDocs from "./utils/swagger";

const app = express();

// parse json req.body
app.use(express.json());
// parse url encoded req.body
// app.use(express.urlencoded({ extended: true }));

// check res.headers
app.use(helmet());

app.get('/helmet', (req: Request, res: Response) => {
	res.sendStatus(200);
});

const port = 3000;
app.listen(port, () => {
	routes(app);
	console.log(`server running on http://localhost:${port}`);
	swaggerDocs(app, port);
});