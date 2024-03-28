// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("p1,succse"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("p2,succse"), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("p3,succse"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("p4,succse"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("p5,succse"), 5000);
// });
// const p6 = new Promise((resolve, reject) => {
// 	setTimeout(() => reject("p6,fail"), 6000);
// });

// Promise.allSettled([p1, p2, p3, p4, p5, p6]).then((res) => {
// 	console.log(res);
// })
// .catch((err) => {
// 	console.error(err);
// });







// map, filter and reduce - O/ P Based Questions
// Question 6 - Return total marks for students with marks greater than 60 let
//                after 20 marks have been added to those who scored less than 60



let students = [
	{neme: " Piyush", rollNumber: 31, marks: 80},
	{name: "Jenny", rollNumber: 15, marks: 69 } ,
	{name : "Kaushal", rollNumber: 16, marks: 35 } ,
	{name :"Dilpreet" , rollNumber: 7, marks: 55 } ,
];

// Question 1 - Return only name of students in Capital

// const names = students.map((stu) => stu.name.toUpperCase());


// console.log(names);


// Question 2 -Return only details of those who scored more than 60 marks


// const names = students.filter((stu) => stu.marks > 60);


// console.log(names);


// Question 3 - more than 60 marks and rollNumber grater than If

// const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);


// console.log(details);

// Question 4 - Sum of marks of all students

// const sum = students.reduce((acc,curr) => acc + curr.marks, 0);


// console.log(sum);

// Question 5 -Return only names of students who scored more than 60

// const names = students.filter((stu) => stu.marks > 60) .map((stu) => stu.name);


//  console.log(names);


// Question 6 - Return total marks for students with marks greater than 60 let
//                after 20 marks have been added to those who scored less than 60


// const totalMarks = students
// 	.map((stu) => {
// 		if (stu.marks < 60) {
// 			stu.marks += 20;
// 		}
// 		return stu;
// 	})
// 	.filter((stu) => stu.marks > 60)

// console. log (totalMarks);

// //<h1>JAI SHREE RAM  🙏🏻 🙏🏻</h1>
//




















