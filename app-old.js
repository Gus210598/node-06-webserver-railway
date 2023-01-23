
const http = require('http');

http.createServer( ( req, res ) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    // const persona = {
    //     id: 1,
    //     nombre: 'Jenny'
    // }


    // res.write(' 404 | Page not found ');
    // res.write( JSON.stringify( persona ));

    res.write( 'id; nombre\n');
    res.write( '1;  Jenny\n');
    res.write( '2;  Gus\n');
    res.end();
})

.listen( 4000 );

console.log('Escuchando el puerto 4000');
