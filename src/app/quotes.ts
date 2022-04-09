export class Quotes {
  showDescription: boolean;

  constructor(
    public id: Number,
    public quote: String,
    public author: String,
    public description: String,
    
  ) {
    this.showDescription = false;
  }
}
