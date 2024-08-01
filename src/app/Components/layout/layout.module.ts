import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { ModalUsuarioComponent } from './Modales/modal-usuario/modal-usuario.component';
import { SharedModule } from '../../Reutilizable/shared/shared.module';
import { ModalProductoComponent } from './Modales/modal-producto/modal-producto.component';
import { ModalDetalleVentaComponent } from './Modales/modal-detalle-venta/modal-detalle-venta.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioComponent,
    ProductoComponent,
    VentaComponent,
    HistorialVentaComponent,
    ReporteComponent,
    ModalUsuarioComponent,
    ModalProductoComponent,
    ModalDetalleVentaComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
