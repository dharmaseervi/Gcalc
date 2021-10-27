function gst(){
    let amount = parseInt(document.getElementById('t').value);
    let result = document.getElementById('gst').value;

if(result === '5%'){
   document.getElementById('n1').value = amount+amount*(5/100);
   document.getElementById('n2').value = amount/1.05;
   document.getElementById('n3').value = amount*(5/100);
   document.getElementById('n4').value = (amount*(5/100))/2;
   document.getElementById('n5').value = (amount*(5/100))/2;
}
if(result === '12%'){
    document.getElementById('n1').value = amount+amount*(12/100);
    document.getElementById('n2').value = amount/1.12;
    document.getElementById('n3').value = amount*(12/100);
   document.getElementById('n4').value = (amount*(12/100))/2;
   document.getElementById('n5').value = (amount*(12/100))/2;
 }
 if(result === '18%'){
    document.getElementById('n1').value = amount+amount*(18/100);
    document.getElementById('n2').value = amount/1.18;
    document.getElementById('n3').value = amount*(18/100);
   document.getElementById('n4').value = (amount*(18/100))/2;
   document.getElementById('n5').value = (amount*(18/100))/2;
 }
 if(result === '28%'){
    document.getElementById('n1').value = amount+amount*(28/100);
    document.getElementById('n2').value = amount/1.28;
    document.getElementById('n3').value = amount*(28/100);
   document.getElementById('n4').value = (amount*(28/100))/2;
   document.getElementById('n5').value = (amount*(28/100))/2;
 }
   
}
