import { Component, OnInit, Input } from '@angular/core';
import { Iproject } from 'src/app/data/Iproject';
import { Projects } from 'src/app/data/projects';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  // state
  projects: any[] = [];
  visibleForm: boolean = true;
  form = {
    titre: "",
    description: "",
    dateEstimation: "",
    person: 0
  }
  activeProject?: number; // id project
  @Input() activeUser?: any;

  constructor() { 
  }

  ngOnInit(): void {
    // this.projects = [...this.projects.filter(x => x.personne == this.activeUser)];
    axios.get('http://localhost:8001/project/')
    .then((response) => {
      this.projects = response.data;
    })
    .then(() => {
      this.projects = [...this.projects.filter(x => x.person == this.activeUser)];
    })
    .catch((err) => {
      console.log(err);
    })
  }
  displayVisibleForm() {
    this.visibleForm = !this.visibleForm;
  }
  displayForm(model: any) {
    switch(model.name){
      case 'titre':
        this.form.titre = model.value;
        this.verify()
      break;
      case 'description':
        this.form.description = model.value;
        this.verify()
      break;
      case 'dateEstimation':
        this.form.dateEstimation = model.value;
        this.verify()
      break;
      default:
        break;
    }
  }
  verify() {
    let accepted = true;
    if(this.form.titre == "")
      accepted = false;
    if(this.form.description == "")
      accepted = false;
    if(this.form.dateEstimation == "")
        accepted = false;
    if(accepted) {
      console.log("accepter");
      this.form.person = this.activeUser;
      axios.post('http://localhost:8001/project/create',this.form)

    
    }
  }


  displayProject(id?: number): void {
    this.activeProject = id;
  }
}