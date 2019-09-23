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
  // numHardCover: number = 0;

  newItem(): void{
    this.data.push({
      bookTitle: this.bookTitle,
      date: this.date,
      bookType: this.bookType,
      bookSummary: this.bookSummary
    });
    // if (this.bookType === 'Hard Cover') {
    //   this.numHardCover++;
    // }
  }
  deleteBook(index: number): void {
    // if (this.data[index].bookType === 'Hard Cover'){
    //   this.numHardCover--;
    // }
    this.data.splice(index, 1);
  }
  deleteHardCover() {
    let x = this.data.length;

  }
  getHardCoverNo(): number {
    let numHardCover = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].bookType === 'Hard Cover') {
        numHardCover++;
      }
    }
    return numHardCover;
  }

}
