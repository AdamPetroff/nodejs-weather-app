
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500)
    })
};

asyncAdd(2,4).then((result) => {
    console.log('Result: ', result);

    return asyncAdd(result, 33);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
}).then((res) => {
    console.log('Shoul be 39', res);
}, (errorMessage) => {
    console.log(errorMessage);
});

//
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('It worked');
//         reject('unable to fulfill promise');
//     }, 2500);
// });
//
// somePromise.then((message) => {
//     console.log('success ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });