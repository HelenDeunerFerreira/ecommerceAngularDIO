import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.componenet.service.';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any
  bookService!: BookService;

  constructor(bookService: BookService) { }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe(data => {
      this.livros = data
      console.log(data)
    })
  }

}
