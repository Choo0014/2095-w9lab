import {
  Component
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  bookTitle = '';
  date = '';
  bookType = '';
  bookSummary = '';
  numHardCover = 0;

  newItem() {
    this.data.push({
      bookTitle: this.bookTitle,
      date: this.date,
      bookType: this.bookType,
      bookSummary: this.bookSummary,
    });
    if (this.bookType === 'Hard Cover') {
      this.numHardCover++;
    }
  }
  deleteBook(x) {
    this.data.splice(x, 1);
  }
  deleteHardCover() {
    let x = this.data.length;

  }
}
