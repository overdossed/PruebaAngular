
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
