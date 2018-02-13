import { Component } from '@angular/core';
import { User } from './user/iUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  selectedDesk: string = '';
  deskType: any[] = ['CASH', 'PORTFOLIO'];
  data: string[];
  scheduleCountries: any[] = [
    {
      'CASH': ['Brazil', 'USA', 'Canada', 'France', 'Italy']

    },
    {
      'PORTFOLIO': ['ABC', 'XYZ', 'KLM']
    }
  ];

  getKeyValue(key: string): any[] {
    let data;
    for (let i = 0; i < this.scheduleCountries.length; i++) {
      data = this.scheduleCountries[i];
      console.log("data is", data);
      if (this.scheduleCountries[i] && this.scheduleCountries[i].hasOwnProperty(key)) {
        return this.scheduleCountries[i][key];
      }
      console.log("data is", data);
    }
    //return [];
  }
  constructor() {

  }
  onSelectChange(event: any) {
    debugger;

    this.selectedDesk = event.target.value;
    this.data = this.getKeyValue(this.selectedDesk);
    // console.log(typeof data);
    // console.log(data, data[event.target.value]);
    // this.data = data[event.target.value];
  }

  onSave(formValue:any){
    alert(formValue.toString());
  }

}