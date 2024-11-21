console.log('Start');

function syncTask() {
  for (let i = 0; i < 10000000; i++) {} // Time-consuming task
  console.log('Synchronous Task Complete');
}

syncTask();

console.log('End');


console.log('Start');

function asyncTask() {
  setTimeout(() => {
    console.log('Asynchronous Task Complete');
  }, 2000); // Simulate a 2-second task
}

asyncTask();

console.log('End');

