import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("in interceptor");
  
  const token = sessionStorage.getItem('userToken');
console.log(token);

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedRequest);
    }

    return next(req); 
};
