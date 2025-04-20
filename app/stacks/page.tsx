const Stacks = () => {
  const WORK_EXPERIENCE = [
    {
      title: "STACKS",
      history: [
        {
          header: "Programming Languages",
          language: "JavaScript, TypeScript, Python, GoLang, Socket, C++, Java, Shell, Bash, SQL",
        },
        {
          header: "Frameworks",
          language: "React, Next JS, Bootstrap, Django, Spring Boot, TensorFlow, PyTorch, Keras, JAX, Steamlit",
        },
        {
          header: "Databases",
          language: "MySQL, PostgreSQL, Neo4j, MongoDB, Redis",
        },
        {
          header: "Libraries",
          language: "NumPy, Pandas, OpenCV, kafka, TensorRT, Spacy, Hugging face, OpenVINO, SWR, Zod, Tanstack, Spring Data JPA, Spring Security, Swagger-ui, Spring Cloud",
        },
      ],
    },
    {
      title: "MORE STACKS",
      history: [
        {
          header: "APIS",
          language: "REST Api, GraphQL, Websocket",
        },
        {
          header: "Devops",
          language: "Git, AWS, Docker, Kubernetes, Linux",
        },
        {
          header: "Tools",
          language: "Jupyter Notebook, Google Colab, Amazon SageMaker, Azure Machine Learning, Cursor, Render, Vercel, Github",
        },
        {
          header: "Soft Skills",
          language: "Communication, Collaboration, Leadership, Problem-solving, Adaptability, Time management",
        },
      ],
    },
  ];

  return (
    <div className="p-6 md:p-12" data-aos="fade-up">
      <h3 className="text-3xl md:text-6xl font-bold mb-4">Tech Stack</h3>
      <div className="flex justify-center lg:items-start flex-col lg:flex-row items-start gap-s3">
        {WORK_EXPERIENCE.map((work, index: number) => (
          <div
            key={index}
            className={`shadow rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] p-6 w-full mx-5 lg:w-1/2 shadow`}
          >
            <p className="text-lg underline font-semibold mb-4">{work.title}</p>
            {work.history.map((history, index) => (
              <div key={`history-${index}`}>
                <p className="text-lg my-2">{history.header}</p>
                <p className="pl-5 mt-2 mb-10">{history.language}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
