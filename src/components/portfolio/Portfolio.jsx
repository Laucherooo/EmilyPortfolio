import "./portfolio.css";

import IMG1 from "../../assets/Emoji Project.png";
import IMG2 from "../../assets/CyberBullying Project.png";
import IMG3 from "../../assets/UserExperience Project.png";
import IMG4 from "../../assets/UserExperience Project.png";
import IMG5 from "../../assets/Calculator Project.png";
import IMG6 from "../../assets/Internet History Project.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Real Time Face Recognition Project",
      img: IMG1,
      description:
        "An application implemented real time facial expression recognition, changed the light and played music adapting the environment.",
      technologies: "Python | Python dlib | TensorFlow | OpenCV | pywin32 | Arduino"
    },
    {
      id: 2,
      title: "Detection of Cyberbullying on Social Media",
      img: IMG2,
      description:
        "A website was built social media like which detected cyberbullying words and warned users",
      technologies: "Python | HTML | Djangle | SQL",
    },
    {
      id: 3,
      title: "External User Experience Analysis Project",
      img: IMG3,
      description: 
        "A website which searched and analyzed whether the comments of the user input is positive or negative on the Internet.",
      technologies: "Python | HTML | Topic Modeling | Latent Dirichlet Allocation (LDA) | Random Forest",
    },
    {
      id: 4,
      title: "Local Connection Card Game",
      img: IMG4,
      description: 
        "A card battle game between a server and a client under local connection.",
      technologies: "Python | TCP | Tkinter",
      github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
    },
    {
      id: 5,
      title: "Calculatior Website Which Accepts Uploaded CVS Files",
      img: IMG5,
      description: 
        "A website which implemented calculations and could work with the uploaded CVS files.",
      technologies: "Python | HTML | Flask | Azure | Docker",
      github: "https://github.com/Laucherooo/project3",
    },
    {
      id: 6,
      title: "Internet History Website",
      img: IMG6,
      description: 
        "A website that introduced the history of the Internet.",
      technologies: "Python | HTML | Flask | Azure | Docker",
      github: "https://github.com/Laucherooo/IS601_project1",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
