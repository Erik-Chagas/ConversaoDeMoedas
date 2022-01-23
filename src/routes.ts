import { Router } from "express"
import MainController from "./controllers/MainController"

const routes = Router()

routes.post('/create', MainController.handleCreateConversion)
routes.get('/', MainController.handleGetAllConversions)
routes.get('/getone', MainController.handleGetOneConversion)
routes.delete('/delete', MainController.handleDeleteConversion)

export { routes }