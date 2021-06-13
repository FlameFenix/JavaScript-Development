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
    console.log(cities);
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);