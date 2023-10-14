import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformesRoutingModule } from './informes-routing.module';
import { InformeContableComponent } from './page/informe-contable/informe-contable.component';
import { InformeFacturacionPosComponent } from './page/informe-facturacion-pos/informe-facturacion-pos.component';
import { InformeClienteComponent } from './page/informe-cliente/informe-cliente.component';
import { InformeProveedoresComponent } from './page/informe-proveedor/informe-proveedores.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FomularioLineaProductoComponent } from './page/fomulario-linea-producto/fomulario-linea-producto.component';
import { FormularioRentabilidadComponent } from './page/formulario-rentabilidad/formulario-rentabilidad.component';
import { FormularioKardexComponent } from './page/formulario-kardex/formulario-kardex.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormularioEntradaInventarioComponent } from './page/formulario-entrada-inventario/formulario-entrada-inventario.component';
import { FormularioSalidaInventarioComponent } from './page/formulario-salida-inventario/formulario-salida-inventario.component';

@NgModule({
  declarations: [
    InformeContableComponent,
    InformeFacturacionPosComponent,
    InformeClienteComponent,
    LayoutPageComponent,
    InformeProveedoresComponent,
    FomularioLineaProductoComponent,
    FormularioRentabilidadComponent,
    FormularioKardexComponent,
    DatepickerComponent,
    FormularioEntradaInventarioComponent,
    FormularioSalidaInventarioComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports:[
    DatepickerComponent
  ]
})
export class InformesModule { }
