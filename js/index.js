const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Images
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// CTA code image
const actionImage = document.querySelector('#cta-img');
actionImage.src = "../img/header-img.png";
// Feature image
const featureImage = document.querySelector('#middle-img');
featureImage.src = "../img/mid-page-accent.jpg";

// nav
const links = document.querySelectorAll('a');
links[0].textContent = 'Services';
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Features';
links[4].textContent = 'About';
links[5].textContent = 'Contact';

// CTA text
const actionText = document.querySelector('h1');
actionText.textContent = 'dom is awesome';
const buttonText = document.querySelector('button');
buttonText.textContent = 'Get Started';

// features
const featureHeadings = document.querySelectorAll('h4');
featureHeadings[0].textContent = 'Features';
featureHeadings[1].textContent = 'About';
featureHeadings[2].textContent = 'Services';
featureHeadings[3].textContent = 'Product';
featureHeadings[4].textContent = 'Vision';
featureHeadings[5].textContent = 'Contact';

// paragraphs
const featureText = document.querySelectorAll('p');
featureText[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
featureText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
featureText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
featureText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
featureText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
featureText[5].textContent = '123 Way 456 Street Somewhere, USA';
featureText[6].textContent = '1 (888) 888-8888';
featureText[7].textContent = 'sales@greatidea.io';
featureText[8].textContent = 'Copyright Great Idea! 2018';

// prepend & append
const firstLink = document.createElement('a');
firstLink.textContent = "Things!";
const parentElement = document.querySelector("nav");
parentElement.prepend(firstLink);

const lastLink = document.createElement('a');
lastLink.textContent = 'Stuff';
parentElement.appendChild(lastLink);


//colors
const navLinkColor = document.querySelectorAll('a');
navLinkColor.forEach(aColor => aColor.style.color = 'green');