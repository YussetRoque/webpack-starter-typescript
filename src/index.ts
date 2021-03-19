


import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuario = {
    nombre: 'Juana',
    activo: true,
    FechaNaci: 0

}

const usuariosRef = db.collection('usuarios');

// insert into usuarios ......

// db.collection('usuarios')
//    .add( usuario )
//    .then( docRef => {
//        console.log( docRef.delete() )

 //   })
 //   .catch( e => console.log ('error', e ))

 // update usuarios set activo = false where...
 // usuariosRef
 // .doc('sr1CiE5JqB55dPCYVcPY')
// .update({
 //   activo: true
// });

// Destructivo 
// usuariosRef
 // .doc('sr1CiE5JqB55dPCYVcPY')
// . set({
// activo: true,
//   edad: 44,   
// });  

// delete from usuarios where id = 'xx'
// usuariosRef
//    .doc('sr1CiE5JqB55dPCYVcPY')
 //   .delete()
 //   .then( resp => console.log(resp) )
//    .catch( e => console.log('error', e ));

// select * from usuarios; 
//  usuariosRef
//  usuariosRef.get().then( retornaDocumentos );

/* 
select * from usuarios
      where activo = true

*/   

// usuariosRef.where('activo', '==', true).get().then( retornaDocumentos );


/* 
select * from usuarios
      where activo = true

*/   

// usuariosRef.where('salario', '>', 1800)
 //  .get().then( retornaDocumentos );
   
  /* 
select * from usuarios
      where salario > 1800 and salario < 2300
       where salario  between 1800 and 2300

*/   

// usuariosRef.where('salario', '>=', 1800 )
  //      .where('salario', '<=', 2300 )
// .get().then( retornaDocumentos );

/* 
select * from usuarios
      where salario > 1800 
       And activo == true 

*/   

usuariosRef.where('salario', '>=', 1800 )
        .where('activo', '==', true )
    .get().then( retornaDocumentos );