import { CanActivateFn, Router } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  return sessionStorage.getItem('role')=='teacher' || sessionStorage.getItem('role')=='admin';
};

