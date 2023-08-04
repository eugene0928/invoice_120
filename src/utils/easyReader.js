import fs from "fs";
import path from "path";

export class Fsreader {
  constructor(dir) {
    this.dir = dir;
  }

  async read() {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), this.dir),
      "utf-8"
    );

    return data ? JSON.parse(data) : [];
  }

  async write(data) {
    await fs.promises.writeFile(
      path.join(process.cwd(), this.dir),
      JSON.stringify(data)
    );
  }
}
