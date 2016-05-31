function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Both variables must be numbers');
    }
  });
}


addPromise(1, 2).then(function(newNumber) {
  console.log('promise success', newNumber);
}, function(err) {
  console.log('promise error', err);
});
