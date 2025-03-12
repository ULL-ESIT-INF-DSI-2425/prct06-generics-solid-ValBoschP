import { Media } from "./Media";

export class Documentary implements Media {
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public director: string,
    public duration: number // In minutes
  ) {}
}