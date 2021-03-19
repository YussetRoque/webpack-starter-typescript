


import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuariosRef = db.collection('usuarios');

// select * from usuarios order By nombre asc, salario asc
usuariosRef
   .orderBy('nombre' )
   .orderBy('salario' )
   .get().then( retornaDocumentos )
