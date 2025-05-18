import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [
    NgFor,
    MatIconModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  skillSet: any[] = [
    { name: 'Html', img: 'html' },
    { name: 'Css', img: 'css-3' },
    { name: 'Javascript', img: 'java-script-logo' },
    { name: 'TypeScript', img: 'html' },
    { name: 'Angular', img: 'angularjs' },
    { name: 'React', img: 'atom' },
    { name: 'Bootstrap CSS', img: 'bootstrap' },
    { name: 'Tailwind CSS', img: 'icons8-tailwind-css-50' },
    { name: 'Node Js', img: 'developer' },
    { name: 'Angular Material', img: 'icons8-angularjs-50' },
    { name: 'Express Js', img: 'icons8-express-js-48' },
    { name: 'Mysql', img: 'mysql' },
    { name: 'Squelize' },
    { name: 'Terraform', img: 'terraform' },
    { name: 'AWS', img: 'file' },
    { name: 'Apache Tomcat', img: 'icons8-apache-24' },
    { name: 'Jenkins' }
  ]

  constructor() { }

  ngOnInit(): void {

  }



}
