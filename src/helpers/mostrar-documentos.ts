


import firebase from 'firebase';


export const retornaDocumentos = ( snapshot: firebase.firestore.QuerySnapshot) => {
  
    const documentos : any[] = [];

    snapshot.forEach( snaphijo => {
        documentos.push({ 
          id: snaphijo.id,
          ...snaphijo.data()
       }) 
      
    });

    console.log(documentos)
    return documentos;
}