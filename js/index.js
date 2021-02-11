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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Updated the nav bar
let node = document.createElement('a');
let anotherNode = document.createElement('a');
let nav = document.querySelectorAll('a');
let navNewItems = document.querySelector('nav');
node.textContent = "Cotton Candy";
anotherNode.textContent = "Jelly Beans";
navNewItems.appendChild(node);
navNewItems.prepend(anotherNode);

//Updated nav text color to green
let textColor = document.querySelectorAll('a');
for(let i = 0;i < textColor.length;i++)
{
  textColor.item(i).style.color = 'green';
}


nav.item(0).textContent = siteContent['nav']['nav-item-1'];
nav.item(1).textContent = siteContent['nav']['nav-item-2'];
nav.item(2).textContent = siteContent['nav']['nav-item-3'];
nav.item(3).textContent = siteContent['nav']['nav-item-4'];
nav.item(4).textContent = siteContent['nav']['nav-item-5'];
nav.item(5).textContent = siteContent['nav']['nav-item-6'];



// upated the h1
let titleOfPage = document.querySelector("h1");
titleOfPage.innerHTML = "DOM<br/>" + "IS<br/>" + "AWESOME";

// Updated button
let getStartedButton = document.querySelector("button");
getStartedButton.textContent = siteContent['cta']['button'];


// Updated the image for header
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src',siteContent["cta"]["img-src"]);

// Updated the feature title and about title
let titles = document.querySelectorAll('h4');
titles.item(0).textContent = siteContent['main-content']['features-h4'];
titles.item(1).textContent = siteContent['main-content']['about-h4'];

// Updated the feature content and about content
let content = document.querySelectorAll('p');
content.item(0).textContent = siteContent['main-content']['features-content'];
content.item(1).textContent = siteContent['main-content']['about-content'];

// Updated image in main 
let mainImage = document.getElementById("middle-img");
mainImage.setAttribute('src',siteContent['main-content']['middle-img-src']);

// Updated the services title, product title, vision title.
titles.item(2).textContent = siteContent['main-content']['services-h4'];
titles.item(3).textContent = siteContent['main-content']['product-h4'];
titles.item(4).textContent = siteContent['main-content']['vision-h4'];

// Updated the services content, product content, and vision content.
content.item(2).textContent = siteContent['main-content']['services-content'];
content.item(3).textContent = siteContent['main-content']['product-content'];
content.item(4).textContent = siteContent['main-content']['vision-content'];


// Updated the contact title -- only way I could think of so it would appear under the border line.
let contactTitle = document.querySelectorAll('h4');
contactTitle.item(5).textContent = siteContent['contact']['contact-h4'];


// Updated contact info
let contactInfo = document.querySelectorAll('p');
contactInfo.item(5).innerHTML = siteContent['contact']['address'] + "<br/>";
contactInfo.item(6).textContent = siteContent['contact']['phone'];
contactInfo.item(7).textContent = siteContent['contact']['email'];

// Updated footer
content.item(8).textContent = siteContent['footer']['copyright'];
 




