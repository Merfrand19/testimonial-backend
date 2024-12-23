import { Router } from "express";

import { TestimonialController } from "./controllers/testimonialController";

const routes = Router();

const testimonialController = new TestimonialController();  

routes.post('/create', (req, res) => {
    testimonialController.create(req, res);
});

               
export { routes } 