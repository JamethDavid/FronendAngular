import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { InformeInventarioComponent } from './page/informe-inventario/informe-inventario.component';
import { InformeContableComponent } from './page/informe-contable/informe-contable.component';
import { InformeFacturacionPosComponent } from './page/informe-facturacion-pos/informe-facturacion-pos.component';
import { InformeClienteComponent } from './page/informe-cliente/informe-cliente.component';
import { InformeProveedoresComponent } from './page/informe-proveedor/informe-proveedores.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InformeInventarioComponent,
    InformeContableComponent,
    InformeFacturacionPosComponent,
    InformeClienteComponent,
    LayoutPageComponent,
    InformeProveedoresComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    MaterialModule
  ]
})
export class InformesModule { }
