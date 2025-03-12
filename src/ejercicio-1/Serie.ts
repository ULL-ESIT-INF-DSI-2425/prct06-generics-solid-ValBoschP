import { Media } from "./Media";

export class Serie implements Media {
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public creator: string,
    public seasons: number
  ) {}
}

