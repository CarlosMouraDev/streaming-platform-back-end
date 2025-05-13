import AdminJS, { PageHandler } from "adminjs"
import { User } from "../models/User"
import { Category, Course, Episode } from "../models"

export const dashBoardOptions: {
    handler?: PageHandler
    component?: string
 } = {
      component: AdminJS.bundle('./components/Dashboard'),
      handler: async (requestAnimationFrame, res, context) => {
        const course = await Course.count()
        const episodes = await Episode.count()
        const categories = Category.count()
        const standardUsers = await User.count({where: { role: 'user'}})

        res.json({
          'Cursos': course,
          'Episódios': episodes,
          'Categorias': categories,
          'Usuários': standardUsers
        })
    }
}