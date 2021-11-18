import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Itask } from '../../../../data/Itask';
import { tasks } from '../../../../data/tasks';
import axios from 'axios';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit, OnChanges {

  // Declare: Itask[] = tasks;
  Declare: any[] = [];
  Encours: any[] = [];
  Acheves: any[] = [];
  Tasks: any[] = [];
  
  @Input() idProject?: any;

  visibleForm: boolean = true;

  form = {
    titre: "",
    description: "",
    dateEstimation: "",
    niveau: "",
    project: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void {
    // mila ovaina aveo
    console.log("called");
    axios.get('http://localhost:8001/task/')
    .then((response) => {
      this.Tasks = response.data;
    })
    .then(() => {
      this.Declare = [...this.Tasks.filter(x=>(x.project == this.idProject && x.niveau === "declare"))];
      this.Encours = [...this.Tasks.filter(x=>(x.project == this.idProject  && x.niveau === "encours"))];
      this.Acheves = [...this.Tasks.filter(x=>(x.project == this.idProject && x.niveau === "acheve"))];
    })
    .then(() => {
      console.log(this.Declare, this.Encours, this.Acheves);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  displayVisibleForm() {
    this.visibleForm = !this.visibleForm;
  }


  displayForm(model: any) {
    switch(model.name){
      case 'titre':
        this.form.titre = model.value;
      break;
      case 'description':
        this.form.description = model.value;
      break;
      case 'dateEstimation':
        this.form.dateEstimation = model.value;
      break;
      case 'niveau':
        this.form.niveau = model.value;
        console.log(model.value);
      break;
      default:
        break;
    }
  }

  handleClick() {
    this.verify();
    this.displayVisibleForm();
  }

  verify() {
    let accepted = true;
    if(this.form.titre == "")
      accepted = false;
    if(this.form.description == "")
      accepted = false;
    if(this.form.dateEstimation == "")
      accepted = false;
    if(this.form.niveau == "")
      accepted = false;
    if(accepted) {
      console.log("accepter");
      this.form.project = this.idProject;
      axios.post("http://localhost:8001/task/create", this.form)
      .then((response) => {
        switch(response.data.niveau) {
          case "declare":
            this.Declare.push(response.data);
          break;
          case "encours":
            this.Encours.push(response.data);
          break;
          case "acheve":
            this.Acheves.push(response.data);
          break;
          default:
            console.log('default ndray le!');
          break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
