import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  { path: 'rooms/add', component: RoomsAddComponent},
  { path: 'rooms/:id', component: RoomBookingComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
