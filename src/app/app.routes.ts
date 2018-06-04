import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReleaseComponent } from './components/release/release.component';
import { ReleaseCreateComponent } from './components/release-create/release-create.component';
import { LoginComponent } from './components/login/login.component';



const appRoutes: Routes = [
    // { path: '', component: LoginComponent},
    { path: '', component: ReleaseComponent},
    { path: 'release/create', component: ReleaseCreateComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
