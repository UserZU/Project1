function calculate(){
    let kamar=(document.getElementById("kamar").value);
    let biayakamar;
    if (kamar=="VIP"){
        biayakamar=750000;
    } 
    else if (kamar=="Eksekutif"){
        biayakamar=500000;
    }
    else if(kamar=="Standar"){
        biayakamar=250000;
    }
    else{
        
    }
    
    let lamainap=parseFloat(document.getElementById("lamainap").value);
    let biayasewa=biayakamar*lamainap;
    document.getElementById("biayasewa").value=biayasewa;

    const biayamakan=100000;
    let biayalayanan=biayamakan*lamainap;
    document.getElementById("layanan").value=biayalayanan;

    let diskon;
    if (lamainap>=10){
        diskon=0.15*biayakamar;
    }
    else if (lamainap>=5){
        diskon=0.10*biayakamar;
    }
    else {
        diskon=0;
    }
    document.getElementById("diskon").value=diskon;

    let total=biayasewa+biayalayanan-diskon;
    document.getElementById("total").value=total;
}