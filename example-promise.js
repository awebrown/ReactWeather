// //Callbacks
// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Richmond', function(err, temp) {
//   if(err) {
//     console.log('error', err)
//   } else {
//     console.log('success', temp)
//   }
// });
//
// //Promise
//   let temp = 70;
//   let location = "Tocoma";
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     //timeout simulates call
//   setTimeout(function() {
//     resolve('It is ' + temp + ' in ' + location);
//     reject('City not found');
//     }, 1000)
//   });
// }
//
// getTempPromise(location).then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })

                                                                            
//Challenge Area

function addPromise(a, b) {
  return new Promise(function(res, rej) {
    if(typeof a === 'number' && typeof b == 'number') {
      res(a + b);
    } else {
      rej('A and B need to be numbers');
    }
  })
}

addPromise(6, 8).then(function(total) {
    console.log('Success: ', total);
}, function(err) {
    console.log('Error:', err);
  });

  addPromise(6, 'tony').then(function(total) {
      console.log('Success: ', total);
  }, function(err) {
      console.log('Error:', err);
    })
