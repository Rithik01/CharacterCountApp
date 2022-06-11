const charVal = document.getElementById('textarea');
let totalCount = document.getElementById('total-counter');
let remainingCount = document.getElementById('remaining-counter');

let char = 0;

const updateCounter = () => {
  userChar = charVal.value.length;
  
  totalCount.innerHTML = userChar; 

  remainingCount.innerHTML = 150 - userChar;
}



charVal.addEventListener('keyup', () => updateCounter());


// Copy the text code //

const copyText = () => {
    /// This select attribute is used to select the text automatically //
    charVal.select();
    charVal.setSelectionRange(0, 9999); // This setSelection range is basically for the mobile version and here we selected the start range 0 and we have specified a long number here like 9999 //
    //////// This code below is very important and bcoz of this navigator.clipboard.writeText we will get a message of copy to clipboard /////////
    navigator.clipboard.writeText(charVal.value); 
} 