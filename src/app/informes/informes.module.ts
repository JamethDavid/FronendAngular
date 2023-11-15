import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformesRoutingModule } from './informes-routing.module';
import { InformeContableComponent } from './page/informe-contable/informe-contable.component';
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
import { TableKardexComponent } from './components/table/table-kardex.component';
import { ReporteVentaLineaProductoFechaComponent } from './page/reporte-venta-linea-producto-fecha/reporte-venta-linea-producto-fecha.component';
import { ReporteFacturaClienteComponent } from './page/reporte-factura-cliente/reporte-factura-cliente.component';
import { TablaReporteFacturaClienteComponent } from './components/table/tabla-reporte-factura-cliente.component';
import { ReporteVentaZonaSoloComponent } from './page/reporte-venta-zona-solo/reporte-venta-zona-solo.component';
import { TablaReporteAcomuladoVentaProductoComponent } from './components/table/tabla-reporte-acomulado-venta-producto.component';
import { FormularioAcomuladoVentaProductoComponent } from './page/formulario-acomulado-venta-producto/formulario-acomulado-venta-producto.component';
import { LoginService } from '../auth/pages/services/login.service';

@NgModule({
  providers: [LoginService],
  declarations: [
    InformeContableComponent,
    InformeClienteComponent,
    LayoutPageComponent,
    InformeProveedoresComponent,
    FomularioLineaProductoComponent,
    FormularioRentabilidadComponent,
    FormularioKardexComponent,
    DatepickerComponent,
    FormularioEntradaInventarioComponent,
    FormularioSalidaInventarioComponent,
    TableKardexComponent,
    ReporteVentaLineaProductoFechaComponent,
    ReporteFacturaClienteComponent,
    TablaReporteFacturaClienteComponent,
    ReporteVentaZonaSoloComponent,
    TablaReporteAcomuladoVentaProductoComponent,
    FormularioAcomuladoVentaProductoComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports:[
    DatepickerComponent,
  ]
})
export class InformesModule { }
