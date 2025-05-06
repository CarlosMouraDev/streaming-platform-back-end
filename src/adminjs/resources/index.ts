import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOptions } from "./category";
import { Course } from "../../models/Course";
import { courseResourceOptions } from "./course";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions
    }
]