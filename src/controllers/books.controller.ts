// routes handlers
import { NextFunction, Request, Response } from "express";

// import services

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
function getBookHandler(req: Request, res: Response) {
	const data = {
		name: req.body.name
	};
	return res.send(data);
}

export default getBookHandler;