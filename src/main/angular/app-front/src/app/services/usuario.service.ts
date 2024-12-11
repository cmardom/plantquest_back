import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";
import {Usuario} from "../interfaces/usuario";
import {Router} from "@angular/router";
import {SignInDataType} from "../signin/signin.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {isPlatformBrowser} from "@angular/common";
import {Coleccion} from "../interfaces/coleccion";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private baseUrl: string = environment.apiUrl;
  private apiUrl: string =  this.baseUrl + '/usuarios';
  private localStorageKey: string = 'userData';

  public usuario: Usuario | undefined = undefined;
  public usuarios: Usuario[] | undefined = undefined;


  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router : Router,
    private modalService: NgbModal,
  ) {
  }

  public setUser(usuario: Usuario){
    if(isPlatformBrowser(this.platformId)){
      this.usuario = usuario;
      document.defaultView?.localStorage.setItem(this.localStorageKey, JSON.stringify(usuario));
      }
  }

  setUserFromLocalStorage(){
    if(isPlatformBrowser(this.platformId)){
      const user = localStorage.getItem(this.localStorageKey);
      if(user){
        this.usuario = JSON.parse(user);
      }
    }
  }

  login(loginData: { email: string, password: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post<Usuario>(this.apiUrl + '/login', loginData, { headers });
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrl).subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  get(key?: keyof Usuario) {
    if (key) {
      return this.usuario?.[key];
    }
    return this.usuario;
  }

  async signin(signinData: SignInDataType){
    // @ts-ignore
    return this.http.post<Usuario>(this.apiUrl + "/signin", signinData);
  }

  async logout() {
    localStorage.clear();
    this.usuario = undefined;
    const result = this.http.post('/logout', {});
    await this.router.navigate(['/home']);
    return result;
  }

  isAdmin() {
    return this.usuario?.rol === "ROL_ADMIN";
  }

  getUsuarioById(id: number) {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        console.log('Fetched user:', usuario);
      },
      error: (error) => {
        console.error('Error fetching user by ID:', error);
      },
    });
  }

  deleteUsuario(id: number | string | Coleccion[] | Usuario): Observable<void> {
    const headers = new HttpHeaders({
      'Accept': 'application/json', // Expect JSON response
    });

    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers })
      .pipe(
        catchError((error) => {
          let errorMessage = 'An error occurred while deleting the usuario.';
          // if (error.error && error.error.message) {
          //   errorMessage = error.error.message;
          // }
          return throwError(() => new Error(errorMessage));
        })
      );
  }



}
