let ages=[10,89,34,12,15,13,78,55,60];
let companies=[
    {name :"Jaspreet Kaur",age:35,gender:"female",category:"Retail",start_year:1981},
    {name: "Amrit",age:32,gender:"male",category:"Wholesale",start_year:1988},
    {name: "Jasgun Kaur",age:6,gender:"female",category:"Retail",start_year:1985},
    {name:"Harsimran Singh",age:37,gender:"Male",category:"Wholesaler",start_year:1991}
    ];

let result=ages.filter(ages=>ages>21);
console.log(`Ages results are ${result}`);

// one example of filter 
let RetailCompanies=companies.filter((company)=>{
    if(companies.category==='Retail')
    {
        return true;
    }
    
});
console.log(RetailCompanies);

//second example of filter
let eighties_companies=companies.filter(company=>(company.start_year>1980 && company.start_year<1990))
   
console.log(eighties_companies);
