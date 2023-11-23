import { Inject,Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl, ApiUrlConfig } from 'src/app/config/url.token';

@Injectable({
  providedIn:'root'
})
export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url:ApiUrlConfig
  ) {
    console.log('La url inyectada es : ',url)
  }

  
  getUsers():User[]{
    return[
    ]
    
  }
}
