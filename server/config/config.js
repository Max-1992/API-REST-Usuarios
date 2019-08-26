//==========
//  Puerto
//==========

process.env.PORT = process.env.PORT || 3000;

//==========
//  Entorno
//==========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==========
//  Mongo DB
//==========

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://max-test:b40EPc1sRtP6kQmk@clustertestone-zix1b.mongodb.net/cafe'
}

process.env.URLDB = urlDB;