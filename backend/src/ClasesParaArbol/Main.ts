
import {Node} from '../Abstract/Node';
import {Type,types } from '../ClasesParaArbol/Tipo';
import { Traduccion } from '../ManejoErrores/Traduccion';

export class Main extends Node {
 
    Nombre: String;
    Contenido :Array<Node>
    Public : String;
    cadena:string;
constructor ( linea:Number,columna:Number ,  Nombre:string,Contenido:Array<Node>){
super(linea,columna);
this.Nombre=Nombre;

this.Contenido=Contenido;

}




execute(){

    var T =""
    T+="main()"+"{"+" \n";
       
    for(let i = 0 ; i < this.Contenido.length ; i++){
        T += this.Contenido[i].execute();
    }
    T+="}"
    Traduccion.add(T);
    return T;   
}


}

