/* Math in JS */

/*let round = Math.round(8.4);*/        /* Yaxlidlash-1 */
/*let pow = Math.pow(4,5);*/          /* Darajasini hisoblash */
/*let sqrt = Math.sqrt(49);*/           /* Ildizini topish */
/*let abs = Math.abs(-12.8);*/          /* Absolyut son */
/*let ceil = Math.ceil(49.1);*/         /* Yaxlidlash-2 */
/*let floor = Math.floor(49.9);*/       /* Yaxlidlash-3 */
/*let trunc = Math.trunc(49.9);*/       /* Yaxlidlash-4 */
/*let min = Math.min(225,12,445,1202,11,555);*/
/*let max = Math.max(225,12,445,1202,11,555,349,350);*/
/*document.write(max);*/

/* DOM in JS */

let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi");
let bySelector = document.querySelector("h1");
let bySelectorAll = document.querySelectorAll("h1");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");

byAll.style.color = "yellow";
byAll.style.backgroundColor = "green";
byAll.style.width = "300px";
byAll.style.height = "250px";
byAll.style.fontSize = "45px"
byAll.style.paddingTop = "90px"
byAll.style.paddingLeft = "30px"
byAll.style.boxSizing = "border-box";
byAll.style.border = "10px solid black";

console.log(byAll);





