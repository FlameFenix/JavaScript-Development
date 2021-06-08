function closure(input) {
    let arr = [];

    function processList() {
        return {
            add: (str) => {
                arr.push(str);
            },
            remove: (str) => {
                arr = arr.filter(x => x !== str);
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