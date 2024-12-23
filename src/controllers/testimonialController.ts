import { Request, Response } from 'express';
import { TestimonialService } from '../services/testimonialService';


const testimonialService = new TestimonialService()

export class TestimonialController {
    
    create = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { testimonial, author } = req.body;
            const testimonialCreated = await testimonialService.create({ testimonial, name: author });
            return res.status(200).json(testimonialCreated);
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error: err})
        }
    }
} 