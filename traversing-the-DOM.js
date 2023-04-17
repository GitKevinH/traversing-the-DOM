// Using JavaScript, how would you do the following:

//     Get the header element
//     Get all the section elements
//     Get the section element with class="current"
//     Get the section that comes after the current section
//     Get the h2 node from the section before the 'current' section
//     Get the div that contains the section that has an h2 with a class of 'highlight'
//     Get all the sections that contain an H2 (using a single statement);

//     Get the header element
const eleHeader = document.getElementsByTagName("header");
console.log(eleHeader);

//     Get all the section elements
const eleSection = document.getElementsByTagName('section');
console.log(eleSection);

//     Get the section element with class="current"
const eleCurrentSection = document.querySelector('section.current');
console.log(eleCurrentSection);

//     Get the section that comes after the current section
const eleAfterCurrentSection = eleCurrentSection.nextElementSibling;
console.log(eleAfterCurrentSection);

//     Get the h2 node from the section before the 'current' section
const h2AfterCurrentSection = eleCurrentSection.previousElementSibling.firstElementChild;
console.log(h2AfterCurrentSection);

//     Get the div that contains the section that has an h2 with a class of 'highlight'
const divWithHighlight = document.querySelector('h2.highlight').parentElement.parentElement;
console.log(divWithHighlight);

//     Get all the sections that contain an H2 (using a single statement);
const allSectionsWithH2 = document.querySelectorAll('section:has(h2)');
console.log(allSectionsWithH2);

