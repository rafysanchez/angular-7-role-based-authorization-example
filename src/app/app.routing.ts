import { MoradorComponent } from './Moradores/morador.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { Role } from './_models';
import { VeiculoComponent } from './Veiculos';
import { RecadosComponent } from './Recados';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'ajuda',
        component: AjudaComponent 
    },
    {
        path: 'morador',
        component: MoradorComponent 
    },
    {
        path: 'recados',
        component: RecadosComponent 
    },
    {
        path: 'veiculo',
        component: VeiculoComponent 
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);