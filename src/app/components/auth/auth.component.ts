import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Output() connected = new EventEmitter();

  hasAccount:Boolean = false;
  buttonText: string = "connecter";

  constructor() { }

  ngOnInit(): void {
  }

  changeStatusAccount() {
    this.hasAccount = !this.hasAccount;
    this.buttonText = ("connecter") ? "Créer un compte" : "connecter";
  }

  handleConnected(param: any) {
    // console.log("evenement appellee");
    this.connected.emit(param);
  }

}
