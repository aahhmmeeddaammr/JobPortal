let jobs = new Array();
if (localStorage.getItem("jobs")) {
     jobs = JSON.stringify(localStorage.getItem("jobs"))
} else {
     jobs = [
          {
               _id: 1,
               title: "React JS Developer",//
               NoApplied: 0,
               Applied: [],
               postby: 1,//
               location: "Giza",//
               ExperienceNeeded: 1,//
               company: "Facebook, inc",//
               Salary: "2000000",//
               JobCategories: "Web Development",//
               skills: ["Startup", "React.JS",
                    "Software Development", "JavaScript",
                    "RESTful APIs", "React",
                    "Redux", "Computer Science",
                    "Information Technology (IT)", "JSON",
                    "RESTful", "Js", "Front End",
                    "front-end", "Development"], //
               Description: "Developing new user-facing features using React.js Building reusable components and front-end libraries for future use Translating designs and wireframes into high-quality codeOptimizing components for maximum performance across a vast array of web-capable devices and browsers"
          },
          {
               _id: 2,
               title: "Angular JS Developer and .NET ",
               NoApplied: 0,
               Applied: [],
               postby: 1,
               location: "Cairo",
               ExperienceNeeded: 3,
               company: "Facebook, inc",
               Salary: "2000000",
               JobCategories: "PHP",
               skills: ["Startup", "AngularJS",
                    "Software Development", "JavaScript",
                    "RESTful APIs", "SQL",
                    "JQuery", "Computer Science",
                    "Information Technology (IT)", "JSON",
                    "RESTful", "Js", "XML",
                    "C#", ".NET", "MVC", "Development"],
               Description: `Translate the functional and technical requirements and specifications into application components.
                    Participate in the analysis & design of new functional requirements and systems.
                    Build application components using .NET Framework 4.5+, ASP.NET MVC 5+, Oracle DB, WCF Web Services/WCF Data Services, WWF, Angular 5+, JSON, XML, RESTful Services and MS SQL RDBMS
                    Develop the backend of the solution, including the service layer, business logic layer, and data access layer.
                    Develop the integration parts of the system in order to communicate with the internal and external systems using WCF.
                    Develop and write high-quality coding standards.
                    Assist and support other team members on multiple projects `,
          },
          {
               _id: 3,
               title: "Front-End Developer - Angular",
               NoApplied: 0,
               Applied: [],
               postby: 1,
               location: "Alex",
               ExperienceNeeded: 5,
               company: "Facebook, inc",
               Salary: "2000000",
               JobCategories: "Multimedia",
               skills: ["Startup", "AngularJS",
                    "Software Development", "JavaScript",
                    "RESTful APIs", "Angular",
                    "Bootstrap", "Computer Science",
                    "Information Technology (IT)", "JSON",
                    "RESTful", "Js", "Front End",
                    "front-end", "Development"],

               Description: `Develop new user-facing features
               Build reusable code and libraries for future use.
               Write functional requirement documents and guides
               Collaborate with back-end developers and web designers to improve usability
               Ensure the technical feasibility of UI designs.
               Optimize application for maximum speed and scalability.
               Assure that all user input is validated before submitting to back-end.
               Stay up-to-date on emerging technologies`
          },
          {
               _id: 4,
               title: "React.JS",
               NoApplied: 0,
               Applied: [],
               postby: 1,
               location: "Cairo",
               ExperienceNeeded: 1,
               company: "Facebook, inc",
               Salary: "2000000",
               JobCategories: "Web Development",
               skills: ["Startup", "React.JS",
                    "Software Development", "JavaScript",
                    "RESTful APIs", "React",
                    "Redux", "Computer Science",
                    "Information Technology (IT)", "JSON",
                    "RESTful", "Js", "Front End"],
               Description: "Developing new user-facing features using React.js Building reusable components and front-end libraries for future use Translating designs and wireframes into high-quality codeOptimizing components for maximum performance across a vast array of web-capable devices and browsers",
          },
          {
               _id: 5,
               title: "Senior Full Stack, PHP, Drupal Developer",
               NoApplied: 0,
               Applied: [],
               postby: 1,
               location: "Giza",
               ExperienceNeeded: 3,
               company: "Facebook, inc",
               Salary: "2000000",
               JobCategories: "Graphic Design",
               skills: ["Startup", "UI",
                    "UX", "JavaScript", "Java",
                    "RESTful APIs", "APIs",
                    "GITLAB", "Drupal 7",
                    "Information Technology (IT)", "Agile",
                    "RESTful", "Nginx", "CMS",
                    "Angular", "Lamp Stack"],
               Description: `As a Full Stack Web Developer, your primary duties will be helping us build new and awesome experiences for our internal and external customers, meaning your work will touch all aspects of front-end and back-end development, including databases, business logic, web services, front-end UI/UX, performance engineering, custom development, testing, and deployment.
                    You’ll leverage the latest database technologies as a basis for analytical application development. This involves modeling data, developing code, processes and creating an optimal platform for data retrieval in support of both internal and external facing applications.
                    The teams working on features are Agile, and we place a premium on collaboration and locally-made decisions.`,
          }
     ]
     localStorage.setItem("jobs", JSON.stringify(jobs));
}


