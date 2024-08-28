import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ServersService } from '../servers.service';
type Server = { id: number; name: string; status: string };
export const serverResolver: ResolveFn<Server> = (route, state) => {
  const serversService = inject(ServersService);
  const id = route.params['id'];
  return serversService.getServer(+id);
};
