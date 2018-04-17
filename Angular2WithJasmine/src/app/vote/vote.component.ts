import { Component, OnInit } from '@angular/core';


export class VoteComponent implements OnInit {

    totalVotes = 0;
    upVote(){
        this.totalVotes++;
    }
    downVote(){
        this.totalVotes--;
    }
  constructor() { }

  ngOnInit() {
  }
 
}
