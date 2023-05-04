// Module package Core


// Module package External

// const moment = require("moment");
// const date = moment().format(); // we can put the time format inside the scopes of format like "YYYY-MM-DD"

// moment package

// setInterval(() => {
//   const time = moment().format();
//   console.log(`current time: ${time}`);
// }, 5000);

//inquirer package

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: 'input', name: 'raqam', message: "raqamni kiriting" }])
//   .then((answer) => {
//     console.log("man kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

//validator package

// const validator = require("validator");
// // const test = validator.isEmail('foo@bar.com');
// // const test = validator.isInt("100");
// const test = validator.isIP("180.189.86.79");
// console.log('test:', test);

//uuidv4 package (random string)

// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require("chalk");
// const log = console.log;

// // log(chalk.blue("Hello ") + random + chalk.red(" !"));
// log(chalk.blue(`uuid creates ${random}`));


// MOdule package FILE

// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija", natija);
// console.log("*********************************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija2:", natija2);

// console.log("*********************************");
// const natija3 = calculate.ayirish(80, 20);
// console.log("Natija3", natija3);


const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("============================================");

const myAccount = new Account('Martin', 200000, 98995635564646);
myAccount.giveMeDetails();


myAccount.makeDeposit(1000000);

// ferrari 400000 usd
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);

