import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Productos } from 'src/app/models/productos.models';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService]

})
export class ProductosComponent implements OnInit {

  public productoModelGet: Productos;
  public productoModelPost: Productos;
  public productoModelGetId: Productos;
  public token;

  constructor(private _productosService: ProductosService) { 
    this.productoModelPost = new Productos('','','',0,'');
    this.productoModelGetId = new Productos('','','',0,'');
    

    this.token = this._productosService.obtenerToken();

  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    
    this._productosService.obtenerProductos(this.token).subscribe(
      (response)=>{
        this.productoModelGet = response.productos;
        console.log(this.productoModelGet);

      },
      (error)=>{
        console.log(<any>error)
      }
    )

  }

  postProductos(){
    this._productosService.agregarProductos(this.productoModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getProductosId(idProducto){
    this._productosService.obtenerProductosId(idProducto).subscribe(
      (response) => {
        console.log(response);
        this.productoModelGetId = response.producto;

      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }
  

  putProductos(){
    this._productosService.editarProductos(this.productoModelGetId).subscribe(
      (response)=>{
        
        console.log(response);
        this.getProductos()
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  deleteProductos(idProducto) {
    this._productosService.eliminarProductos(idProducto).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
