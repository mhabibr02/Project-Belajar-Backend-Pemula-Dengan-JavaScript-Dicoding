{
    "title": "Catatan A",
    "tags": ["Android", "Web"],
    "body": "Isi dari catatan A"
}

/*********************************************************************************************************************/

pm.test('response status code should have 201 value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response status code should have 201 value', () => {
    pm.response.to.have.status(201);
});

/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json');
});

/*********************************************************************************************************************/

pm.test('response body should be an object', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body should be an object', () => {
    const responseJson = pm.response.json();
});
   
/*********************************************************************************************************************/

pm.test('response body should an object', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
}); 

/*********************************************************************************************************************/

pm.test('response body should have the correct property and value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body should have correct property and value', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.ownProperty('message');
    pm.expect(responseJson.message).to.equals('Catatan berhasil ditambahkan');
    pm.expect(responseJson).to.ownProperty('data');
    pm.expect(responseJson.data).to.be.an('object');
});

/*********************************************************************************************************************/

pm.test('response body data should have noteId property and not equal to empty', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body data should have noteId property and not equal to empty', () => {
    const responseJson = pm.response.json();
    const { data } = responseJson;
});

/*********************************************************************************************************************/

pm.test('response body data should have noteId property and not equal to empty', () => {
    const responseJson = pm.response.json();
    const { data } = responseJson;
 
    pm.expect(data).to.ownProperty('noteId');
    pm.expect(data.noteId).to.not.equals('');
});

/*********************************************************************************************************************/

pm.test('response body data should have noteId property and not equal to empty', () => {
    const responseJson = pm.response.json();
    const { data } = responseJson;
 
    pm.expect(data).to.ownProperty('noteId');
    pm.expect(data.noteId).to.not.equals('');
 
    pm.environment.set('noteId', data.noteId);
});

/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
});

/*********************************************************************************************************************/

pm.test('response status code should have 200 value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response status code should have 200 value', () => {
    pm.response.to.have.status(200);
});
 
/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
}); 

/*********************************************************************************************************************/

pm.test('response body should an object', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body should an object', () => {
    const responseJson = pm.response.json();
});

/*********************************************************************************************************************/

pm.test('response body should an object', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
}); 

/*********************************************************************************************************************/

pm.test('response body should have the correct property and value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body should have the correct property and value', () => {
    const responseJson = pm.response.json();
     pm.expect(responseJson).to.have.ownProperty('status');
     pm.expect(responseJson.status).to.equals('success');
     pm.expect(responseJson).to.have.ownProperty('data');
     pm.expect(responseJson.data).to.be.an('object');
}); 

/*********************************************************************************************************************/

pm.test('response body data should have a notes array and contain at least 1 item', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body data should have a notes array and contain at least 1 item', () => {
    const responseJson = pm.response.json();
       const { data } = responseJson;
});

/*********************************************************************************************************************/

pm.test('response body data should have a notes array and contain at least 1 item', () => {
    const responseJson = pm.response.json();
    const { data } = responseJson;
  
    pm.expect(data).to.have.ownProperty('notes');
    pm.expect(data.notes).to.be.an('array');
    pm.expect(data.notes).lengthOf.at.least(1);
});

/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body should be an object', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
});

/*********************************************************************************************************************/

pm.test('response body should have the correct property and value', () => {
    const responseJson = pm.response.json();
}); 

/*********************************************************************************************************************/

pm.test('response body should have the correct property and value', () => {
    const responseJson = pm.response.json();
  
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('data');
    pm.expect(responseJson.data).to.be.an('object');
}); 

/*********************************************************************************************************************/

pm.test('response body data should contain note object', () => {
 
});

/*********************************************************************************************************************/

pm.test('response body data should contain note object', () => {
    const responseJson = pm.response.json();
    const { data } = responseJson;
});

/*********************************************************************************************************************/

pm.test('response body data should contain note object', () => {
    const responseJson = pm.response.json();
    const { data } = responseJson;
  
    pm.expect(data).to.have.ownProperty('note');
    pm.expect(data.note).to.be.an('object');
}); 

/*********************************************************************************************************************/

pm.test('note object should contain correct value for id, title, body, and tags property', () => {
    const responseJson = pm.response.json();
    const { data: { note } } = responseJson;
});

/*********************************************************************************************************************/

pm.test('note object should contain correct value for id, title, body, and tags property', () => {
    const responseJson = pm.response.json();
    const { data: { note } } = responseJson;
    
    const expectedId = pm.environment.get('noteId');
    const expectedTitle = 'Catatan A';
    const expectedTags = ['Android', 'Web'];
    const expectedBody = 'Isi dari catatan A';
});

/*********************************************************************************************************************/

pm.test('note object should contain correct value for id, title, body, and tags property', () => {
    const responseJson = pm.response.json();
    const { data: { note } } = responseJson;
    const expectedId = pm.environment.get('noteId');
    const expectedTitle = 'Catatan A';
    const expectedTags = ['Android', 'Web'];
    const expectedBody = 'Isi dari catatan A';
    pm.expect(note).to.have.ownProperty('id');
    pm.expect(note.id).to.equals(expectedId);
    pm.expect(note).to.have.ownProperty('title');
    pm.expect(note.title).to.equals(expectedTitle);
    pm.expect(note).to.have.ownProperty('tags');
    pm.expect(note.tags).to.equals(expectedTags);
    pm.expect(note).to.have.ownProperty('body');
    pm.expect(note.body).to.equals(expectedBody);
});

