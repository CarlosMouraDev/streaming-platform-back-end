import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const coursesController = {
    // GET /courses/:id
    show: async (req:Request, res: Response) => {
        const { id } = req.params

        try {
            const courseFound = await courseService.findByIdWithEpisodes(id)
            return res.json(courseFound)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}