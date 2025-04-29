const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*********************************************************************************************************************/

const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};
 
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    const method = request.method;
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    const { method } = request;
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    const { method } = request;
 
    if(method === 'GET') {
        // response ketika GET
    }
 
    if(method === 'POST') {
        // response ketika POST
    }
 
    // Anda bisa mengevaluasi tipe method lainnya
};

/*********************************************************************************************************************/

const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }
 
    if(method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }
 
    if(method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    let body = [];
 
    request.on('data', (chunk) => {
        body.push(chunk);
    });
 
    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
};

/*********************************************************************************************************************/

const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*********************************************************************************************************************/

const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*********************************************************************************************************************/

if(method === 'POST') {
    let body = [];
   
    request.on('data', (chunk) => {
      body.push(chunk);
    });
   
    request.on('end', () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
}

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    const { url } = request;
 
    if(url === '/') {
        // curl http://localhost:5000/
    }
 
    if(url === '/about') {
        // curl http://localhost:5000/about
    }
 
    // curl http://localhost:5000/<any>
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    const { url, method } = request;
 
    if(url === '/') {
 
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/
        }
 
        // curl -X <any> http://localhost:5000/
    }
 
    if(url === '/about') {
 
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/about
        }
 
        if(method === 'POST') {
            // curl -X POST http://localhost:5000/about
        }
 
        // curl -X <any> http://localhost:5000/about
    }
 
    // curl -X <any> http://localhost:5000/<any>
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    // if(method === 'GET') {
    //     response.end('<h1>Hello!</h1>');
    // }
 
    // if(method === 'POST') {
    //     let body = [];
    
    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });
 
    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}!</h2>`);
    //     });
    // }
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    /** Kode komentar disembunyikan agar lebih ringkas */
}

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
    } else if(url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
    }
 
    /** Kode komentar disembunyikan agar lebih ringkas */
}

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
    } else if(url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
    } else {
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
 
    /** Kode komentar disembunyikan agar lebih ringkas */
}

/*********************************************************************************************************************/

if(url === '/') {
    if(method === 'GET') {
        response.end('<h1>Ini adalah homepage</h1>');
    } else {
        response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
    }
}

/*********************************************************************************************************************/

else if(url === '/about') {
    if(method === 'GET') {
        // respons bila client menggunakan GET
    } else if(method === 'POST') {
        // respons bila client menggunakan POST
    } else {
        // respons bila client tidak menggunakan GET ataupun POST
    }
}

/*********************************************************************************************************************/

else if(url === '/about') {
    if(method === 'GET') {
        // respons bila client menggunakan GET
    } else if(method === 'POST') {
        // respons bila client menggunakan POST
    } else {
        response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
}

/*********************************************************************************************************************/

else if (url === '/about') {
    if (method === 'GET') {
      response.end('<h1>Halo! Ini adalah halaman about</h1>')
    } else if (method === 'POST') {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const {name} = JSON.parse(body);
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
  } else {
    response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
  }
}

/*********************************************************************************************************************/

const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.statusCode = 404;
 
    // 404 defaultnya adalah 'not found'
    response.statusMessage = 'User is not found';
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Powered-By', 'Node.js');
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};

/*********************************************************************************************************************/

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node.js');
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/*********************************************************************************************************************/

const init = async () => {
 
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });
 
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

/*********************************************************************************************************************/

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Homepage';
            },
        },
        {
            method: 'GET',
            path: '/about',
            handler: (request, h) => {
                return 'About Page';
            },
        },
    ]);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

/*********************************************************************************************************************/

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
];
 
module.exports = routes;

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/*********************************************************************************************************************/

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;

/*********************************************************************************************************************/

const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
];

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/*********************************************************************************************************************/

server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});

/*********************************************************************************************************************/

server.route({
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
        const { username = 'stranger' } = request.params;    
        return `Hello, ${username}!`;
    },
});

/*********************************************************************************************************************/

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;

/*********************************************************************************************************************/

{
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
       const { name = "stranger" } = request.params;
       return `Hello, ${name}!`;
   },
},

/*********************************************************************************************************************/

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
});

/*********************************************************************************************************************/

{
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;
        
        return `Hello, ${name}!`;
    },
},

/*********************************************************************************************************************/

{
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;
 
        if(lang === 'id') {
            return `Hai, ${name}!`;
        }
        return `Hello, ${name}!`;
    },
},

/*********************************************************************************************************************/

server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});

/*********************************************************************************************************************/

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return `Homepage`;
    },
});


/*********************************************************************************************************************/

server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});

/*********************************************************************************************************************/

// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('Custom-Header', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('Custom-Header', 'some-value');
};

/*********************************************************************************************************************/

{
    "name": "notes-app-back-end",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "nodemon server.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@eslint/js": "^9.7.0",
      "eslint": "^9.7.0",
      "globals": "^15.8.0",
      "nodemon": "^3.1.4"
    }
}

/*********************************************************************************************************************/

import daStyle from 'eslint-config-dicodingacademy';
 
export default [
  daStyle,
  // other config style
];

/*********************************************************************************************************************/

{
    "status": "success",
    "data": {
      "notes": [
        {
          "id":"notes-V1StGXR8_Z5jdHi6B-myT",
          "title":"Catatan 1",
          "createdAt":"2020-12-23T23:00:09.686Z",
          "updatedAt":"2020-12-23T23:00:09.686Z",
          "tags":[
            "Tag 1",
            "Tag 2"
          ],
          "body":"Isi dari catatan 1"
        },
        {
          "id":"notes-V1StGXR8_98apmLk3mm1",
          "title":"Catatan 2",
          "createdAt":"2020-12-23T23:00:09.686Z",
          "updatedAt":"2020-12-23T23:00:09.686Z",
          "tags":[
            "Tag 1",
            "Tag 2"
          ],
          "body":"Isi dari catatan 2"
        }
      ]
    }
}

/*********************************************************************************************************************/

{
    "status": "success",
    "data": {
      "note": {
        "id":"notes-V1StGXR8_Z5jdHi6B-myT",
        "title":"Catatan 1",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 1"
      }
    }
}

/*********************************************************************************************************************/

{
    "title":"Judul Catatan Revisi",
    "tags":[
      "Tag 1",
      "Tag 2"
    ],
    "body":"Konten catatan"
}

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/*********************************************************************************************************************/

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: () => {},
    },
];
    
module.exports = routes;

/*********************************************************************************************************************/

{
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    tags: array of string,
    body: string,
},

/*********************************************************************************************************************/

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
};

/*********************************************************************************************************************/

const { nanoid } = require('nanoid');
 
const addNoteHandler = (request, h) => {
const { title, tags, body } = request.payload;
 
const id = nanoid(16);
};

/*********************************************************************************************************************/

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
   
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
};

/*********************************************************************************************************************/

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
   
    const newNote = {
      title, tags, body, id, createdAt, updatedAt,
    };
   
    notes.push(newNote);
};

/*********************************************************************************************************************/

const { nanoid } = require('nanoid');
const notes = require('./notes');
 
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
 
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
 
  const newNote = {
   title, tags, body, id, createdAt, updatedAt,
  };
 
  notes.push(newNote);
};

/*********************************************************************************************************************/

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
   
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
   
    const newNote = {
     title, tags, body, id, createdAt, updatedAt,
    };
   
    notes.push(newNote);
   
    const isSuccess = notes.filter((note) => note.id === id).length > 0;
};

/*********************************************************************************************************************/

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
   
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
   
    const newNote = {
     title, tags, body, id, createdAt, updatedAt,
    };
   
    notes.push(newNote);
   
    const isSuccess = notes.filter((note) => note.id === id).length > 0;
   
    if (isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId: id,
        },
      });
      response.code(201);
      return response;
    }
   
    const response = h.response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
});
 
server.route(routes);
 
await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/*********************************************************************************************************************/

const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
 
return response;

/*********************************************************************************************************************/

const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
});

/*********************************************************************************************************************/

const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
});

/*********************************************************************************************************************/

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: () => {},
    },
];

/*********************************************************************************************************************/

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
});

/*********************************************************************************************************************/

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
});
   
module.exports = { addNoteHandler, getAllNotesHandler };

/*********************************************************************************************************************/

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: () => {},
    },
];

/*********************************************************************************************************************/

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
};

/*********************************************************************************************************************/

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const note = notes.filter((n) => n.id === id)[0];
};

/*********************************************************************************************************************/

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const note = notes.filter((n) => n.id === id)[0];
   
  if (note !== undefined) {
      return {
        status: 'success',
        data: {
          note,
        },
      };
    }
   
    const response = h.response({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

/*********************************************************************************************************************/

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const note = notes.filter((n) => n.id === id)[0];
   
    if (note !== undefined) {
      return {
        status: 'success',
        data: {
          note,
        },
      };
    }
   
    const response = h.response({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};
   
module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };

/*********************************************************************************************************************/

const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();
   
    const index = notes.findIndex((note) => note.id === id);
   
    if (index !== -1) {
      notes[index] = {
        ...notes[index],
        title,
        tags,
        body,
        updatedAt,
      };
   
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil diperbarui',
      });
      response.code(200);
      return response;
    }
   
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui catatan. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  };
   
  module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
};

/*********************************************************************************************************************/

const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const index = notes.findIndex((note) => note.id === id);
   
   if (index !== -1) {
      notes.splice(index, 1);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil dihapus',
      });
      response.code(200);
      return response;
    }
};

/*********************************************************************************************************************/

const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const index = notes.findIndex((note) => note.id === id);
   
    if (index !== -1) {
      notes.splice(index, 1);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil dihapus',
      });
      response.code(200);
      return response;
    }
   
  const response = h.response({
      status: 'fail',
      message: 'Catatan gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
};

/*********************************************************************************************************************/

const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const index = notes.findIndex((note) => note.id === id);
   
    if (index !== -1) {
      notes.splice(index, 1);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil dihapus',
      });
      response.code(200);
      return response;
    }
   
  const response = h.response({
      status: 'fail',
      message: 'Catatan gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  };
   
  module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
};

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
const got = require('got');
 
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();

/*********************************************************************************************************************/

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
      let id = pathname.match(/^\/(\d+)$/);
     
      if (!id) {
       res.statusCode = 400;
       return void res.end();
      }
     
      id = Number(id[1]);
     
      if (id === MISSING) {
       res.statusCode = 404;
       return void res.end();
      }
     
      res.setHeader('Content-Type', 'application/json');
     
      res.end(JSON.stringify({
        id,
        menu: menus[id % menus.length],
    }));
});

/*********************************************************************************************************************/

/* eslint-disable */
const http = require('http');
const url = require('url');
 
const menus = ['Nasi goreng', 'Mie goreng', 'Mie rebus', 'Es teh', 'Teh tawar'];
const MISSING = 3;
 
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  let id = pathname.match(/^\/(\d+)$/);
 
  if (!id) {
   res.statusCode = 400;
   return void res.end();
  }
 
  id = Number(id[1]);
 
  if (id === MISSING) {
   res.statusCode = 404;
   return void res.end();
  }
 
  res.setHeader('Content-Type', 'application/json');
 
  res.end(JSON.stringify({
   id,
   menu: menus[id % menus.length],
  }));
});
 
server.listen(process.env.PORT || 0, () => {
  const { port } = server.address();
  console.log(`Order service listening on localhost on port: ${port}`);
});

/*********************************************************************************************************************/

const http = require('http');
const url = require('url');
 
const users = ['Aras', 'Arsy', 'Dimas', 'Ivan', 'Rafy', 'Gilang'];
const MISSING = 4;
 
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  let id = pathname.match(/^\/(\d+)$/);
  if (!id) {
   res.statusCode = 400;
   return void res.end();
  }
 
  id = Number(id[1]);
 
  if (id === MISSING) {
   res.statusCode = 404;
   return void res.end();
  }
 
  res.setHeader('Content-Type', 'application/json');
 
  res.end(JSON.stringify({
   id,
   name: users[id % users.length],
  }));
});
 
server.listen(process.env.PORT || 0, () => {
  const { port } = server.address();
  console.log(`User service listening on localhost on port: ${port}`);
});

/*********************************************************************************************************************/

const {
    ORDER_SERVICE_PORT = 4000,
    USER_SERVICE_PORT = 5000,
    } = process.env;
     
    const orderService = `http://localhost:${ORDER_SERVICE_PORT}`;
