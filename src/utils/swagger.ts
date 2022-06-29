import { Express, Request, Response } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi, { SwaggerOptions } from 'swagger-ui-express';

import { version } from '../../package.json';

const options: SwaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'REST API Docs',
			// project ver dinamically imported from package.json
			version
		},
		components: {
			securitySchemas: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT'
				}
			}
		}
	},
	apis: ['./src/routes/*.ts']
};

const swaggerSpecs = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
	// Swagger page
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

	// Docs in JSON format
	app.get('docs.json', (req: Request, res: Response) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(swaggerSpecs);
	});

	console.log(`API Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;