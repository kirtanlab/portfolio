const Experience = () => {
  const WORK_EXPERIENCE = [
    {
      company: "Nahar Om, The Family Office | Tamil Nadu, India",
      companyLink: "https://www.nahar.om/",
      position: "Software Developer",
      period: "May 2024 - October 2024",
      // description: [
      //   "My role encompassed full-stack development with expertise in financial systems and trading mechanisms.",
      //   "Conducted detailed requirement gathering using agile methodology, implemented React with Redux state management, developed RESTful APIs with Django Rest Framework, designed PostgreSQL database architecture and maintaining CI/CD Pipeline with Docker containers.",
      //   "Additional responsibilities included creating minimalist UI integrations and maintaining weekly client communication to ensure alignment with business objectives."
      // ],
      // technologies: "React, Redux, Django, REST API, PostgreSQL, Docker, Boost Money, Signzy"
    },
    {
      company: "Tech Elecon | Anand, India",
      companyLink: "https://portfolio-uuoj.onrender.com/www.techelecon.com",
      position: "Software Engineering Intern",
      period: "January 2024 - April 2024",
      // description: [
      //   "I led critical projects with unwavering commitment, navigating tight deadlines and collaborating seamlessly with colleagues.",
      //   "My role extended beyond coding, as I also provided guidance to 50+ peers on parallel projects, ensuring a cohesive and successful internship experience.",
      //   "Technically, I implemented full-stack solutions using Spring Boot backend and React frontend with Redux state management, all connected to PostgreSQL databases.",
      //   "I demonstrated proficiency in translating SRS documentation into working features and integrated adaptable UI themes, including minimalist and dark mode variants, enhancing user experience across multiple platforms."
      // ],
      // technologies: "Spring Boot, REST API, PostgreSQL, JWT, React, Reduc"
    },
    {
      company: "Windsor Analytics | Windsor, ON, Canada",
      companyLink: "https://windsoranalytics.ca/",
      position: "Windsor Analytics",
      period: "January 2025 - April 2025",
    },
  ];

  return (
    <main className="p-4 md:p-8 h-[85vh] overflow-scroll mx-auto max-w-[1240px]">
      <h3 className="text-3xl md:text-6xl font-bold mb-8">Work Experience</h3>
      <div className="flex flex-col gap-8">
        {WORK_EXPERIENCE.map((experience, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 transition-all hover:shadow-md dark:hover:shadow-gray-800"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold hover:underline transition-all"
              >
                {experience.company}
              </a>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {experience.period}
              </p>
            </div>
            <p className="text-lg font-medium mb-2">{experience.position}</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              {experience?.description &&
                experience.description.map((point, i) => (
                  <li key={i} className="text-sm md:text-base">
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
