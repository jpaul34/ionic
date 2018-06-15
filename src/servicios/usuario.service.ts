import {Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {
  mombreUsuario =  'Jonathan';

  // static sumarDosNumeros(numeroUno: number, numeroDos: number) {
  //   return numeroUno + numeroDos;
  // }
  sumarDosNumeros(numeroUno: number, numeroDos: number) {
    return numeroUno + numeroDos;
  }
}

// UsuarioService.sumarDosNumeros()
