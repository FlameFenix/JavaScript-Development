function lowestPrice(input) {
    
    let cities = [];

    for (let i = 0; i < input.length; i++) {    

        let elements = input[i].split(' | ');
        let townName = elements[0];
        let productName = elements[1];
        let productPrice = Number(elements[2]);

        if(cities.some(x => x.productName == productName)) {
            let currentObj = cities.find(x => x.productName == productName);
            if(currentObj.productPrice > productPrice) {
                currentObj.productPrice = productPrice;
                currentObj.townName = townName;
            }
            
        } else {
            let obj = { 
                townName,
                productName,
                productPrice,
            };
            cities.push(obj);
        }
    }

    cities.sort((a,b) => {
        if(b.productPrice > a.productPrice) {
            if(a.townName > b.townName) {
                return 1;
            }
            
        } else if( b.productPrice < a.productPrice) {
            if(a.townName > b.townName) {
                return -1;
            }   
        } else {
                return 0;
        }
    });

    for (const product of cities) {
       console.log(`${product.productName} -> ${product.productPrice} (${product.townName})`);
    }

}

lowestPrice(  ['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000'
]);