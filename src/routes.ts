import { Router } from "express";

import { TestimonialController } from "./controllers/testimonialController";

const routes = Router();

const testimonialController = new TestimonialController();  

routes.post('/create', (req, res) => {
    testimonialController.create(req, res);
});
routes.get('/getall', (req, res) => {
    testimonialController.getAll(req, res);
});
routes.get('/getfirst', (req, res) => {
    testimonialController.getFirst(req, res);
});

               
export { routes } 