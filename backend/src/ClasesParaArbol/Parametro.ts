
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Parametro extends Node {
  
    EXP1: Node;
    Tipo :String;
   ID:String;
   valor:Node;
    Simbolo : String;
    void :String;
    cadena:string;
constructor ( linea:Number,columna:Number ,ID:String,valor:Node ){
super(linea,columna);
this.valor=valor;
this.ID=ID;

}


execute(){

    var cadenaT="";
    cadenaT+= this.ID;
    if( this.valor!=null){

    cadenaT+=this.valor.execute()
    }
    Traduccion.add(cadenaT)

    return cadenaT;
}


}

