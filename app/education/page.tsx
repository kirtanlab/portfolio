const Education = () => {
    const EDUCATION_INFO = [
      {
        institution: "University of Windsor",
        institutionLink: "https://www.uwindsor.ca/",
        location: "Windsor, Canada",
        degree: "Master's in Applied Computing",
        period: "Sept 2024 - Dec 2025",
        description: [
          "Specializing in advanced computing concepts and applications",
          "Focus on software development, algorithms, and computing theories",
          "Research in cutting-edge computing technologies and methodologies"
        ]
      },
      {
        institution: "G H Patel College of Engineering and Technology",
        institutionLink: "https://www.gcet.ac.in/",
        location: "Anand, India",
        degree: "Bachelor's in Computer Engineering",
        period: "Sept 2020 - May 2024",
        description: [
          "Comprehensive foundation in computer science and engineering principles",
          "Developed skills in programming, data structures, and software design",
          "Participated in technical events and engineering competitions"
        ]
      }
    ];
  
    return (
      <main className="p-4 md:p-8 h-[85vh] overflow-scroll mx-auto max-w-[1240px]">
        <h3 className="text-3xl md:text-6xl font-bold mb-8">Education</h3>
        <div className="flex flex-col gap-8">
          {EDUCATION_INFO.map((education, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 transition-all hover:shadow-md dark:hover:shadow-gray-800"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <a 
                    href={education.institutionLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl md:text-2xl font-semibold hover:underline transition-all"
                  >
                    {education.institution}
                  </a>
                  <p className="text-sm md:text-base">{education.location}</p>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{education.period}</p>
              </div>
              <p className="text-lg font-medium mb-2">
                <span className="font-bold">Degree:</span> {education.degree}
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {education.description.map((point, i) => (
                  <li key={i} className="text-sm md:text-base">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default Education;