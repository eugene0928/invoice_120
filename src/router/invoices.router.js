import { Router } from 'express'
import InvoicesController from '../controller/invoices.controller.js'

const InvoicesRouter = Router()

InvoicesRouter.get('/',InvoicesController.get)

export default InvoicesRouter