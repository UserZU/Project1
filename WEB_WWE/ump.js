function calculate(){
    let masa_kerja;
    let gaji_pokok;
    let bonus;
    let pajak;
    let gaji_bersih;
    const ump = 3000000;

    masa_kerja = parseFloat(document.getElementById("masa_kerja").value);
    gaji_pokok = ump+(0.1*ump*masa_kerja);
    document.getElementById("gaji_pokok").value=gaji_pokok;
    
    bonus = gaji_pokok*0.005;
    document.getElementById("bonus").value=bonus;

    let gaji_total = (gaji_pokok+bonus)*12;
    let persen_pajak;
    if (gaji_total>=5000000000){
        persen_pajak=0.3;
    } 
    else if (gaji_total>=250000000){
        persen_pajak=0.25;
    }
    else if(gaji_total>=50000000){
        persen_pajak=0.15;
    }
    else{
        persen_pajak=0;
    }
    pajak = (gaji_total*persen_pajak)/12;
    document.getElementById("pajak").value=pajak;
    
    gaji_bersih = gaji_pokok+bonus-pajak;
    document.getElementById("gaji_bersih").value=gaji_bersih;
}