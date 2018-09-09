import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zipf';
  chart = [];
  countofThe: number = 0;
  smallcase: string;
  countOf: number = 0;
  countAnd: number = 0;
  countA: number = 0;
  countTo: number = 0;


  onSubmit(blankForm: NgForm){
    this.smallcase = blankForm.value.blank.toLowerCase();
    this.countofThe = (this.smallcase.match(/the/g) || this.smallcase.match(/the /g) || []).length;
    this.countA = (this.smallcase.match(/a /g) || this.smallcase.match(/ a /g) || []).length;
    this.countAnd = (this.smallcase.match(/and/g) || this.smallcase.match(/and /g) || []).length;
    this.countOf = (this.smallcase.match(/of /g) || this.smallcase.match(/of/g) || []).length;
    this.countTo = (this.smallcase.match(/to /g) || this.smallcase.match(/to /g) || []).length;
    
   
    let words = ['the', 'a', 'and', 'of', 'to']

    this.chart = new Chart('canvas',{
      type: 'line',
      data:{
        labels:words,
        datasets: [
          {
            data: [this.countofThe,this.countA,this.countAnd,this.countOf,this.countTo],
            borderColor: ['rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'],
            fill: false
          }
        ]
      },
      options:{
        maintainAspectRatio: false,
        legend:{
          display: false
        },
        scales:{
          xAxes:[{
            display: true
          }],
          yAxes:[{
            display: true
          }]
        }
      }
    })
  }
}
