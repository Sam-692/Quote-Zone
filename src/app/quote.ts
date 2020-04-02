export class Quote {
  splice(index: any, arg1: number) {
    throw new Error("Method not implemented.");
  }
    showDescription: boolean;
  numberOflikes: any;
  numberOfdislikes: any;
    constructor(public id: number,public quote: string,public description: string,public postDate: Date){
      this.showDescription=false;
    }
  }