import { promises } from "fs";

export class Io {
  #dir;
  constructor(dir) {
    this.#dir = dir;
  }

  async read() {
    const data = await promises.readFile(this.#dir, "utf8");
    return data ? JSON.parse(data) : [];
  }

  async write(data) {
    await promises.writeFile(this.#dir, JSON.stringify(data, null, 2), "utf8");
  }
}
