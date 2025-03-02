import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";


export const AsideGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isAuthenticated = Math.random() > 0.5;

  if (isAuthenticated) {
    return true
  } else {
    router.navigate(['']);
    console.log(isAuthenticated);
    return false
  }
}
