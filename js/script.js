//! 1

// const delay = ms => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(ms);
//       }, ms);
//     });
//   };

//   const logger = time => console.log(`Resolved after ${time}ms`);

//   delay(2000).then(logger);
//   delay(1000).then(logger);
//   delay(1500).then(logger);

//! 2

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];

//   const toggleUserState = (allUsers, userName) => {
//     return new Promise(resolve => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user
//       );
//       resolve(updatedUsers);
//     });
//   };

//   const logger = updatedUsers => console.table(updatedUsers);

//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);

//! 3

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

//   const makeTransaction = transaction => {
//     const delay = randomIntegerFromInterval(200, 500);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const canProcess = Math.random() > 0.3;
//         if (canProcess) {
//           resolve({ id: transaction.id, time: delay });
//         } else {
//           reject(transaction.id);
//         }
//       }, delay);
//     });
//   };

//   const logSuccess = ({ id, time }) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };

//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };

//   makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
//   makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
//   makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
//   makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

//!!! Домашнє завдання до: Тема 14. Методи класу Promise. Цикл подій

//! 1

// const delayedPromise = (value, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   };

//   const promises = [
//     delayedPromise('Проміс 1', 4000),
//     delayedPromise('Проміс 2', 500),
//     delayedPromise('Проміс 3', 1500),
//     delayedPromise('Проміс 4', 800),
//     delayedPromise('Проміс 5', 1200),
//   ];

//   Promise.all(promises)
//     .then(results => {
//       console.log(results);
//     })
//     .catch(error => {
//       console.error(error);
//     });

//! 2

const randomDelay = (value) => {
  const min = 1000;
  const max = 5000;
  return new Promise((resolve) => {
    const random = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    setTimeout(() => {
      resolve(value);
    }, random);
  });
};

const promises = [
  randomDelay("Проміс 1"),
  randomDelay("Проміс 2"),
  randomDelay("Проміс 3"),
  randomDelay("Проміс 4"),
  randomDelay("Проміс 5"),
];

  Promise.race(promises)
    .then(results => {
      console.log(`найшвидший проміс: ${results}`);
    })
    .catch(error => {
      console.error(error);
    });