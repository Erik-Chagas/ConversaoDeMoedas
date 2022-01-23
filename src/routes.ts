import { Router } from "express"
import MainController from "./controllers/MainController"

const routes = Router()

routes.post('/create', MainController.handleCreateConversion)

export { routes }