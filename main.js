const API = "http://127.0.0.1:5500/patrons.json";

const patronsTable = document.getElementById("patrons_table");

async function INIT(){
    const response = await fetch(API);
    const data = await response.json();
    let table = "<tr><th>Name</th><th>Premium</th><th>Amount</th></tr>";
    data.forEach(patron => {
        if (patron.premium){
            patron.premium = "✅";
        } else {
            patron.premium = "❌";
        }
       if(patron.paid_total >= 800){
        table += `<tr><td>${patron.subscriber}</td><td id="premium_click" type="button">${patron.premium}</td><td id="golden">${patron.paid_total+"$"}</td></tr>`;
       }
       else{
         table += `<tr><td>${patron.subscriber}</td><td id="premium_click" type="button">${patron.premium}</td><td>${patron.paid_total+"$"}</td></tr>`;
       }
       
    });

    patronsTable.innerHTML = table;

  function Clickes(){
    const error = document.getElementById("alert_id");
    const premiumHeaders = document.querySelectorAll("#premium_click");
    premiumHeaders.forEach(premiumHeader => {
        premiumHeader.addEventListener("click", function(){
        error.innerHTML = "Karbantartások miatt ez a funkció jelenleg nem elérhető!";
        setTimeout(function() {
            error.innerHTML = "";   
        }, 5000);
    })
        });
        
  }
  Clickes();
}
INIT();   

