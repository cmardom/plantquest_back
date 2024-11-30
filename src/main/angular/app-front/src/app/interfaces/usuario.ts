import {Coleccion} from "./coleccion";

export interface Usuario {
  dtype: string | undefined;
  id: number | undefined;
  email: string;
  nombre: string;
  password: string;
  rol: string | undefined;
  colecciones: Coleccion[] | undefined // Array of Coleccion objects
}
