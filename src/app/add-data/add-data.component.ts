import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { Chart } from '../service/chart.interface';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
  providers: [MasterService]
})
export class AddDataComponent implements OnInit {

  chart = new Array<Chart>();

  constructor(public masterservice: MasterService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshChartList()
  }

  resetForm(form? : NgForm){
    if (form)
    form.reset();
    this.masterservice.selectedChart = {
     _id: "",
     year: 0,
     amount: 0,
     colorcode: "",
     }
 }

  onSubmit(form: NgForm) {
    console.log(form.value);

    if (form.value._id == " ") {
      // post data
      this.masterservice.postChart(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshChartList();
        console.log("saved Successfully")
      });
    }
    else {
      this.masterservice.postChart(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshChartList();
        console.log('Update Successfully')
      });
    }
  }

  //Reset data and refresh page 
  refreshChartList(){
    this.masterservice.Getchartinfo().subscribe((res)=> {
      this.masterservice.chart = res as Chart[];
    });
  }

}

