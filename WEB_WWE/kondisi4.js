let program=prompt("Tiket");
switch (program){
    case "VVIP":
        tiket=1000000;
        break;
    case "VIP":
        tiket=750000;
        break;
    case "BISNIS":
        tiket=500000;
        break;
    case "EKONOMI":
        tiket=350000;
        break;
    default:
        break;        
}
document.write("Tiket: "+program+"<br>"+"Harga :"+tiket);


