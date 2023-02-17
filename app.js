function krediHesap() {
    let cekilecekTutar, istenilenVade;
    let toplamTutar, aylıkTutar;
    let liste = document.querySelector("#liste");

    cekilecekTutar = document.querySelector("#txt").value;
    istenilenVade = liste.options[liste.selectedIndex].value;

    if (istenilenVade == 12) {
        toplamTutar = cekilecekTutar * 1.1;
    } else if (istenilenVade == 24) {
        toplamTutar = cekilecekTutar * 1.2;
    } else if (istenilenVade == 36) {
        toplamTutar = cekilecekTutar * 1.3;
    } else if (istenilenVade == 48) {
        toplamTutar = cekilecekTutar * 1.4;
    }


    aylıkTutar = toplamTutar / istenilenVade;

    document.querySelector("#sonuc1").innerHTML = toplamTutar
    document.querySelector("#sonuc2").innerHTML = aylıkTutar

    if (cekilecekTutar == "" || cekilecekTutar == null || cekilecekTutar == number) {
        alert("Lütfen bir sayı girin.");
    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}