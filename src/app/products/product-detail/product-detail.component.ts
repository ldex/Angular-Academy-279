import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //@Input() product: Product;
  product$: Observable<Product>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];

    this.product$ =  this
                      .productService
                      .getProductById(id);

    // product$.subscribe(
    //   data => this.product = data
    // )
  }

}
