let users=new Array()
if(localStorage.getItem("users")){
     users=JSON.parse(localStorage.getItem("users"))
}
else{
     users=[{
          _id:1,
          Role:"Admin",
          Name:"Ahmed Amr",
          password:"12345678",
          email:"Ahmed@gmail.com",
          Appliedin:[],
          Post:[1,2,3,4,5],
     },{
          _id:2,
          Role:"User",
          Name:"Ayman Amr",
          password:"12345678",
          email:"Aymanahmed@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:3,
          Role:"Admin",
          Name:"Nada Badawy",
          password:"12345678",
          email:"nada@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:4,
          Role:"Admin",
          Name:"Ahmed Elkholy",
          password:"12345678",
          email:"kholy@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:5,
          Role:"Admin",
          Name:"Omar Osama",
          password:"12345678",
          email:"Omar@gmail.com",
          Appliedin:[],
          Post:[], 
     },{
          _id:6,
          Role:"User",
          Name:"Abdelrahman Molet",
          password:"12345678",
          email:"Abdelrahman@gmail.com",
          Appliedin:[],
          Post:[],
     },{
          _id:7,
          Role:"User",
          Name:"Youssef Kagami",
          password:"12345678",
          email:"Youssef@gmail.com",
          Appliedin:[],
          Post:[],
     }]
     localStorage.setItem("users",JSON.stringify(users));
}
