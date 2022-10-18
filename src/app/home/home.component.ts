import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text: string = '';
  reversedText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickReverse(){
    this.reversedText = this.text.split('').reverse().join('');
  }

  onInputText($event: any){
    this.text = $event.target.value;
    this.reversedText = '';
  }

  disablebutton(){
    return !this.text.length;
  }
}
