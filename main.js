let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve('Success');
  } else {
    reject('failed');
  }
});

p.then((message) => {
  console.log('This is in the then and it is ' + message);
}).catch((message) => {
  console.log('This is the catch and it is ' + message);
});
