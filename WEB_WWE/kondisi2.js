let nilai1=parseInt(prompt("masukkan nilai"));
let nilai2=parseInt(prompt("masukkan nilai"));
let nilai3=parseInt(prompt("masukkan nilai"));
let nilai4=parseInt(prompt("masukkan nilai"));
let ratarata=(nilai1+nilai2+nilai3+nilai4)/4;

if (ratarata>=90){
    nilai_huruf="A";
}
else if(ratarata>=80){
    nilai_huruf="B";
}
else if(ratarata>=70){
    nilai_huruf="C";
}
else{
    nilai_huruf="D";
}
document.write("Nilai :"+nilai_huruf+"<BR>");
document.write(ratarata);