import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select-list',
  templateUrl: 'select-list.html'
})
export class SelectListPage {
  public selectedItems: Array<any> = new Array;//Selected item number
  public enableSel: boolean = false;//Enable or not selection

  items: Array<{ title: string, subtitle: string, description: string, time: string, checked: boolean }>;

  constructor(public navCtrl: NavController) {

    this.items = [
      { title: 'Goku', subtitle: 'Kahmehameha', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 9:10 AM', checked: false },
      { title: 'Vegeta', subtitle: 'Canon Galick', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 9:15 AM', checked: false },
      { title: 'Picolo', subtitle: 'Makenkosapo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 9:30 AM', checked: false },
      { title: 'Krilin', subtitle: 'Kienzan', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '11/08/2017 9:55 AM', checked: false },
      { title: 'Chaozu', subtitle: 'Bye Tenshian', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 10:10 AM', checked: false },
      { title: 'Beerus', subtitle: 'Destruction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '13/08/2017 11:10 AM', checked: false },
    ];
  }

  pressEvent(e, index) {
    //We enable selection and hilight selected item
    if (!this.enableSel) {
      this.selectedItems.push(index);
      this.items[index].checked = !this.items[index].checked;
      this.enableSel = true;//Turn on selection mode
    }
    else {
      console.log('Do nothing');
    }
  }

  /**NEED A FIX HELP**/
  tapEvent(e, index) {
    if (this.enableSel) {
      this.items[index].checked = !this.items[index].checked;
      if(!this.items[index].checked){
        this.selectedItems.splice(index, 1);
        console.log('Spliced index ' + index);
      }
      else{
        this.selectedItems.push(index);
        console.log('Pushed index ' + index);
      }
      console.log('selectedItems value ' + this.selectedItems);
    }
  }

  //Trrigered when clicking back
  closeSel() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].checked = false;
    }
    this.selectedItems = new Array;
    this.enableSel = false;//Disable selection
  }

}
