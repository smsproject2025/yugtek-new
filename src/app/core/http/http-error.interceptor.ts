import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    catchError((error: unknown) => {
      const normalizedError = error instanceof HttpErrorResponse
        ? error
        : new Error('Unexpected application error');

      return throwError(() => normalizedError);
    })
  );
};
