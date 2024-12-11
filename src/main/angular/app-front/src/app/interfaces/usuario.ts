import {Coleccion} from "./coleccion";

export interface Usuario {
  id: number;
  email: string;
  nombre: string;
  password: string;
  dtype?: string;
  rol?: string;
  colecciones: Coleccion[];
}
