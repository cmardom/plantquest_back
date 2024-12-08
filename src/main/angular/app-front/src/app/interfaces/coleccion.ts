import {Planta} from "./planta-interface";

export interface Coleccion{
  id?: number;
  nombre: string;
  usuario_id : number;
  plantas: Planta[]
}
