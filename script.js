
function converter(){
    let v = document.getElementById('ireal').value //.value so funciona dentro da função
    let d = v / 5.30 
    document.getElementById('idolar').value = d.toFixed(2)
    alert(v)
}   
    