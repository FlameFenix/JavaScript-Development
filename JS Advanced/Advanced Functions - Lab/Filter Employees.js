function filter(objects, criteria) {
    let parsedObjs = JSON.parse(objects);
    let parsedCriteria = criteria.split('-');
    let filtered = parsedObjs.filter(x => x[parsedCriteria[0]] == parsedCriteria[1]);
    for (let i = 0; i < filtered.length; i++) {
        console.log(`${i}. ${filtered[i].first_name} ${filtered[i].last_name} - ${filtered[i].email}`)
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);