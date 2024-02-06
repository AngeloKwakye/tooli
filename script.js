'use strict';

/* 
* adding event on elements
*/
var options = [
    "Animal",
    "Animals",
    "At Work",
    "Aviation",
    "Bar",
    "Bar Jokes",
    "Blind Jokes",
    "Blond",
    "Blonde",
    "Blonde Jokes",
    "Business",
    "Children",
    "College",
    "Computers",
    "Crazy Jokes",
    "Deep Thoughts",
    "English",
    "Ethnic Jokes",
    "Family, Parents",
    "Farmers",
    "Food Jokes",
    "Gross",
    "Heaven and Hell",
    "Holidays",
    "Idiots",
    "Insults",
    "Knock-Knock",
    "Lawyer",
    "Lawyers",
    "Light Bulbs",
    "Lightbulb",
    "Love & Romance",
    "Marriage",
    "Medical",
    "Men",
    "Men / Women",
    "Military",
    "Miscellaneous",
    "Money",
    "Music",
    "News / Politics",
    "Office Jokes",
    "Old Age",
    "One Liners",
    "Other / Misc",
    "Police Jokes",
    "Political",
    "Puns",
    "Redneck",
    "Religious",
    "School",
    "Science",
    "Sex",
    "Sports",
    "State Jokes",
    "Tech",
    "Women",
    "Yo Mama",
    "Yo Momma"
  ];

/* Get jokes categories */
const getJokes = async () => {
    const url = 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/categories';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ca7a935c0msh1c37bd10cb6fed8p194ebdjsn28dbf24b34c4',
            'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);  
        // populateDropdown(result);                          
    } catch (error) {
        console.error(error);
    }
}

// Call the function
getJokes();


const addEventOnELement = function(elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i< elem.length; i++){
            elem[i].addEventListener(type, callback)
        }
    } else{
        elem.addEventListener(type, callback)
    }
}

/* 
* navbar toggle
 */ 

const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}


addEventOnELement(navToggle, "click", toggleNavbar);


const closeNavbar = function (){
    navbar.classList.remove("active")
    overlay.classList.remove("active")
}

addEventOnELement(navbarLinks, "click", closeNavbar);


/* *
    header & backtoTop btn show when scroll is down to 100px
*/

// const header = document.querySelector("[data-header]")
// const backToTop = document.querySelector("[data-back-to-top]")

// const headerActive = function() {
//     if (window.scrollY > 80) {
//         header.classList.add("active")
//         backToTop.classList.add("active")
//     }else{
//         header.classList.remove("active")
//         backToTop.classList.remove("active")
//     };
// };

// addEventOnELement(window, "scroll", headerActive);



/* --------------------- dropdown menu  */

// Get the dropdown element
let dropdownsContainer = document.getElementById('dropdown_options');

    /* get jokes by category */
let populateDropdown = (option)=> {


    let optionElement = document.createElement("a");
    optionElement.href = "#";
    optionElement.textContent = option;
    // Add click event listener to log the selected option
    optionElement.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("Selected option:", option);
    });
    return optionElement;

}


    // Loop through the options array and create <a> tags for each option
    options.forEach(function(option) {
    var optionElement = populateDropdown(option);
    dropdownsContainer.appendChild(optionElement);
  });




/* --------- get Joke of the day --------- */
const jokeOfTheDay = async () =>{
    
const url = 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/joke-of-the-day';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ca7a935c0msh1c37bd10cb6fed8p194ebdjsn28dbf24b34c4',
		'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    let jokeOfDay = document.getElementById('joke_of-day');

    jokeOfDay.innerHTML = result;

} catch (error) {
	console.error(error);
};

};

jokeOfTheDay();
