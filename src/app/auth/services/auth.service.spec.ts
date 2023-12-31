import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AuthService } from "./auth.service";
import { User } from "src/app/dashboard/pages/users/models";
import { environment } from "src/environments/environment.local";
import{MockProvider} from "ng-mocks";
import { Router } from "@angular/router";
import { provideMockStore } from "@ngrx/store/testing";
import { State } from "src/app/store/auth/auth.reducer";
import { selectAuthUser } from "src/app/store/auth/auth.selectors";




describe('AuthService', ()=>{

    let authService:AuthService;
    let httpController:HttpTestingController;
    beforeEach (()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule ,
                RouterTestingModule
            ],
            providers:[
                MockProvider(Router),
                provideMockStore<State>({
                initialState:{  
                    authUser:null,
                },
                selectors:[
                    {
                        selector:selectAuthUser,value:null
                    }
                ]

                })
            ]
        });
        authService=TestBed.inject(AuthService)
        httpController=TestBed.inject(HttpTestingController)


    });
    it(' should be defined ',()=>{
        expect (authService).toBeTruthy();

    })

    it('Login user should be authenticated with method login()',()=>{
        const USER_MOCK:User={
            id:1,
            email:'enzo7322@gmail.com',
            lastName:'Medina',
            name:'Enzo',
            role:'ADMIN',
            token:'ajhdfgakjhg',
            password:'123456'

        };


        authService.login({
            email:USER_MOCK.email,
            password:USER_MOCK.password
        })

        httpController.expectOne({
            method:'GET',
            url:`${environment.baseUrl}/users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`
        }).flush([
            USER_MOCK
        ])


        authService.authUser$.subscribe({
            next:(authUser)=>{
                console.log(authUser)
                expect(authUser).toBeTruthy()
                expect(authUser).toEqual(USER_MOCK)
            },
        });
        
    })
});