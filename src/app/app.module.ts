import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule, 
  MatMenuModule, 
  MatSidenavModule, 
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatDividerModule, 
  MatListModule, 
  MatTableModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastoComponent } from './cadasto/cadasto.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastoComponent,
    ListarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDividerModule, 
    MatListModule,
    MatTableModule, 
    MatSnackBarModule,
    MatTooltipModule
  ],
  exports:[
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
