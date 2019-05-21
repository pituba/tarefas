import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastoComponent } from './cadasto/cadasto.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
    {path: "cadastro", component: CadastoComponent },
    {path: "", component: ListarComponent },
    {path: "listar", component: ListarComponent },
    {path: "editar/:id", component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
