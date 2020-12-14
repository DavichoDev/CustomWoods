import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  cargando: boolean = true;
  productosActive = []; // Productos del API
  productos = []; // Productos del API

  constructor( private productosService: ProductosService ) { }

  ngOnInit(): void {

    this.getProductos();

  }

  async getProductos() {

    await this.productosService.getProductos()
    .subscribe( (response: any) => {
      
      this.productos = response.productos;
      
      for (let index = 0; index < this.productos.length; index++) {
        
        
        if (index<=3) {
          this.productosActive.push(this.productos[index]);
          this.productos.splice(index, 1);
        }
      }

      console.log(this.productosActive);
      console.log(this.productos);
      

    });  
    
  }

}
