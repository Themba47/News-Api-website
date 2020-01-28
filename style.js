//setTimeout('window.location.reload();', 30000);

const stockTable = document.getElementById('market');

const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=ZAR&apikey=1DSD5MM8KQNFIPW5';

let xar = new XMLHttpRequest();
xar.open('GET', url, true);
xar.onload = () => {
  var myObj = JSON.parse(xar.response);
  var stock = myObj.stock;
  var symbol = myObj["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
  var fromFx = myObj["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
  var toFx = myObj["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
  

  /*var headEr = document.createElement("h1");
  headEr.append(fromFx);
  stockTable.appendChild(headEr);*/


  var headEr = document.getElementById('from');
  headEr.innerHTML = fromFx;

  var headAr = document.getElementById('to');
  headAr.innerHTML = toFx;

    var number1 = document.getElementById('swaps');
  number1.innerHTML = symbol;

  /*var number1 = document.createElement("h2");
  number1.append(symbol)
  stockTable.appendChild(number1);*/

};
xar.send();
























