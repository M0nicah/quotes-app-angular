
export class Quotes {
  showDatePosted: boolean = false;
  

  constructor(
    public id: number,
    public name: string,
    public title: string,
    public quote: string,
    public author: string,
    public datePosted: Date,

  ) {}
}
