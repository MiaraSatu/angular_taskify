import { Component, OnInit } from '@angular/core';
import axios  from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  connected: boolean = false;
  activeUser: number = 1;


  ngOnInit() {
    axios.get('http://localhost:8001/')
    .then((response: any) => {
      console.log(response);
    })

    .catch((err) => {
      console.error(err);
    })
  }

  handleConnected(param :any) {
    this.connected = true;
    this.activeUser = param;
  }

}
