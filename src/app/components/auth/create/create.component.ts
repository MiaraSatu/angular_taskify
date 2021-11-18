import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form = {
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    confirmation: ""
  };

  display(model: any) {
    console.log("called");
    switch(model.name){
      case 'nom':
        this.form.nom = model.value;
        this.verifyChamp();
      break;
      case 'prenom':
        this.form.prenom = model.value;
        this.verifyChamp();
      break;
      case 'email':
        this.form.email = model.value;
        this.verifyChamp();
      break;
      case 'motDePasse':
        this.form.motDePasse = model.value;
        this.verifyChamp();
      break;
      case 'confirmation':
        this.form.confirmation = model.value;
        this.verifyChamp();
      break;
      default:
        break;
    }
  }
  verifyChamp(){
    let accepted = true;
    if(this.form.nom == "")
      accepted = false;
    if(this.form.prenom == "")
      accepted = false;
    if(this.form.email == "")
      accepted = false;
    if(this.form.motDePasse == "")
      accepted = false;
    if(this.form.confirmation == "")
      accepted = false;

    if(accepted) {
      axios.post("http://localhost:8001/person/create", this.form);
    }
  }
}
