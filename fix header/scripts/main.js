// get main section and to position
const mainSection = document.querySelector(".main-section");
const mainSectionDim = mainSection.getBoundingClientRect();

//  calc initial height -> to fill window minus elments above
let height = (window.innerHeight - mainSectionDim.top);

// set element height
mainSection.style.height = height+'px';


// dynamic height to show varibale height results
const input = document.querySelector("input");

input.value = height;

input.addEventListener('blur',()=>{

    let setValue = height;

    // check if set height isnt smaller than window
    if(input.value > height){
        setValue = input.value;
    }

    mainSection.style.height = setValue+'px';

});