import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { SharedModule } from "src/app/shared/shared.module"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { AuthService } from "../../services/auth.service"

describe('LoginComponent',()=>{

    let loginComponent:LoginComponent;



    beforeEach(()=>{

        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            imports:[HttpClientTestingModule,SharedModule]

        })
        loginComponent=TestBed.createComponent(LoginComponent).componentInstance
    })

    it('Should create login component',()=>{
        expect(loginComponent).toBeTruthy();


    });

    it('should mark all inputs as touched if the are invalid',()=>{
        loginComponent.loginForm.patchValue({
            email:'asdkajshgdjhasgd',
            password:''
        })
        loginComponent.login()
        expect(loginComponent.emailControl.touched).toBeTrue()
        expect(loginComponent.passwordControl.touched).toBeTrue()

    })

    it('Should call method login in the imputs are valid',()=>{
        loginComponent.loginForm.patchValue({
            email:'enzo7322@gmail.com',
            password:'123456'
        })
        const spyOnAuthServiceLogin =spyOn((loginComponent as any).authService,'login')
        loginComponent.login()
        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    })



})