import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('The way to get started is to quit talking and begin doing', 'Elizabeth Michael'),
    new Quote('The most beautiful things in the world cannot be touched. They must be felt with the heart', 'Helen Keller'),
    new Quote('Difficult roads often lead to beatiful destinations', 'George Hawk'),
    new Quote('With a heart so weak, maybe love was just never meant for me', 'Sophie Olonde'),
  ];

  upVote(index) {
    this.quotes[index].upvote = this.quotes[index].upvote + 1;
  }

  downVote(index) {
    this.quotes[index].downvote++;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
