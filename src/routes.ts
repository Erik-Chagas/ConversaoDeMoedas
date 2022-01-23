import { Router } from "express"
import ConversionController from "./controllers/ConversionController"

const routes = Router()

routes.post('/conversions', ConversionController.handleCreateConversion)
routes.get('/', ConversionController.handleGetAllConversions)
routes.get('/conversions/:id', ConversionController.handleGetOneConversion)
routes.delete('/conversions/:id', ConversionController.handleDeleteConversion)

export { routes }