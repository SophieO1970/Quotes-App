import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'The way to get started is to quit talking and begin doing', 'Elizabeth Michael','kelly Brooks', new Date(2020, 6, 15)),
    new Quote(2, 'The most beautiful things in the world cannot be touched. They must be felt with the heart', 'Helen Keller','Kevin Munene', new Date(2020, 7, 18)),
    new Quote(3,'Difficult roads often lead to beatiful destinations', 'George Hawk', 'Peter Muturi', new Date(2020, 4, 20)),
    new Quote(4,'With a heart so weak, maybe love was just never meant for me', 'Sophie Olonde', 'Staford Omwakwe', new Date(2020, 5, 13)),
    new Quote(5, 'You are only here for a short visit', 'Alehandro Mike', 'Lawrence Karanja', new Date(2020, 8, 20))
  ];

  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  highestUpVote() {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }

  addNewQuote(newQuote: Quote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
