// Higher order functions
// 1. Function that takes another function as an argument

const Students = [
    {
      name: "John",
      age: 20,
      country: "USA",
      score: 90,
    },
    {
      name: "Jane",
      age: 22,
      country: "UK",
      score: 80,
    },
    {
      name: "Doe",
      age: 21,
      country: "USA",
      score: 70,
    },
    {
      name: "Smith",
      age: 23,
      country: "UK",
      score: 60,
    },
  ];
  
  // Add a branch field to each student and log their details
  Students.forEach((student) => {
    student.branch = "CSE"; // Set branch to CSE
    console.log(`${student.name}, Branch: ${student.branch}`);
  });
  
  // Map to create a new array with student objects
  const studentDetails = Students.map((student) => {
    return student; // You can modify this to return only specific properties if needed
  });
  
  // Log the student details
  console.log("Student Details:", studentDetails);
  
  // Filtering the students from the USA
  console.log("Filtering the students from USA:");
  const filteredStudents = Students.filter((student) => student.country === "USA");
  filteredStudents.forEach((student) => {
    console.log(student);
  });
  
  // Sort the students by score in ascending order
  Students.sort((a, b) => {
    return a.score - b.score; // Sort in ascending order
  });
  
  // Log the sorted students
  console.log("Sorted Students:");
  Students.forEach((student) => {
    console.log(`${student.name}, Score: ${student.score}`);
  });
  