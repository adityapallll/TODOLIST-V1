
exports.getDate = function (){ //'module.exports' is same as 'exports'.

  const today = new Date();

  // let currentDay = today.getDay();
  // let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function (){ //same thing as 'const getDay = finction(){...}' 'export.getDay = getDay'.

  const today = new Date();

  const options = {
      weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};







// Log method 👇 

// module.exports.getDate = getDate;

// // module.exports = getDate;

// // module.exports = "Hello"; //gives only hello as we did not export the function.

// function getDate(){

//   let today = new Date();

//   // let currentDay = today.getDay();
//   // let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
//   let options = {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//       year: "numeric"
//   };

//   let day = today.toLocaleDateString("en-US", options);

//   return day;

// }

// module.exports.getDay = getDay;

// function getDay(){

//   let today = new Date();

//   let options = {
//       weekday: "long"
//   };

 //   let day = today.toLocaleDateString("en-US", options);

 //   return day;

// }