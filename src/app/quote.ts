export class Quote {
    text: string;
    author: string;
    dateAdded: Date;
    upvote: number;
    downvote: number;

    constructor(text:string, author:string){
        this.text = text;
        this.author =author;
        this.dateAdded = new Date();
        this.upvote = 0;
        this.downvote =0;
    }
}
