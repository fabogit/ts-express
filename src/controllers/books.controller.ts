// routes handlers
import { Express, NextFunction, Request, Response } from "express";

// import services

function getBookHandler(req: Request, res: Response, next: NextFunction) {
	//@ts-ignore
	return res.send('GET request');
}

export default getBookHandler;