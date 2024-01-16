const obj = {
    name: "jith",
    class: "FSD",
    batch: "54",
    array: "5", 
}
console.log(obj)

const arr = ["jith","ram", 10 , {name:"kumar"}];
console.log(arr);

var name = "jith";
var name1 = name
var name1 = "ram";

console.log("name",name);
console.log("name",name1)

let name0 = ["jith", "ram", "kumaran"];
let name2 = name0
 name2[0] = "INDHIRAJITH";

console.log("name",name0);
console.log("name",name2)
console.log(obj.name);
console.log(obj["name"]);

const nestObj = [
    {
      class: "FSD",
      studend: [
        {
          name: "siva",
          stack: [
            "html",
            "css",
            {
              js: ["react", " angular"],
            },
          ],
        },
        {
          name: "chandru",
          stack: [
            "html",
            "css",
            {
              js: ["vue", " react"],
            },
          ],
        },
      ],
    }, 
  ];

  console.log("siva's -", nestObj[0].studend[0].stack[2].js[1]);
console.log("chandru's", nestObj[0].studend[1].name);

let api =new XMLHttpRequest();
console.log(api);
api.open("GET","https://restcountries.com/v3.1/all");
api.send();
api.onload = function(){
  let data=JSON.parse(api.response);
  console.log(data);
}

// hoisting
var namey= "jith";
console.log(namey);

console.log(name7);
var name7= "jith";
console.log(name7)

console.log(name6);
let name6= "jith";

// JS program all was run in a tow time.
// memory allocation.
// execution.