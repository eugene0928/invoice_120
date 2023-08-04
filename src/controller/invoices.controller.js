import Io from "../helper/Io.js";
import path from "path";

const Invoices = new Io(path.join(process.cwd(),"db","invoices.json"))

class InvoicesController {
  async get(req,res){
    try {
        //reading data 
        const data = await Invoices.read()

        //sending response with data
        res.status(200).json(data)

    } catch (error) {
        console.log(error.message);
    }
  }
}

export default new InvoicesController
