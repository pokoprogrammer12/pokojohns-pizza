//button-menu//
const redirectButton = document.getElementById("menu-btn");

redirectButton.addEventListener('click', function() {
    window.location.href = "";
});

//paragraph-hover//
var paragraph = document.getElementById('output');

    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');

    p1.addEventListener('mouseover', function () {
      paragraph.innerText = ' Pizze z najlepszej jakości składników - najwyższej klasy pomidory, ciągnący się ser i różne dodatki..';
    });

    p2.addEventListener('mouseover', function () {
      paragraph.innerText = 'Makarony - aromatyczne sosy, dodatki i przyprawy tworzą cuda w postaci różnorakich dań.';
    });

    p3.addEventListener('mouseover', function () {
      paragraph.innerText = 'Pieczywo czosnkowe, pieczywo z serem a może warzywa lub sosy? Wszystkie te dobroci posiadamy w swojej ofercie.';
    });

    p4.addEventListener('mouseover', function () {
        paragraph.innerText = 'Cola czy Pepsi? W ofercie posiadamy szerokiie menu napoi gazowanych, niegazowanych; \n a może wolisz alkochole? To też mamy.';
      });