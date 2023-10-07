import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { InformeInventarioComponent } from './page/informe-inventario/informe-inventario.component';
import { InformeContableComponent } from './page/informe-contable/informe-contable.component';
import { InformeFacturacionPosComponent } from './page/informe-facturacion-pos/informe-facturacion-pos.component';
import { InformeClienteComponent } from './page/informe-cliente/informe-cliente.component';
import { InformeProveedoresComponent } from './page/informe-proveedor/informe-proveedores.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path: 'informe-inventario', component:InformeInventarioComponent},
      {path: 'informe-contable', component:InformeContableComponent},
      {path: 'informe-facturacion-pos', component:InformeFacturacionPosComponent},
      {path: 'informe-cliente', component:InformeClienteComponent},
      {path: 'informe-proveedor', component:InformeProveedoresComponent},
      {path: '**', redirectTo:'inventario'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
