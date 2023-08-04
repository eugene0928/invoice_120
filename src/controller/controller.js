import { Fsreader } from "../utils/easyReader.js";

const fsReader = new Fsreader("db/complaint.json");

export class Controller {
  async getTrue(req, res) {
    const data = await fsReader.read();
    console.log(data);
    const arr = await data.filter((item) => item.status === true);

    res.status(200).json({ status: 200, data: arr, message: "success" });
  }

  async getFalse(req, res) {
    const data = await fsReader.read();

    const arr = data.filter((item) => item.status === false);

    res.status(200).json({ status: 200, data: arr, message: "success" });
  }
}
