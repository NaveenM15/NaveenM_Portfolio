AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Java Developer Intern",
    cardImage: "/assets/images/experience-page/isve.png",
    place: "ISVE, RANCHI",
    time: "(JULY, 2024 - present)",
    desp: "<li>Developed and implemented Java applications focusing on backend development.</li> <li>Gained proficiency in Advanced Java concepts such as AWT graphics for user interface design.</li>  </li><li>During my internship at ISVE, Ranchi, I developed a dynamic calculator application using Java.The application focused on creating a user-friendly interface using AWT graphics.</li> ",
  },
  {
    title: "Project Manager and Embedded Systems Developer",
    cardImage: "/assets/images/experience-page/niot.jpeg",
    place: "NIOT, Chennai",
    time: "(Mar - June, 2024)",
    desp: "<li>Project Manager for the Kaywing Boat project, overseeing project planning, execution, and coordination.</li> <li>GPS Location Coordinator: Developed and implemented embedded systems solutions for precise GPS location tracking on kaywing boats.</li> <li>Managed and maintained computer systems as part of the Computer Cell, ensuring smooth operation and support for ongoing projects.</li>",
  },
  {
    title: " Web Development Intern",
    cardImage: "/assets/images/experience-page/coincent.jpeg",
    place: "COINCENT",
    time: "(May - Jan, 2023)",
    desp: " <li>Developed and maintained multiple websites using HTML, CSS, and JavaScript.</li> <li>Achieved a 25% increase in website traffic through effective website development strategies.</li> <li>Collaborated with the design team to create responsive and visually appealing web pages.</li> <li>Contributed to a 15% increase in user engagement by enhancing website usability and design.</li>",
  },
  {
    title: " Blockchain Student Intern",
    cardImage: "/assets/images/experience-page/ibc.jpeg",
    place: "IBC MEDIA",
    time: "(April - May, 2023)",
    desp: " <li>Developed a lottery game application using Solidity smart contracts on Ethereum blockchain.</li> <li>Created a crowdfunding platform leveraging blockchain technology for secure and transparent transactions.</li> <li>Designed and implemented a voting application to ensure integrity and transparency in voting processes using Solidity.</li> <li>Gained practical experience in blockchain development and smart contract deployment.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Newton School Coding Contest 2023",
    cardImage: "/assets/images/experience-page/newtonschool.png",
    description:
      "Achieved the 1741st place in the Newton School coding contest, demonstrating my coding skills and dedication to problem-solving challenges.",
  },
  {
    title: "Battle of Brains Coding Contest 2024",
    cardImage: "/assets/images/experience-page/dallas.png",
    description:
      "Participated in the Battle of Brains Coding Contest 2024 organized by the Computer Science Department, University of Texas at Dallas.",
  },
  {
    title: "Nation Building 2024",
    cardImage: "/assets/images/experience-page/nationbuild.png",
    description:
      "Participated in and was selected at the district level for 'Nation Building 2024', India's largest case study competition.",
  },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Cyber Hackathon 3.0",
    subtitle: "Cyber Crime Simulation Software",
    image: "/assets/images/experience-page/cyber.jpg",
    desp: "Developed a simulation software aimed at crime prevention, responsible for guiding hundreds of global participants and leading our team—one of 10 finalists out of 260 teams—in a prestigious competition.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "HackBell CyberCratz 2.0",
    subtitle: "One-day Product Development",
    image: "/assets/images/experience-page/kcg.jpeg",
    desp: "HackBell CyberCratz 2.0 is a 36-hour hackathon organized to empower students to create projects. Our team developed a web application for the automation of agriculture.",
    href: "https://ulhacks.com/",
  },
  {
    title: "TechChallengeThon",
    subtitle: "Software Product Development",
    image: "/assets/images/experience-page/techathon.jpg",
    desp: "In the Tech Challenge-a-thon, a one-day hackathon, we developed an AI application for scam prevention and digital evidence management.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Decode Quest",
    subtitle: "Judge",
    image: "/assets/images/experience-page/decode1.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "DSAI Hackathon",
    subtitle: "Judge",
    image: "/assets/images/experience-page/dsai2.jpeg",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Tata Imagination Challenge",
    subtitle: "Judge",
    image:"/assets/images/experience-page/tata3.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "Silicon Maze",
    subtitle: "Judge",
    image: "/assets/images/experience-page/silicon4.jpeg",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "Code Goda 2023",
    subtitle: "Mentor",
    image:"/assets/images/experience-page/codegoda5.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
