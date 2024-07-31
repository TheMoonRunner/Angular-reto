import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list-posts/list-posts.component'),
  },

];
export default routes;
