AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Blockchain Basics",
    cardImage: "/assets/images/education-page/coursera.png",
    moocLink: "https://drive.google.com/file/d/16RYWBtFw_ffv_b_FmQZQkFHUc7bLujx9/view?usp=drive_link",
  },
  {
    title: "Computer Networking",
    cardImage: "/assets/images/education-page/coursera.png",
    moocLink: "https://drive.google.com/file/d/16uXj3comoLz_Gv2_n15qkkuFpxG6cPhw/view?usp=drive_link",
  },
  {
    title: "Technical IT Support Networking",
    cardImage: "/assets/images/education-page/coursera.png",
    moocLink: "https://drive.google.com/file/d/16QUh19DCyt0XWeZQjRe4cxnebzUo9aVO/view?usp=drive_link",
  },
  {
    title: "Exploring Blockchain",
    cardImage: "/assets/images/education-page/ibm.png",
    moocLink: "https://drive.google.com/file/d/14tspbR277Sz9fa4LhG9B0V_uqTjnjIZ4/view?usp=drive_link",
  },
  {
    title: "Programming in Java",
    cardImage: "/assets/images/education-page/nptel.jpeg",
    moocLink: "https://drive.google.com/file/d/14Xh7W2SAxilZzRfp2kJpo9oSjJnyzxvS/view?usp=drive_link",
  },
  {
    title: "Blockchain and It's Application",
    cardImage: "/assets/images/education-page/nptel.jpeg",
    moocLink: "https://drive.google.com/file/d/17dR8MfUxLjt1JFiNk6KXUFtESAHRIWwD/view?usp=drive_link",
  },
  {
    title: "Big Data Computing",
    cardImage: "/assets/images/education-page/nptel.jpeg",
    moocLink: "https://drive.google.com/file/d/16Ge9MydPaCN1OTnObl2agRqbiQZvzZy0/view?usp=drive_link",
  },
  {
    title: "Javascript and ReactJs",
    cardImage: "/assets/images/education-page/ibm.png",
    moocLink: "https://drive.google.com/file/d/17T_XaaWWfY8vVdgvpT7cZe05PcOGej3K/view?usp=drive_link",
  },
  {
    title: "Programming in C & C++",
    cardImage: "/assets/images/education-page/spokentutorial.jpeg",
    moocLink: "https://drive.google.com/file/d/17LCP5-GMe6wCL6oROFSmh9B7snUoabr8/view?usp=drive_link",
  },
  {
    title: "Programming in C",
    cardImage: "/assets/images/education-page/spokentutorial.jpeg",
    moocLink: "https://drive.google.com/file/d/17MBSjHy6PKZPY90n01UcYIT0JeQJp1ps/view?usp=drive_link",
  },
  {
    title: "Web Development With HTML",
    cardImage: "/assets/images/education-page/spokentutorial.jpeg",
    moocLink: "https://drive.google.com/file/d/172d7iaIMqMvug1RWSyI_BAh6QJt7d4cN/view?usp=drive_link",
  },
   
  {
    title: "Web Development With HTML and CSS",
    cardImage: "/assets/images/education-page/infosys.png",
    moocLink:"https://drive.google.com/file/d/17JGC32dIgoQo5fLeC8K3zxhPGR2EF6gA/view?usp=drive_link",
  },
  {
    title: "Blockchain Basics",
    cardImage: "/assets/images/education-page/linkedin.png",
    moocLink:"https://drive.google.com/file/d/14sKUPDOzMKskzTw5AVWutUceUfr4Q-Qr/view?usp=drive_link",
  },
  {
    title: "Smart Contract and Security",
    cardImage: "/assets/images/education-page/linkedin.png",
    moocLink:"https://drive.google.com/file/d/16qirmE_FYBDJ5fU-_BP25CrqNBdueFwS/view?usp=drive_link",
  },
  {
    title: "Web 3.0",
    cardImage: "/assets/images/education-page/linkedin.png",
    moocLink:"https://drive.google.com/file/d/14e4nQyTFfDZKoqUjVU1okkB2ONCWw--D/view?usp=drive_link",
  },
  {
    title: "Introduction to NFT",
    cardImage: "/assets/images/education-page/linkedin.png",
    moocLink:"https://drive.google.com/file/d/14e2yu6qQjwDjg2tRB8cFbijUM0KkU42-/view?usp=drive_link",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
