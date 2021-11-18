import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit{

  @Output() connected = new EventEmitter();

  form = {
    email: "",
    motDePasse: "",
  };

  persons: any[] = [];

  ngOnInit() {
    axios.get('http://localhost:8001/person')
    .then((response) => {
      this.persons = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  display(model: any) {
    switch(model.name){
      case 'email':
        this.form.email = model.value;
        this.verify()
      break;
      case 'motDePasse':
        this.form.motDePasse = model.value;
        this.verify()
      break;
      default:
        break;
    }
  }
  verify() {
    let accepted = true;
    if(this.form.email == "")
      accepted = false;
    if(this.form.motDePasse == "")
      accepted = false;

    if(accepted) {
      let pers = this.persons.filter(x => x.email == this.form.email && this.form.motDePasse == x.motDePasse)[0];
      if(pers)
        this.connected.emit(pers.id);
      else
        console.log('tsys olona');
    }
  }
}
