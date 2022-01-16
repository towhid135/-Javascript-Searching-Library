import mocker from 'mocker-data-generator';

//create a schema of the database
let userSchema = {
    id: {
        faker: 'random.uuid'
    },
    firstName: {
        faker: 'name.firstName'
    },
    lastName: {
        faker: 'name.lastName'
    },
    email: {
        faker: 'internet.email'
    },
    
};

//import for writing into text
const fs = require('fs');

//Then pass the schema to mocker-data-generator
mocker().schema('users', userSchema, 1000)
          .build()
          .then(data=> {
            const stringData = JSON.stringify(data.users);
            fs.writeFile('Output.txt', stringData, (err) => {
      
                // In case of a error throw err.
                if (err) throw err;
            })
              /**
                  Should be an object with an array of users:
                  {
                   "user": [
                      {
                         "firstName": "Marietta",
                         "lastName": "Padberg",
                         "email": "Allene.Weber37@yahoo.com"
                      },
                      {
                         "firstName": "Stan",
                         "lastName": "Pacocha",
                         "email": "Rozella.Bauch@yahoo.com"
                      }
                   ]
                }
              */
          })