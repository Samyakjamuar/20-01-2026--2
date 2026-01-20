let obj1={
    name:"samyak",
    class: 12,
    city:"gaya"
}

localStorage.setItem("student_data",JSON.stringify(obj1));  



let aby= JSON.parse(localStorage.getItem("student_data" ));
   
 
 console.log(aby);
 


 /*Part 1: Closure (5 Questions)

What is a closure in JavaScript?
Explain it in your own words without using a definition from a book.

Why are closures created in JavaScript?
What problem do they solve in real programs?

Look at this code and predict the output:

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const fn = outer();
fn();
fn();


Explain why this output happens.

How does closure help in data hiding / encapsulation?
Give a real-life example (like counter, private variable, etc.).

What is the difference between a normal function and a closure?
When does a function become a closure?

🔹 Part 2: Anonymous Function (5 Questions)

What is an anonymous function in JavaScript?
Why does it not have a name?

Can this code work? Why or why not?

function () {
  console.log("Hello");
}


Where are anonymous functions commonly used in JavaScript?
Name at least 3 real uses (interview favorite).

What will be the output?

setTimeout(function () {
  console.log("JavaScript");
}, 1000);


Why do we use an anonymous function here?

Difference between anonymous function and named function expression.
Which one is better for debugging and why?
*/


 function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const fn = outer();
fn();
fn();

function bankAccount() {
  let balance = 1000;

  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
    }
  };
}

