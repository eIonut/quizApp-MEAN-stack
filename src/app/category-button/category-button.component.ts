import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent implements OnInit {

  @Input() backgroundColor = '';
  @Input() category = '';

  constructor() { }

  ngOnInit(): void {

  }

}
