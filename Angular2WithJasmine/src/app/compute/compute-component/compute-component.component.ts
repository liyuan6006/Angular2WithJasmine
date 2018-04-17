import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compute-component',
  templateUrl: './compute-component.component.html',
  styleUrls: ['./compute-component.component.css']
})
export class ComputeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //for test
  compute(number){
    if(number<0)
      return 0;
    return number + 1;
  }
}
