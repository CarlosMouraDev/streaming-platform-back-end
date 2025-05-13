import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSEquelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashBoardOptions } from "./dashBoard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSEquelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: adminJsResources,
    locale: locale,
    branding: brandingOptions,
    dashboard: dashBoardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, 
  authenticationOptions, 
  null,
  {
    resave: false,
    saveUninitialized: false
})