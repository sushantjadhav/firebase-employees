var db = firebase.firestore();
var employeesRef = db.collection("employees");
var sushantRef = db.collection("employees");

// Get all employess
// employeesRef.get().then(function (querySnapshot) {
//   querySnapshot.forEach((document) => {
//     console.log(document.data().fName + " " + document.data().lName);
//   });
// });

// Create employees data
// employeesRef.doc("Sushant").set({
//   age: 38,
//   email: "sushant@gmail.com",
//   fName: "Sushant",
//   lName: "Jadhav",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 15,
// });

// employeesRef.doc("Gopal").set({
//   age: 29,
//   email: "gopal@gmail.com",
//   fName: "Gopal",
//   lName: "Nichal",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 5,
// });

// employeesRef.doc("Sachin").set({
//   age: 36,
//   email: "sachin@gmail.com",
//   fName: "Sachin",
//   lName: "Jadhav",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 0,
// });

// employeesRef.doc("Rohit").set({
//   age: 36,
//   email: "rohit@gmail.com",
//   fName: "Rohit",
//   lName: "Hedda",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 15,
// });

// employeesRef.doc("Omkar").set({
//   age: 13,
//   email: "omkar@gmail.com",
//   fName: "Omkar",
//   lName: "Pawar",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 0,
// });

// employeesRef.doc("Praveen").set({
//   age: 36,
//   email: "praveen@gmail.com",
//   fName: "Praveen",
//   lName: "Sharma",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 13,
// });

// employeesRef.doc("Priyanka").set({
//   age: 36,
//   email: "priyanka@gmail.com",
//   fName: "Priyanka",
//   lName: "Jondhale",
//   gender: "Female",
//   isFullTime: true,
//   yearsOfExperience: 11,
// });

// employeesRef.doc("Pankaj").set({
//   age: 38,
//   email: "pankaj@gmail.com",
//   fName: "Pankaj",
//   lName: "Pareek",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 14,
// });

// employeesRef.doc("Tanya").set({
//   age: 13,
//   email: "tanya@gmail.com",
//   fName: "Tanya",
//   lName: "Sharma",
//   gender: "Female",
//   isFullTime: true,
//   yearsOfExperience: 8,
// });

// employeesRef.doc("Ramshankar").set({
//   age: 34,
//   email: "ramshankar@gmail.com",
//   fName: "Ramshankar",
//   lName: "Chowdhari",
//   gender: "Male",
//   isFullTime: true,
//   yearsOfExperience: 10,
// });
