import { Component } from '@angular/core';
import {IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-emoji-picker',
  templateUrl: 'emoji-picker.html'
})
export class EmojiPickerPage {

  toggled: boolean = false;
  emojitext: string = "What about this ? 💣";

  constructor() {

  }

  handleSelection(event) {
    this.emojitext = this.emojitext + " " + event.char;
  }

}
