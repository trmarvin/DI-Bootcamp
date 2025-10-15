const promiseResolve = Promise.resolve(3);
const promiseReject = Promise.reject("Boo!");

promiseResolve.then(result => console.log(result));  // → 3
promiseReject.catch(error => console.log(error));    // → Boo!
