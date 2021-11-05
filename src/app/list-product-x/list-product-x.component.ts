import { Component, OnInit } from '@angular/core';
import { ProductXService } from '../service/productX.service';

@Component({
  selector: 'app-list-product-x',
  templateUrl: './list-product-x.component.html',
  styleUrls: ['./list-product-x.component.css']
})
export class ListProductXComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'count', 'discountCode'];
  dataSource:any = [];

  constructor(
    private productXService: ProductXService
  ) { }

  ngOnInit(): void {
    this.productXService.list().subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.log("error getting products list")
    })
  }

}
