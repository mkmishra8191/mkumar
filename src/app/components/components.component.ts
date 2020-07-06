import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  
  tasks: any[]

  constructor(){
  
    this.tasks=['task 1', 'task 2', 'task 3']
  }
   
  addTask(task: any){
  
          this.tasks.push(task);
  }
  
  deleteTask(i: number){
  
    this.tasks.splice(i, 1);
  }
  

  ngOnInit(): void {
  }

}
