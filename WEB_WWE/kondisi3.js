let JB=parseInt(prompt("jumlah beli: "));
if (JB>=1000000){
    diskon="10%";
}
else if (JB>=500000){
    diskon="5%";
}
else{
    diskon="0%"
}
document.write("Diskon: "+diskon+"<BR>")
document.write(JB);
