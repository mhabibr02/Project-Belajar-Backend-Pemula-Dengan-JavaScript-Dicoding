const http = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});

/*********************************************************************************************************************/

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);

/*********************************************************************************************************************/

const initialMemoryUsage = // TODO 1
const yourName = // TODO 2
const environment = // TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = // TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

/*********************************************************************************************************************/

const coffee = {
    name: 'Tubruk',
    price: 15000,
}
 
module.exports = coffee;

/*********************************************************************************************************************/

const coffee = require('./coffee');
 
console.log(coffee);
 
/*
 * node app.js
 *
 * output:
 * { name: 'Tubruk', price: 15000 }
*/

/*********************************************************************************************************************/

const firstName = 'Harry';
const lastName = 'Potter';
 
 
/* gunakan object literal
untuk mengekspor lebih dari satu nilai. */
module.exports = { firstName, lastName };

/*********************************************************************************************************************/

/*
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/
const { firstName, lastName } = require('./user');
 
 
console.log(firstName);
console.log(lastName);
 
 
/*
* output:
* Harry
* Potter
*/

/*********************************************************************************************************************/

class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
   
    growl() {
      console.log('grrrrr!')
    }
}

/*********************************************************************************************************************/

class Wolf {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
   
    howl() {
      console.log('owooooo!')
    }
}

/*********************************************************************************************************************/

const Tiger = // TODO 3
const Wolf = // TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);

/*********************************************************************************************************************/

const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);
 
/*
 * output:
 * Jan 11th 21
*/

/*********************************************************************************************************************/

{
    "name": "nodejs-basic",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "moment": "^2.29.4"
    }
}

/*********************************************************************************************************************/

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);

/*********************************************************************************************************************/

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
myEventEmitter.on('coffee-order', makeCoffee);
 
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });
 
/*
 * output:
 * Kopi Tubruk telah dibuat!
*/

/*********************************************************************************************************************/

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
 
/*
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
*/

/*********************************************************************************************************************/

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
 
/*
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
*/

/*********************************************************************************************************************/

const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

/*********************************************************************************************************************/

const fs = require('fs');
 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);

/*********************************************************************************************************************/

const fs = require('fs');
 
const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

/*********************************************************************************************************************/

const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');

/*********************************************************************************************************************/

const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();

/*********************************************************************************************************************/

const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');

/*********************************************************************************************************************/