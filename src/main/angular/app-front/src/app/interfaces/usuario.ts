import {Coleccion} from "./coleccion";

export interface Usuario {
  dtype: string | undefined;
  id: number;
  email: string;
  nombre: string;
  password: string;
  rol: string | undefined;
  colecciones: Coleccion[ ]; // Array of Coleccion objects
}
