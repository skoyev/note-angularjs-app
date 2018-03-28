export class Task {
  name: string;
  details: string;
  keywords: Array<string> = [];
  date: string;

  constructor(name:string, details:string, keywords:Array<string>, date:string){
    this.name = name;
    this.details = details;
    this.keywords = keywords;
    this.date = date;
  }
}
