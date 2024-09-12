

// <!-- first question -->
 
const obj = { a: 1, b: 2, c: 3, d: 4 };

const newobj= {};
Object.keys(obj).forEach(key => {
    if (obj[key] > 2) {
        newobj[key] = obj[key];
    }
});

console.log(newobj);



// <!-- second question -->
let obj1={a:1,b:2};
let obj2={c:3,d:4};
let res=Object.assign(obj1,obj2)
console.log(res)

// <!-- third question -->
let obj={a:1,b:2,c:3,d:4};
let sum=Object.values(obj).reduce((sum,value)=>sum+value);
console.log(sum)