/*********************************************************************************************************************/

["Harry", "Potter"] === ["Harry", "Potter"]
// -> false
 
{ firstName: "Harry", lastName: "Potter" } === { firstName: "Harry", lastName: "Potter" }
// -> false

//

JSON.stringify(["Harry", "Potter"]) === JSON.stringify(["Harry", "Potter"]);
// -> true
 
JSON.stringify({ firstName: "Harry", lastName: "Potter" }) === JSON.stringify({ firstName: "Harry", lastName: "Potter" });
// -> true

/*********************************************************************************************************************/

pm.test('note object should contain correct value for id, title, body, and tags property', () => {
    const responseJson = pm.response.json();
    const { data: { note } } = responseJson;
     
    const expectedId = pm.environment.get('noteId');
    const expectedTitle = 'Catatan A';
    const expectedTags = ['Android', 'Web'];
    const expectedBody = 'Isi dari catatan A';
     
    pm.expect(note).to.have.ownProperty('id');
    pm.expect(note.id).to.equals(expectedId);
     
    pm.expect(note).to.have.ownProperty('title');
    pm.expect(note.title).to.equals(expectedTitle);
     
    pm.expect(note).to.have.ownProperty('tags');
    pm.expect(note.tags).to.eql(expectedTags);
     
    pm.expect(note).to.have.ownProperty('body');
    pm.expect(note.body).to.equals(expectedBody);
});

/*********************************************************************************************************************/

{
    "title": "Catatan A Revised",
    "tags": ["Android", "Web"],
    "body": "Isi dari Catatan A Revised"
}

/*********************************************************************************************************************/

pm.test('response Content-Type header should have application/json value', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals("application/json; charset=utf-8");
}); 

/*********************************************************************************************************************/

pm.test('response body should be an object', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
});

/*********************************************************************************************************************/

pm.test('response body should have correct property and value', () => {
    const responseJson = pm.response.json();
  
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('message');
    pm.expect(responseJson.message).to.equals('Catatan berhasil diperbarui');
});

/*********************************************************************************************************************/

pm.test('when request the updated note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
  
  
});
});

/*********************************************************************************************************************/

pm.test('when request the updated note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
        if(!error) {
            pm.test('then the updated note should contain the latest data', () => {
                
            });
        }
    });
});

/*********************************************************************************************************************/

pm.test('when request the updated note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
        if(!error) {
            pm.test('then the updated note should contain the latest data', () => {
const responseJson = response.json();
                const { data: { note } } = responseJson;
            });
        }
    });
});

/*********************************************************************************************************************/

pm.test('when request the updated note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
        if(!error) {
            pm.test('then the updated note should contain the latest data', () => {
                const responseJson = response.json();
                const { data: { note } } = responseJson;
 
                const expectedTitle = 'Catatan A Revised';
                const expectedTags = ['Android', 'Web'];
                const expectedBody = 'Isi dari Catatan A Revised';
            });
        }
    });
});

/*********************************************************************************************************************/

pm.test('when request the updated note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
        if(!error) {
            pm.test('then the updated note should contain the latest data', () => {
                const responseJson = response.json();
                const { data: { note } } = responseJson;
 
                const expectedTitle = 'Catatan A Revised';
                const expectedTags = ['Android', 'Web'];
                const expectedBody = 'Isi dari Catatan A Revised';
 
                pm.expect(note.title).to.equals(expectedTitle);
                pm.expect(note.tags).to.eql(expectedTags);
                pm.expect(note.body).to.equals(expectedBody);
            });
        }
    });
});

/*********************************************************************************************************************/

pm.test('response body should be an object', () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
});

/*********************************************************************************************************************/

pm.test('response body should have correct property and value', () => {
    const responseJson = pm.response.json();
  
    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('message');
    pm.expect(responseJson.message).to.equals('Catatan berhasil dihapus');
}); 

/*********************************************************************************************************************/

pm.test('when request the deleted note', () => {
    const noteId = pm.environment.get('noteId');
       pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
    });
});

/*********************************************************************************************************************/

pm.test('when request the deleted note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
 if(!error) {
            pm.test('the deleted note should be not found', () => {
            });
        }
    });
});

/*********************************************************************************************************************/

pm.test('when request the deleted note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
        if(!error) {
            pm.test('the deleted note should be not found', () => {
pm.expect(response.code).to.equals(404);
            });
        }
    });
});

/*********************************************************************************************************************/

pm.test('when request the deleted note', () => {
    const noteId = pm.environment.get('noteId');
    pm.sendRequest(`http://localhost:5000/notes/${noteId}`, (error, response) => {
        if(!error) {
            pm.test('the deleted note should be not found', () => {
                pm.expect(response.code).to.equals(404);
                const responseJson = response.json();
                pm.expect(responseJson.status).to.equals('fail');
                pm.expect(responseJson.message).to.equals('Catatan tidak ditemukan');
            });
        }
    });
});

/*********************************************************************************************************************/