function closure(input) {
    let arr = [];

    function processList() {
        return {
            add: (str) => {
                arr.push(str);
            },
            remove: (str) => {
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    if (element == str) {
                        arr.splice(i, 1);
                    } 
                }
            },
            print: () => {
                console.log(arr.join(','));
            },
        }
    }

    let obj = processList();
    
    for (const element of input) {
        let cmdArgs = element.split(' ');
        obj[cmdArgs[0]](cmdArgs[1]);
    }
}

closure(['add pesho', 'add george', 'add peter', 'remove peter','print']);