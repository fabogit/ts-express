// routing
import { Express, Request, Response } from "express";

// import controllers
import getBookHandler from "../controllers/books.controller";



function routes(app: Express) {

/**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
	app.get('/healtcheck', (req, res) => res.sendStatus(200));
}

export default routes;