const account = bankAccount();
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); 
let a={
  
  "users": [
    {
      "id": 1,
      "personalInfo": {
        "firstName": "Amit",
        "lastName": "Sharma",
        "age": 26,
        "gender": "Male",
        "email": "amit.sharma@example.com",
        "phone": "+91-9876543210"
      },
      "address": {
        "street": "MG Road",
        "city": "Delhi",
        "state": "Delhi",
        "country": "India",
        "pincode": "110001"
      },
      "skills": ["HTML", "CSS", "JavaScript", "React"],
      "education": {
        "degree": "B.Tech",
        "college": "IIT Delhi",
        "year": 2022
      },
      "experience": [
        {
          "company": "TechSoft",
          "role": "Frontend Developer",
          "years": 2
        }
      ],
      "isActive": true
    },
    {
      "id": 2,
      "personalInfo": {
        "firstName": "Neha",
        "lastName": "Verma",
        "age": 24,
        "gender": "Female",
        "email": "neha.verma@example.com",
        "phone": "+91-9123456780"
      },
      "address": {
        "street": "Park Street",
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "pincode": "700016"
      },
      "skills": ["Python", "Django", "SQL"],
      "education": {
        "degree": "BCA",
        "college": "Calcutta University",
        "year": 2021
      },
      "experience": [
        {
          "company": "WebCore",
          "role": "Backend Developer",
          "years": 1.5
        }
      ],
      "isActive": true
    },
    {
      "id": 3,
      "personalInfo": {
        "firstName": "Rahul",
        "lastName": "Mehta",
        "age": 29,
        "gender": "Male",
        "email": "rahul.mehta@example.com",
        "phone": "+91-9988776655"
      },
      "address": {
        "street": "Satellite Road",
        "city": "Ahmedabad",
        "state": "Gujarat",
        "country": "India",
        "pincode": "380015"
      },
      "skills": ["Java", "Spring Boot", "Microservices"],
      "education": {
        "degree": "MCA",
        "college": "Nirma University",
        "year": 2019
      },
      "experience": [
        {
          "company": "Infosys",
          "role": "Software Engineer",
          "years": 4
        }
      ],
      "isActive": false
    },
    {
      "id": 4,
      "personalInfo": {
        "firstName": "Pooja",
        "lastName": "Singh",
        "age": 27,
        "gender": "Female",
        "email": "pooja.singh@example.com",
        "phone": "+91-9001122334"
      },
      "address": {
        "street": "Civil Lines",
        "city": "Jaipur",
        "state": "Rajasthan",
        "country": "India",
        "pincode": "302006"
      },
      "skills": ["UI/UX", "Figma", "Adobe XD"],
      "education": {
        "degree": "B.Des",
        "college": "NIFT",
        "year": 2020
      },
      "experience": [
        {
          "company": "DesignHub",
          "role": "UI Designer",
          "years": 3
        }
      ],
      "isActive": true
    },
    {
      "id": 5,
      "personalInfo": {
        "firstName": "Suresh",
        "lastName": "Patel",
        "age": 32,
        "gender": "Male",
        "email": "suresh.patel@example.com",
        "phone": "+91-8899776655"
      },
      "address": {
        "street": "Ring Road",
        "city": "Surat",
        "state": "Gujarat",
        "country": "India",
        "pincode": "395002"
      },
      "skills": ["Node.js", "MongoDB", "Express"],
      "education": {
        "degree": "B.Sc IT",
        "college": "Veer Narmad University",
        "year": 2016
      },
      "experience": [
        {
          "company": "StartupX",
          "role": "Full Stack Developer",
          "years": 6
        }
      ],
      "isActive": true
    },
    {
      "id": 6,
      "personalInfo": {
        "firstName": "Anjali",
        "lastName": "Kumari",
        "age": 23,
        "gender": "Female",
        "email": "anjali.kumari@example.com",
        "phone": "+91-9112233445"
      },
      "address": {
        "street": "Boring Road",
        "city": "Patna",
        "state": "Bihar",
        "country": "India",
        "pincode": "800001"
      },
      "skills": ["C", "C++", "DSA"],
      "education": {
        "degree": "B.Tech",
        "college": "AKU",
        "year": 2024
      },
      "experience": [],
      "isActive": true
    },
    {
      "id": 7,
      "personalInfo": {
        "firstName": "Vikram",
        "lastName": "Rao",
        "age": 35,
        "gender": "Male",
        "email": "vikram.rao@example.com",
        "phone": "+91-9345678123"
      },
      "address": {
        "street": "Indiranagar",
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "pincode": "560038"
      },
      "skills": ["AWS", "Docker", "Kubernetes"],
      "education": {
        "degree": "B.E",
        "college": "VTU",
        "year": 2012
      },
      "experience": [
        {
          "company": "Amazon",
          "role": "DevOps Engineer",
          "years": 10
        }
      ],
      "isActive": true
    },
    {
      "id": 8,
      "personalInfo": {
        "firstName": "Ritika",
        "lastName": "Malhotra",
        "age": 28,
        "gender": "Female",
        "email": "ritika.m@example.com",
        "phone": "+91-9870011223"
      },
      "address": {
        "street": "Sector 18",
        "city": "Noida",
        "state": "Uttar Pradesh",
        "country": "India",
        "pincode": "201301"
      },
      "skills": ["Testing", "Selenium", "JIRA"],
      "education": {
        "degree": "B.Tech",
        "college": "Amity University",
        "year": 2018
      },
      "experience": [
        {
          "company": "TCS",
          "role": "QA Engineer",
          "years": 5
        }
      ],
      "isActive": false
    },
    {
      "id": 9,
      "personalInfo": {
        "firstName": "Manish",
        "lastName": "Yadav",
        "age": 31,
        "gender": "Male",
        "email": "manish.yadav@example.com",
        "phone": "+91-9822334455"
      },
      "address": {
        "street": "Alkapuri",
        "city": "Vadodara",
        "state": "Gujarat",
        "country": "India",
        "pincode": "390007"
      },
      "skills": ["Data Analysis", "Power BI", "Excel"],
      "education": {
        "degree": "MBA",
        "college": "MS University",
        "year": 2017
      },
      "experience": [
        {
          "company": "Deloitte",
          "role": "Data Analyst",
          "years": 6
        }
      ],
      "isActive": true
    },
    {
      "id": 10,
      "personalInfo": {
        "firstName": "Karan",
        "lastName": "Joshi",
        "age": 22,
        "gender": "Male",
        "email": "karan.joshi@example.com",
        "phone": "+91-9000090009"
      },
      "address": {
        "street": "University Road",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "pincode": "411007"
      },
      "skills": ["React", "Tailwind", "Git"],
      "education": {
        "degree": "BCA",
        "college": "SPPU",
        "year": 2025
      },
      "experience": [],
      "isActive": true
    }
  ]
}