let categories = [
     { name: "Web Development", count: 1000 },
     { name: "Education", count: 3500 },
     { name: "PHP", count: 5500 },
     { name: "Web Designer", count: 8000 },
     { name: "Graphic Design", count: 1000 },
     { name: "English", count: 1560 },
     { name: "Project Management", count: 2000 },
     { name: "Customer Service", count: 4000 },
     { name: "Multimedia", count: 2000 },
     { name: "Social Media", count: 1000 },
     { name: "Finance Management", count: 800 },
     { name: "Marketing", count: 3300 },
     { name: "Advertising", count: 900 },
     { name: "Writing", count: 2500 },
     { name: "Office", count: 7000 },
     { name: "Software Development", count: 1356 }
];
let governments = ["Cairo", "Giza", "South Sinai", "North Sinai", "SUEZ", "Red Sea", "Beheira", "Alexandria", "Faiyum", "Sohag", "Ismailia", "Qalyubia", "Beni Suef", 'Luxor']
localStorage.setItem("categories", JSON.stringify(categories));
localStorage.setItem("governments", JSON.stringify(governments));
class job {
     newjob = new Object;
     ourJobs = JSON.parse(localStorage.getItem("jobs"));
     constructor(title, Salary, ExperienceNeeded, company, skills, postby, JobCategories, location, Description) {
          if (localStorage.getItem("jobs")) {
               this.newjob._id = JSON.parse(localStorage.getItem("jobs")).length + 1;
          }
          this.newjob.title = title;
          this.newjob.NoApplied = 0;
          this.newjob.Applied = new Array();
          this.newjob.Salary = Salary;
          this.newjob.ExperienceNeeded = ExperienceNeeded;
          this.newjob.company = company;
          this.newjob.skills = skills;
          this.newjob.postby = postby;
          this.newjob.JobCategories = JobCategories;
          this.newjob.location = location;
          this.newjob.Description = Description;
          this.ourJobs.push(this.newjob)
     }
     getjob() {
          return this.ourJobs;
     }
}

let users=new Array()
if(localStorage.getItem("users")){
     users=JSON.parse(localStorage.getItem("users"))
}
else{
     users=[{
          _id:1,
          Role:"Admin",
          Name:"Ahmed Amr",
          password:"1234",
          email:"Ahmed@gmail.com",
          Appliedin:[],
          Post:[1,2,3,4,5],
     },{
          _id:2,
          Role:"User",
          Name:"Ayman Amr",
          password:"1234",
          email:"Aymanahmed@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:3,
          Role:"Admin",
          Name:"Nada Badawy",
          password:"1234",
          email:"nada@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:4,
          Role:"Admin",
          Name:"Ahmed Elkholy",
          password:"1234",
          email:"kholy@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:5,
          Role:"Admin",
          Name:"Omar Osama",
          password:"1234",
          email:"Omar@gmail.com",
          Appliedin:[],
          Post:[], 
     },{
          _id:6,
          Role:"User",
          Name:"Abdelrahman Molet",
          password:"1234",
          email:"Abdelrahman@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:7,
          Role:"User",
          Name:"Youssef Kagami",
          password:"1234",
          email:"Youssef@gmail.com",
          Appliedin:[],
          Post:[],
     }]
     localStorage.setItem("users",JSON.stringify(users));
}



let userss=JSON.parse(localStorage.getItem("users"));
let uemail =document.getElementById('email')
let upass=document.getElementById('password')
let btn=document.getElementById('btn')
let alert=document.querySelector(".alert")
console.log(userss);
let x=false;
btn.addEventListener('click', ()=>{
    for (let i = 0; i < userss.length; i++) {
        
        if(uemail.value===userss[i].email && upass.value===userss[i].password){
            console.log("done");
            x=1;
            localStorage.setItem('user_id', JSON.stringify(userss[i]._id))
            localStorage.setItem('user_role', JSON.stringify(userss[i].Role))
            location.href="../Home/index.html"
        }   
    }
    if(!x){
        alert.style=`display:flex`
        alert.innerHTML=`<p>Incorrect E-mail or Password</p>`
    } 
} )
