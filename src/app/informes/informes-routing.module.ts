import { FomularioLineaProductoComponent } from './page/fomulario-linea-producto/fomulario-linea-producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { InformeContableComponent } from './page/informe-contable/informe-contable.component';
import { InformeFacturacionPosComponent } from './page/informe-facturacion-pos/informe-facturacion-pos.component';
import { InformeClienteComponent } from './page/informe-cliente/informe-cliente.component';
import { InformeProveedoresComponent } from './page/informe-proveedor/informe-proveedores.component';
import { FormularioRentabilidadComponent } from './page/formulario-rentabilidad/formulario-rentabilidad.component';
import { FormularioKardexComponent } from './page/formulario-kardex/formulario-kardex.component';
import { FormularioSalidaInventarioComponent } from './page/formulario-salida-inventario/formulario-salida-inventario.component';
import { FormularioEntradaInventarioComponent } from './page/formulario-entrada-inventario/formulario-entrada-inventario.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path: 'formulario-kardex', component:FormularioKardexComponent},
      {path: 'formulario-salida-inventario', component:FormularioSalidaInventarioComponent},
      {path: 'formulario-entrada-inventario', component:FormularioEntradaInventarioComponent},
      {path: 'formulario-rentabilidad', component:FormularioRentabilidadComponent},
      {path: 'formulario-linea-producto', component:FomularioLineaProductoComponent},
      {path: 'informe-contable', component:InformeContableComponent},
      {path: 'informe-facturacion-pos', component:InformeFacturacionPosComponent},
      {path: 'informe-cliente', component:InformeClienteComponent},
      {path: 'informe-proveedor', component:InformeProveedoresComponent},
      {path: '**', redirectTo:'informe-contable'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
