import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductX } from '../model/productX';
import { ProductXService } from '../service/productX.service';

@Component({
  selector: 'app-new-product-x',
  templateUrl: './new-product-x.component.html',
  styleUrls: ['./new-product-x.component.css']
})
export class NewProductXComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    count: ['', [Validators.required]],
    discountCode: ['']
  });
  emailFormControl = new FormControl('', [Validators.required, Validators.email])
  constructor(
    private fb: FormBuilder,
    private productXService: ProductXService,
    private _snackBar: MatSnackBar
    ) {
  }

  ngOnInit(): void {
  }

  save() {
    let product: ProductX = new ProductX();
    product.email = this.form.controls.email.value
    product.count = this.form.controls.count.value
    product.discountCode = this.form.controls.discountCode.value

    this.productXService.save(product).subscribe(data => {
      this._snackBar.open(data.message, "X")
      console.log("response", data)
    }, error => {
      this._snackBar.open(error.error.message, "X")
    })
    console.log("saving")
  }

  getDiscount() {
    if (!this.form.controls.discountCode.value || this.getDiscountError()) {
      return "0 %"
    } else {
      return this.form.controls.discountCode.value.toString().length + " %"
    }
  }

  getDiscountError() {
    if (this.form.controls.discountCode.errors?.minlength) {
      return "Minimun length: 2"
    }
    if (this.form.controls.discountCode.errors?.maxlength) {
      return "Max length: 8"
    }
    return '';
  }
}