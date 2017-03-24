// function getTempCallback (location, callback) {
// callback(undefined, 78);
// callback('City not found');
// }

// getTempCallback('Oklahoma city', function(err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// })


// function getTempPromise (location) {
//     return new Promise(function(resolve, reject) {
        
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
        
//     })
// }

// getTempPromise('Oklahoma City').then(function(temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('Promise error', err)
// });


function addPromise (a, b) {
    return new Promise(function(resolve, reject) {

        if (typeof a == "number" && typeof b == "number") {
            resolve(a+b)
        } else {
            reject('These are not both numbers')
        }

    })
}

addPromise(5,'f').then(function(data) {
    console.log('success', data)
}, function(err) {
    console.log('Error', err)
})