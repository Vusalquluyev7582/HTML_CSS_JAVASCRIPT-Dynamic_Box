//* Seçimlər
let genişlik = document.getElementById("genişlik");
let yüksəklik = document.getElementById("yüksəklik");
let arxa_fon_rəngi = document.getElementById("arxa_fon_rəngi");
let qalınlığ = document.getElementById("qalınlığ");
let çərçivə_tip = document.getElementById("çərçivə_tip");
let çərçivə_rəng = document.getElementById("çərçivə_rəng");
let kənar_boşluğ = document.getElementById("kənar_boşluğ");
let iç_boşluğ = document.getElementById("iç_boşluğ");
let rotate = document.getElementById("rotate");
let yarat = document.getElementById("yarat");

let sağ = document.getElementsByClassName("sağ")[0];


//* Klik edildikdə işləyəcək Funksiyanı yaratmağ
yarat.addEventListener("click", div_yarat)

function div_yarat() {
    // sağ.style.width = genişlik.value + "px";
    // sağ.style.height = yüksəklik.value + "px";
    // sağ.style.backgroundColor = arxa_fon_rəngi.value;
    // sağ.style.borderWidth = qalınlığ.value;
    // sağ.style.borderStyle = çərçivə_tip.value;
    // sağ.style.borderColor = çərçivə_rəng.value;
    // sağ.style.margin = kənar_boşluğ.value + "px";
    // sağ.style.padding = iç_boşluğ.value + "px";
    // sağ.style.transform = "rotate(" + rotate.value + "deg)";




    //* Template Literals 
    sağ.style.cssText =
        `
    width:${genişlik.value}px;
    height:${yüksəklik.value}px;
    background-color:${arxa_fon_rəngi.value};
    border-width:${qalınlığ.value};
    border-style:${çərçivə_tip.value};
    border-color:${çərçivə_rəng.value};
    margin:${kənar_boşluğ.value}px;
    padding:${iç_boşluğ.value}px;
    transform:rotate(${rotate.value}deg);


    line-height:${yüksəklik.value}px;

    `
}