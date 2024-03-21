//document.write(bil1);
//document.write(bil2);
//document.write(op);
function hitung() {
    let bil1=parseInt(document.getElementById("Angka I").value);
    let bil2=parseInt(document.getElementById("Angka II").value);
    let op=document.getElementById("operator").value;
    let hasil=0;
    switch (op) {
        case "+":
        hasil=bil1+bil2;
           break;
        case "-":
        hasil=bil1-bil2;
           break;
        case "*":
     hasil=bil1*bil2;
           break;
        case "/":
        hasil=bil1/bil2;
           break;        
        default:
           break;
}
document.write(hasil);
}
