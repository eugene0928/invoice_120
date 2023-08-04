import { v4 as uuid } from "uuid";
import { Io } from "../helper/io.helper.js";
import path from "path";

const Invoices = new Io(path.join(process.cwd(), "db", "invoices.json"));

class AddController {
  async post(req, res) {
    const data = await Invoices.read();

    const id = uuid();
    const createdDate = new Date();

    const { fullName, email, dueDate, term, description, price } = req.body;

    const newInvoice = {
      id,
      fullName,
      email,
      paid: false,
      createdDate,
      dueDate,
      term,
      description,
      price,
    };

    await Invoices.write(data.length ? [...data, newInvoice] : [newInvoice]);

    res.status(201).json({ statuscode: 201, message: "Successfuly added" });
  }
}

export default new AddController();
