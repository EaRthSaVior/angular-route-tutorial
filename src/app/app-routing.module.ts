import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { canActivateChild } from './auth-guard.service';
import { canDeactivate } from './servers/edit-server/can-deactivate-guard.service';

const routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
  ,
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [canActivateChild],
    children: [
      { path: ':id', component: ServerComponent },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [canDeactivate],
      },
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not found' },
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
