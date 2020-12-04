var pounds = document.getElementById('input');
pounds.value = '';

pounds.addEventListener('input',(e)=>{
    document.getElementById('output').style.visibility = 'visible';
    var p = e.target.value;
    console.log(p);
    document.getElementById('grAnswer').innerHTML = (p/0.0022046).toFixed(2);
    document.getElementById('kgAnswer').innerHTML = (p/2.2046).toFixed(2);
    document.getElementById('ozAnswer').innerHTML = (p*16).toFixed(2);
});