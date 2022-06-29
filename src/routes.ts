import { Express, NextFunction, Request, Response } from "express";

function routes(app: Express) {
	app.route('/api/crud')
		.get((req: Request, res: Response) => {
			return res.status(200).send('GET request');
		})
		.post((req: Request, res: Response) => {
			console.log(req.body);
			return res.status(201).send('POST request');
		})
		.put((req: Request, res: Response) => {
			console.log(req.body);
			return res.status(201).send('PUT request');
		}).delete((req: Request, res: Response) => {
			console.log(req.body);
			return res.status(200).send('DELETE request');
		});
}

export default routes;