// routing
import { Express } from "express";

// import controllers
import getBookHandler from "../controllers/books.controller";


function routes(app: Express) {
	app.get('/api/books/:bookId/:authorId', getBookHandler);
}

export default routes;