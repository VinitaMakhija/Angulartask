import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

// import { TaskService } from '../task.service';
// import { Data } from '../data';
import { Observer } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
 export class StatusComponent implements OnInit {

  ondrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer, 'event*********', event);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }
  todo =[];
  doing=[];
  underreview=[];
  done=[];


  constructor(private http:HttpClient) { }
  ngOnInit():void{
    this.http.get<any>( 'http://localhost:3000/todo').subscribe(response =>{
      this.todo=response;
      console.log( 'data1',this.todo )

    })


      this.http.get<any>( 'http://localhost:3000/doing').subscribe(response =>{
      this.doing=response;
      console.log( 'data2',this.doing )

    })

      this.http.get<any>( 'http://localhost:3000/underreview').subscribe(response =>{
      this.underreview=response;
      console.log( 'data3',this.underreview )

    })

      this.http.get<any>( 'http://localhost:3000/done').subscribe(response =>{
      this.done=response;
      console.log( 'data4',this.done )

      
    
  
    })

//   Data = [];

//  ngOnInit(): void {
//    this.ts.getData().subscribe(
//      (response) => {
//        this.Data = response;
//        console.log(Data)
//   }
      
//   )
  }
  }
