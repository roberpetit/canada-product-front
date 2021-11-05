import { Component, OnInit } from '@angular/core';
import { ProductXService } from '../service/productX.service';

@Component({
  selector: 'app-list-product-x',
  templateUrl: './list-product-x.component.html',
  styleUrls: ['./list-product-x.component.css']
})
export class ListProductXComponent implements OnInit {

  constructor(
    private productXService: ProductXService
  ) { }

  ngOnInit(): void {
  }

}
