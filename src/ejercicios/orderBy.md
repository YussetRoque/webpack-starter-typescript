
# select * from usuarios order By nombre asc, salario asc
´´´´
usuariosRef
   .orderBy('nombre' )
   .orderBy('salario' )
   .get().then( retornaDocumentos )´
   
   ´´´´