


import db from './firebase/config';

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
usuariosRef
    .doc('sr1CiE5JqB55dPCYVcPY')
    .delete()
    .then( resp => console.log(resp) )
    .catch( e => console.log('error', e ));