const userService = `http://localhost:${USER_SERVICE_PORT}`;

/*********************************************************************************************************************/

server.route([
    {
      method: 'GET',
      path: '/{id}',
      handler: async (request, h) => {
        const { id } = request.params;
   
        try {
          const [order, user] = await Promise.all([
            got(`${orderService}/${id}`).json(),
            got(`${userService}/${id}`).json(),
        ]);
   
        return {
          id: order.id,
          menu: order.menu,
          user: user.name,
        };
     } catch (error) {
       if (!error.response) throw error;
       if (error.response.statusCode === 400) {
         return h.response({ message: 'bad request' }).code(400);
       }
       if (error.response.statusCode === 404) {
         return h.response({ message: 'not found' }).code(404);
       }
   
       throw error;
      }
     },
    },
]);

/*********************************************************************************************************************/

const Hapi = require('@hapi/hapi');
const got = require('got');
 
const {
  ORDER_SERVICE_PORT = 4000,
  USER_SERVICE_PORT = 5000,
} = process.env;
 
const orderService = `http://localhost:${ORDER_SERVICE_PORT}`;
const userService = `http://localhost:${USER_SERVICE_PORT}`;
 
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
 
  server.route([
    {
      method: 'GET',
      path: '/{id}',
      handler: async (request, h) => {
        const { id } = request.params;
 
        try {
          const [order, user] = await Promise.all([
            got(`${orderService}/${id}`).json(),
            got(`${userService}/${id}`).json(),
          ]);
 
          return {
            id: order.id,
            menu: order.menu,
            user: user.name,
          };
        } catch (error) {
          if (!error.response) throw error;
          if (error.response.statusCode === 400) {
            return h.response({ message: 'bad request' }).code(400);
          }
          if (error.response.statusCode === 404) {
            return h.response({ message: 'not found' }).code(404);
          }
 
          throw error;
        }
      },
    },
  ]);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/*********************************************************************************************************************/