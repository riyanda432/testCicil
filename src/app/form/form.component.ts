import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DataglobalService} from '../dataglobal.service'
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  dateForm: FormGroup;
  dateBeforeConvert: string;
  monthSplit:any;
  commaSplit:any;
  dateAfterConvert:string;
  dateValue: string = "Hola Mundo!"
  pesanError:string

  @Output() messageEvent = new EventEmitter<string>();

  constructor(public formBuilder: FormBuilder ,private router: Router, private route: ActivatedRoute,private dataGlobal: DataglobalService,
    ) { 

    this.dateForm = this.formBuilder.group({
      date: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ])
      )
    });
  }

  error_messages = {

    uspass: [
      {}
    ],
    date: [
      { type: "required", message: "Username is Required CUYYY" },
      {
        type: "minlength",
        message: "Date Length must be longer or equal than 6 character"
      },
      {
        type: "maxlength",
        message: "Username Length must be lower to 100 character"
      }
    ],
    
  };

  convertDate() {

    let day = moment(this.dateBeforeConvert).format('dddd')
    let month =  moment(this.dateBeforeConvert).format('LL');
    this.monthSplit = month.split(" ")
    this.commaSplit = this.monthSplit[1].split(",")
    this.dateAfterConvert = day + ", " + this.commaSplit[0] + " " + this.monthSplit[0] + " " + this.monthSplit[2]
    console.log(this.dateAfterConvert)

    if(this.dateBeforeConvert==null){
      console.log("KOSONG")
      this.pesanError ="field must be filled"
    }else {
      this.dataGlobal.saveDataLogin(this.dateAfterConvert)
      this.router.navigate(["/result"]);
    }

  }
  ngOnInit() {

   

  }

}
