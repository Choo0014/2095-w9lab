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
  bookTitle: string = '';
  date: string = '';
  bookType: string = '';
  bookSummary: string = '';
  numHardCover: number = 0;

  newItem() {
    this.data.push({
      bookTitle: this.bookTitle,
      date: this.date,
      bookType: this.bookType,
      bookSummary: this.bookSummary
    });
    if (this.bookType === 'Hard Cover') {
      this.numHardCover++;
    }
  }
  deleteBook(index: number) {
    if (this.data[index].bookType === 'Hard Cover'){
      this.numHardCover--;
    }
    this.data.splice(index, 1);
  }
  deleteHardCover() {
    let x = this.data.length;

  }
}
