const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

let input = document.getElementById("input");
let output = document.getElementById("output");

//function dis(data) {
//  switch (data) {
//    case "AC":
//      function clr() 
//         { 
//             document.getElementById("result").value = "" 
//         } 
//      input.innerHTML = "";
//      output.innerHTML = 0;
//      
//      break;
//    case "C":
//      input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
//      output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);
//      break;
//    case "=":
//      output.innerHTML = math.evaluate(`${input.innerHTML}`);
//      function solve() 
//         { 
//             let x = document.getElementById("result").value 
//             let y = eval(x) 
//             document.getElementById("result").value = y 
//         } 
//      break;
//
//    default:
//      input.innerHTML += data;
//  }
//}

        function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         //function that evaluates the digit and return result 
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         //function that clear the display 
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 
         // eid
         function clear()
         {
          document.getElementById("result").value = "" 
         
         }
         //del
         function dle()
          {
             let r = document.getElementById("result").value;
             if(r){
               r=r.slice(0,-1);
               document.getElementById("result").value = r;
             }
          }
         