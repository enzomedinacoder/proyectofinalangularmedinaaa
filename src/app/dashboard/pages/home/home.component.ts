import { Component, OnDestroy } from '@angular/core';
import { User } from '../users/models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  loading=false;
  clockSubscription:Subscription


  constructor(){
  this.getUsers();

  this.clockSubscription=this.getClock().subscribe({
    next:(v)=>{
      console.log(v)
    },
    error:(err)=>{
      alert('ocurrio un error')
    },
    complete:()=>{
      console.log('finalizo el contador')
    },
  });

    
  }


  ngOnDestroy(): void {
    console.log('se destruyo el home')

    this.clockSubscription.unsubscribe()
  }


  getClock():Observable<number>{

    return new Observable((suscriber)=>{

      let counter=0
      setInterval(()=>{
        counter ++,
        suscriber.next(counter)

        if(counter===10){
          suscriber.complete();

        }        // suscriber.error('error al mostrar la fecha')
      },3000)
    })

  }


  async getUsers():Promise<void>{

    this.loading=true;

    const getUsersPromise= new Promise((resolve,reject)=>{

      const users:User[]=[

        {
          id:1,
          name:'Gisele',
          email:'giselemedina@',
          lastName:'Medina',
        },
      ];

      setInterval(()=>{
        resolve(users);
      },4000);
    });

    

    await getUsersPromise
    .then((result)=>console.log(result))
    .catch((err)=>{
      alert('Ocurrio un error inesperado'),console.log(err);
    })
    .finally(()=>{
      this.loading=false;
    });

  }
}
