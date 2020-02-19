document.getElementById("moneyInput").addEventListener('input', function(e){
            
    var usdAmount = document.getElementById("moneyInput").value;
    var usdToBD = (usdAmount * 84.96);
    var usdToEuro = (usdAmount * 0.93);
    var usdToCAD = (usdAmount * 1.33);

    let usd = e.target.value;
    document.getElementById("bdOutput").innerHTML = usdToBD;
    document.getElementById("euroOutput").innerHTML = usdToEuro;
    document.getElementById("cadOutput").innerHTML = usdToCAD;
});