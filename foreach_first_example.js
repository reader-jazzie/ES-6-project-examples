companies=[
{name :"Jaspreet Kaur",age:35,gender:"female"},
{name: "Amrit",age:32,gender:"male"},
{name: "Jasgun Kaur",age:6,gender:"female"},
{name:"Harsimran Singh",age:37,gender:"Male"}
];

   companies.forEach(function(companies){
    console.log(`company names are ${companies.name}, ages ${companies.age} and genders  ${companies.gender}`)
   })