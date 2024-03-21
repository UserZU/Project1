let total=0;
let ratarata=0;
for (let i = 1; i < 4; i++){
     let bil=parseInt(prompt("Masukkan angka"));
     total=total+bil;
     ratarata=total/i;
}
document.write(total+"<br>");
document.write(ratarata);