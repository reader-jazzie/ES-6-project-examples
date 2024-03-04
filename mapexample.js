let companies=[
    {name :"Jaspreet Kaur",age:35,gender:"female",category:"Retail",start_year:1981,end_year:1997},
    {name: "Amrit",age:32,gender:"male",category:"Wholesale",start_year:1988,end_year:1998},
    {name: "Jasgun Kaur",age:6,gender:"female",category:"Retail",start_year:1985,end_year:2000},
    {name:"Harsimran Singh",age:37,gender:"Male",category:"Wholesaler",start_year:1991,end_year:1997}
    ];

    const result=companies.map((companies)=>{
        return `${companies.name} and [${companies.end_year}-${companies.start_year}]`

    });
    console.log(result);