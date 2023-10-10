import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformesRoutingModule } from './informes-routing.module';
import { InformeContableComponent } from './page/informe-contable/informe-contable.component';
import { InformeFacturacionPosComponent } from './page/informe-facturacion-pos/informe-facturacion-pos.component';
import { InformeClienteComponent } from './page/informe-cliente/informe-cliente.component';
import { InformeProveedoresComponent } from './page/informe-proveedor/informe-proveedores.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { FomularioLineaProductoComponent } from './page/fomulario-linea-producto/fomulario-linea-producto.component';


@NgModule({
  declarations: [
    InformeContableComponent,
    InformeFacturacionPosComponent,
    InformeClienteComponent,
    LayoutPageComponent,
    InformeProveedoresComponent,
    FomularioLineaProductoComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    MaterialModule
  ]
})
export class InformesModule { }
