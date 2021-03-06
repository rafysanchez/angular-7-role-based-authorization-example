﻿import { PersonService } from '@/_services';
import { MoradorComponent } from './Moradores/morador.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { VeiculoComponent } from './Veiculos/veiculo.component';

import { VeiculosComponent } from './veiculos/veiculos.component';
import { RecadosComponent } from './recados/recados.component';
import { EventosComponent } from './eventos/eventos.component';
import { MoradoresVisitantesComponent } from './moradores-visitantes/moradores-visitantes.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        AppMaterialModule
        DataTablesModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        VeiculosComponent,
        RecadosComponent,
        EventosComponent,
        MoradoresVisitantesComponent,
        OcorrenciasComponent,
        RelatoriosComponent,
        SobreComponent,
        AjudaComponent,
        UsuariosComponent

        AjudaComponent,
        MoradorComponent,
        VeiculoComponent
       
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend - comentqar abaixo para usar o backend real
        PersonService,
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }