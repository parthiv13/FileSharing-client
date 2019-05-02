import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ImageResolve implents Resolve<Image> {
  constructor(private service: ImageService) {}
  
  resolve(route: ActivateRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id] ? route.params['id'] : null;
    if(id) {
      reutrn this.service.find(id).pipe(map( (image: HttpResponse<Image>) => {
        image.body
      } ));
    }
    return of(new Image());
  }
}

export const imageRoutes: Routes = [
  {
    path: 'images/:id/view',
    component: ImageView,
    resolve: {
      image: ImageResolve
    }
  }
]
