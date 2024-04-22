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
