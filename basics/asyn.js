// console.log("console lod 01");

// setTimeout(() => {
//   console.log("console lod 02");
// }, 2000);

// setTimeout(() => {
//   console.log("console lod 03");
// }, 5000);

// function function1() {
//   console.log("This is function 1");
// }

// function function2(callback) {
//   setTimeout(() => {
//     console.log("This is function 2");
//     callback();
//   }, 2000);
// }

// function function3() {
//   console.log("This is function 3");
// }

// function1();
// function2();
// function3();

// function1();
// function2(function3);

// function function1() {
//   console.log("This is function 1");
// }

// function function2() {
//   setTimeout(() => {
//     console.log("This is function 2");
//   }, 2000);
// }

// function function3() {
//   console.log("This is function 3");
// }

// var p1 = new Promise((resolve, reject) => {
//   let isTrue = true;

//   if (isTrue) {
//     resolve("Promise is Resolve");
//   } else {
//     reject("Promise is Reject");
//   }
// });

// var p2 = new Promise((resolve, reject) => {
//   let isTrue = false;

//   if (isTrue) {
//     resolve("Promise is Resolve 2");
//   } else {
//     reject("Promise is Reject 2");
//   }
// });

// p1.then((data) => {
//   console.log("Resolve : " + data);
// }).catch((e) => {
//   console.log("Error : " + e);
// });

// Promise.all([p1, p2])
//   .then((data) => {
//     console.log("Resolve : " + data);
//   })
//   .then((data) => {
//     console.log("Resolve : " + data);
//   })
//   .catch((e) => {
//     console.log("Error : " + e);
//   });

// function function1() {
//   console.log("This is function 1");
// }

// function function2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("This is function 2");
//       resolve("func 02");
//     }, 2000);
//   });
// }

// function function3() {
//   console.log("This is function 3");
// }

// function1();
// function2()
//   .then((data) => {
//     console.log(data);
//     function3();
//   })
//   .catch((e) => {});

function function1() {
  console.log("This is function 1");
}

function function2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function 2");
      resolve("func 02");
    }, 2000);
  });
}

function function3() {
  console.log("This is function 3");
}

const main = async () => {
  function1();
  await function2();
  function3();
};

// main();

async function f4() {
  await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(
    (res) => {
      console.log(res);
    }
  );
}

f4();
