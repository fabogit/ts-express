import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";

const app = express();

// parse json req.body
app.use(express.json());
// parse url encoded req.body
// app.use(express.urlencoded({ extended: true }));

routes(app)

// Error handling
async function throwsError() {
	throw new Error('Woops!');
}

app.get('/error', async (req: Request, res: Response) => {
	try {
		await throwsError();
		res.sendStatus(200);
	} catch (error) {
		res.status(400).send('Error!');
	}
});

// middleware
function handleallMethodsOne(req: Request, res: Response, next: NextFunction) {
	res.send(req.params.foo);
	next();
}
function handleallMethodsTwo(req: Request, res: Response, next: NextFunction) {
	return res.send(req.params.bar);
}

app.all('/api/all/:foo/:bar', handleallMethodsOne, handleallMethodsTwo);

// Function currying
const middleware = ({ name }: { name: string; }) => (req: Request, res: Response, next: NextFunction) => {
	res.locals.name = name;
	console.log(`Middleware`);
	next();
};

app.use(middleware({ name: 'Some name' }));
// add typing for name to the Request generics, params is 1st req.body 3d
app.get('/typing/:paramName', (req: Request<{ paramName: string; }, {}, { name: string; }, {}>, res: Response, next: NextFunction) => {
	return res.send({
		params: req.params.paramName,
		body: req.body.name
	});
});

app.listen(3000, () => {
	console.log('server running on http://localhost:3000');
});