import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})

export class ProductItemsComponent implements OnInit {

  @Input()
  livros!: Book

  constructor() { }

  ngOnInit(): void {

  }

}
