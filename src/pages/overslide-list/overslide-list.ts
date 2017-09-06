import { Component } from '@angular/core';
import { NavController, IonicPage  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-overslide-list',
  templateUrl: 'overslide-list.html'
})
export class OverSlideListPage {

    items: Array<{title: string, subtitle: string ,description: string, time: string}>;

    constructor(public navCtrl: NavController) {
      this.items = [
        {title : 'Goku', subtitle:'Kahmehameha', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 9:10 AM'},
        {title : 'Vegeta',subtitle:'Canon Galick', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 9:15 AM'},
        {title : 'Picolo', subtitle:'Makenkosapo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 9:30 AM'},
        {title : 'Krilin', subtitle:'Kienzan', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '11/08/2017 9:55 AM'},
        {title : 'Chaozu', subtitle:'Bye Tenshian', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '12/08/2017 10:10 AM'},
        {title : 'Beerus', subtitle:'Destruction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis nunc, a tempus lacus. Vestibulum interdum tellus vel lectus rutrum tempor at quis ante.', time: '13/08/2017 11:10 AM'},
      ];

    }

    handleOverslide(item){
        console.log(JSON.stringify(item));
    }

    archiveClick(item){
        console.log("Archive Clicked" + JSON.stringify(item));
    }

}
