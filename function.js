// Create a link element for the CSS stylesheet
// const linkElement = document.createElement('link');
// linkElement.rel = 'stylesheet';
// linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

// a script tag for adding dist/wow.js in the document
const scriptElement = document.createElement('script');
scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';

// a linkm tag for adding css/lib/animate.css in the document
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'css/libs/animate.css';

// Declare the wow variable globally
let wow;

// Append link and script tag to the document's head
document.head.appendChild(linkElement);
document.head.appendChild(scriptElement);

// add overflow-x hidden to body
document.body.style.overflowX = 'hidden';
document.documentElement.style.scrollBehavior = 'smooth'; // add scroll-behavior: smooth to html tag

// initialize WOW()
scriptElement.onload = () => {

    wow = new WOW(
        {
            // animateClass: 'animated',
            // offset: 100,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
}





