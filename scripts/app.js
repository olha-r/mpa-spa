// Declare a variable of type Object
// Object = a collection of properties, each property has a value (any type)
const labels = {
  home: { menuItem: "Home", h1: "Welcome to MPA/CSR demo", h2: "Title 2 of home page" },
  contact: { menuItem: "Contact", h1: "Contact" },
  signIn: { menuItem: "Sign-in", h1: "Sign-in" },
  about: { menuItem: "About", h1: "About", h2: "Title 2 of about page" }
}; // a JSON (JavaScript Object Notation)

const pathName = window.location.pathname;

// temlate literal with expression $(expression)
// replacing an expression by its value is an interpolation
const menu = `
<nav class="navbar navbar-expand-lg bg-light ps-lg-5">
<div class="container-fluid">
  <a class="navbar-brand" href="#">MPA/SPA</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link${pathName == "/index.html" || pathName == "" ? " active" : ""}" href="index.html">${labels.home.menuItem}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link${pathName == "/contact.html" ? " active" : ""}" href="contact.html">${labels.contact.menuItem}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link${pathName == "/signin.html" ? " active" : ""}" href="signin.html">${labels.signIn.menuItem}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link${pathName == "/about.html" ? " active" : ""}" href="about.html">${labels.about.menuItem}</a>
      </li>
    </ul>
  </div>
</div>
</nav>      
`;

const header = document.getElementById("header");
header.innerHTML = menu;

const homeContent = `
      <h1>${labels.home.h1}</h1>
      <p>This is a home page</p>
      <h2>${labels.home.h2}</h2>
`
const signinContent = `
      <h1>${labels.signIn.h1}</h1>
      <p>This is a sign-in page</p>
`
const contactContent = `
      <h1>${labels.contact.h1}</h1>
      <p>This is a contact page</p>
`
const aboutContent = `
      <h1>${labels.about.h1}</h1>
      <p>This is a about page</p>
      <h2>${labels.about.h2}</h2>
`

const main = document.getElementById("main");

if (pathName == "/index.html" || pathName == "/") {
  main.innerHTML = homeContent;
} else if (pathName == "/signin.html") {
  main.innerHTML = signinContent;
} else if (pathName == "/contact.html") {
  main.innerHTML = contactContent;
} else if (pathName == "/about.html") {
  main.innerHTML = aboutContent;
}


const copyright = "<p>Copyrigth Simplon 2022</p>";

const footer = document.getElementById("footer");
footer.innerHTML = copyright;