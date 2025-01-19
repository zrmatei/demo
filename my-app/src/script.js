document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    const checkmark = document.querySelector(".checkmark");
    const hiddenContent = document.querySelector(".hidden-content");
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const tipBoxes = document.querySelectorAll(".tip-box");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.1 }
    );

    tipBoxes.forEach(box => observer.observe(box));
  
    let currentIndex = 0;

    const slideWidth = slides[0].getBoundingClientRect().width;
  
    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });
  
    const moveToSlide = (currentSlide, targetSlide) => {
      track.style.transform = `translateX(-${targetSlide.style.left})`;
    };
  
    const updateButtons = () => {
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
    };
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        moveToSlide(slides[currentIndex - 1], slides[currentIndex]);
        updateButtons();
      }
    });
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(slides[currentIndex + 1], slides[currentIndex]);
        updateButtons();
      }
    });
  
    updateButtons();


    setTimeout(() => {
      loader.style.opacity = "0"; 
      setTimeout(() => {
        loader.style.display = "none"; 
        checkmark.style.display = "block"; 
        checkmark.style.opacity = "1";
  
        setTimeout(() => {
          document.querySelector(".loader-container").style.display = "none";
          hiddenContent.style.display = "block";
        }, 1500);
      }, 500);
    }, 1500); 
  });

  document.addEventListener("DOMContentLoaded", () => {
    const jobContainer = document.querySelector(".job-container");
    const forumContainer = document.querySelector("#forum .discussion-container");
    const commentInput = document.querySelector("#forum textarea");
    const commentButton = document.querySelector("#forum button");
    const commentsSection = document.querySelector("#forum .comments");
    const workshopContainer = document.querySelector("#workshops .workshop-container");

    // Example job data (could be replaced by fetching from an API)
    const jobs = [
        {
            title: "Product Manager",
            company: "Microsoft",
            location: "Prahova",
            link: "https://ro.linkedin.com/jobs/view/product-manager-at-microsoft-4102312727?trk=public_jobs_topcard-title"
        },
        {
            title: "Glovo",
            company: "Advertising Specialist",
            location: "București",
            link: "https://ro.linkedin.com/jobs/view/advertising-specialist-bucharest-at-glovo-4040483938?trk=public_jobs_topcard-title"
        },
        {
            title: "Program & Catalogue Manager",
            company: "Mega Image",
            location: "București",
            link: "https://ro.linkedin.com/jobs/view/program-catalogue-manager-at-mega-image-ahold-delhaize-group-4119704335"
        }
    ];

    const workshops = [
        {
            title: "Introducere în Machine Learning",
            date: "2025-01-30",
            link: "https://www.youtube.com/watch?v=YX_-Y8fz664&ab_channel=PavelNicolaev"
        },
        {
            title: "Învață să fii un motostivuitorist bun",
            date: "2025-02-15",
            link: "https://www.youtube.com/watch?v=zAzSwgcoAzI&ab_channel=ProfesionalNewConsult"
        },
        {
            title: "Management și Marketing Online",
            date: "2025-03-10",
            link: "https://www.youtube.com/watch?v=65MQnEMf-uI&ab_channel=LeadersTalk"
        }
    ];

    // Function to render job cards dynamically
    const renderJobs = (jobData) => {
        jobData.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");

            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p>Companie: ${job.company}</p>
                <p>Locație: ${job.location}</p>
                <a href="${job.link}" target="_blank">Vezi pe LinkedIn</a>
            `;

            jobContainer.appendChild(jobCard);
        });
    };

    // Function to render workshop cards dynamically
    const renderWorkshops = (workshopData) => {
        workshopData.forEach(workshop => {
            const workshopCard = document.createElement("div");
            workshopCard.classList.add("workshop-card");

            workshopCard.innerHTML = `
                <h3>${workshop.title}</h3>
                <p>Data: ${workshop.date}</p>
                <a href="${workshop.link}" target="_blank">Participă</a>
            `;

            workshopContainer.appendChild(workshopCard);
        });
    };

    // Render the jobs
    renderJobs(jobs);

    // Render the workshops
    renderWorkshops(workshops);

    // Forum functionality
    const addComment = (text) => {
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.textContent = text;
        commentsSection.appendChild(comment);
    };

    commentButton.addEventListener("click", () => {
        const text = commentInput.value.trim();
        if (text) {
            addComment(text);
            commentInput.value = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const coursesContainer = document.querySelector("#courses .courses-container");
  const contactContainer = document.querySelector("#contact .contact-container");

  const courses = [
      {
          title: "Facultatea de Informatică",
          image: "https://www.uaic.ro/wp-content/uploads/2020/06/sigla-informatica-520x520.jpg",
          link: "https://programare.ase.ro/BPC/curs_1_2019.pdf"
      },
      {
          title: "Facultatea de Economie",
          image: "https://www.uaic.ro/wp-content/uploads/2020/06/sigla-economie-520x520.jpg",
          link: "https://www.scribd.com/presentation/253019077/Economie-Cursuri-ASE-2015"
      },
      {
          title: "Facultatea de Litere",
          image: "https://www.uaic.ro/wp-content/uploads/2020/06/sigla-litere-520x520.jpg",
          link: "https://www.scribd.com/document/484722672/LEXICOLOGIE-SI-SEMANTICA-docx"
      }
  ];


  const contacts = [
    {
        name: "Ion Popescu",
        email: "ion.popescu@example.com"
    },
    {
        name: "Maria Ionescu",
        email: "maria.ionescu@example.com"
    },
    {
        name: "Andrei Dumitrescu",
        email: "andrei.dumitrescu@example.com"
    }
];

  const renderCourses = (coursesData) => {
      coursesData.forEach(course => {
          const courseCard = document.createElement("div");
          courseCard.classList.add("course-card");

          courseCard.innerHTML = `
              <img src="${course.image}" alt="${course.title}">
              <h3>${course.title}</h3>
              <a href="${course.link}" target="_blank">Accesează cursurile</a>
          `;

          coursesContainer.appendChild(courseCard);
      });
  };
  const renderContacts = (contactsData) => {
    contactsData.forEach(contact => {
        const contactCard = document.createElement("div");
        contactCard.classList.add("contact-card");

        contactCard.innerHTML = `
            <h3>${contact.name}</h3>
            <p>${contact.email}</p>
        `;

        contactContainer.appendChild(contactCard);
    });
};

 
  renderCourses(courses);
  renderContacts(contacts)
});

document.addEventListener("DOMContentLoaded", () => {
  const feedbackContainer = document.querySelector("#feedback .feedback-container");

  const feedbackOptions = [
      {
          type: "like",
          image: "https://icon-library.com/images/like-png-icon/like-png-icon-6.jpg",
          label: "Like",
          sound: "./like.mp3" // Calea către fișierul audio
      },
      {
          type: "dislike",
          image: "https://cdn-icons-png.flaticon.com/512/3670/3670156.png",
          label: "Dislike",
          sound: "./dislike.mp3" // Calea către fișierul audio
      }
  ];

  const handleFeedback = (type, sound) => {
      const audio = new Audio(sound);
      audio.play()
          .then(() => console.log(`${type} sound played successfully.`))
          .catch(error => console.error(`Failed to play ${type} sound:`, error));
  };

  const renderFeedbackButtons = (feedbackData) => {
      feedbackData.forEach(feedback => {
          const feedbackButton = document.createElement("div");
          feedbackButton.classList.add("feedback-button");
          feedbackButton.innerHTML = `
              <img src="${feedback.image}" alt="${feedback.label}">
              <span>${feedback.label}</span>
          `;

          feedbackButton.addEventListener("click", () => handleFeedback(feedback.type, feedback.sound));
          feedbackContainer.appendChild(feedbackButton);
      });
  };

  renderFeedbackButtons(feedbackOptions);
});



