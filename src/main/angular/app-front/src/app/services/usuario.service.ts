import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/enviroment";
import {Usuario} from "../interfaces/usuario";
import {isPlatformBrowser} from "@angular/common";
import {Coleccion} from "../interfaces/coleccion";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/usuarios';



  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  login(usuario: Usuario): Observable<Usuario> {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Ensure we're sending JSON
      'Accept': 'application/json',         // Ensure we expect JSON back
    });
    // @ts-ignore
    return this.http.post<Usuario>(this.apiUrl + '/login', usuario, { headers });
    //return this.http.post(this.apiUrl + "/login", usuario);
  }



  signin(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this.http.post<Usuario>(this.apiUrl + "/signin", usuario, { headers });
  }


  storeUserData(usuario: Usuario){

    const key = 'userData';
    const value = JSON.stringify({ nombre: usuario.nombre, password: usuario.password, email: usuario.email });
    localStorage.setItem(key, value);

  }

  getUserData():any {
    //necesario para paginas renderizadas en navegador
    if (typeof window !== 'undefined' && window.localStorage){
      const user= localStorage.getItem('userData');
      return user ? JSON.parse(user) : null;

    } else{
      return null;
    }

  }

  getNameFromLocalStorage():string|void{
    const storedValue = this.getUserData();

    if (storedValue) {
      const user = JSON.stringify(storedValue); // Parse the stringified object
      const name = storedValue.nombre; // Access the 'name' property
      console.log('User Name:', name);
      return(name);
    } else {
      console.log('No data found in localStorage for key:', 'userData');
    }
  }

  getPasswordFromLocalStorage():string|void{
    const storedValue = this.getUserData();

    if (storedValue) {
      const user = JSON.stringify(storedValue); // Parse the stringified object
      const pass = storedValue.password;
      console.log('User pass:', pass);
      return (pass);
    } else {
      console.log('No data found in localStorage for key:', 'userData');
    }
  }


  getEmailFromLocalStorage():string|void{
    const storedValue = this.getUserData();

    if (storedValue) {
      const user = JSON.stringify(storedValue); // Parse the stringified object
      const email = storedValue.email;
      console.log('User email:', email);
      return (email);
    } else {
      console.log('No data found in localStorage for key:', 'userData');
    }
  }


  logout() {
    localStorage.clear();

    return this.http.post('/logout', {});
  }



  // isBrowser(): boolean {
  //   return isPlatformBrowser(this.platformId);
  // }
  //
  // isServer(): boolean {
  //   return !isPlatformBrowser(this.platformId);
  // }
}
