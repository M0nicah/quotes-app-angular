export class Quotes {
  showDescription : boolean;

  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public description: string,
    public postedDate: Date,
    
  ) {
      this.showDescription = true;
    
  }
}
