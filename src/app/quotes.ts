export class Quotes {
  showDescription: boolean=false;

  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public description: string,
    public postedDate: Date,
    
  ) {
    this.showDescription = false;
  }
}
