import { Component, OnInit } from '@angular/core';
import { Developer } from './developer';
import { DEVS } from './about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  Devs!: Developer[];
  constructor() { }

  ngOnInit(): void {
    this.Devs = DEVS;
  }

}
