import { ResourceWithOptions } from "adminjs";
import { Category, Episode } from "../../models";
import { categoryResourceOptions } from "./category";
import { Course } from "../../models/Course";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";
import { User } from "../../models/User";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions,
        features: courseResourceFeatures
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures
    },
    {
        resource: User,
        options: userResourceOptions
    }
]