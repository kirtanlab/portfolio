const Publications = () => {
    const PUBLICATIONS_INFO = [
      {
        title: "Deep Learning Approaches for Crossing Indian Roads",
        projectLink: "https://github.com/kirtanlab/Road-crossing-Assistant",
        supervisor: {
          name: "Dr. Kinjal Joshi",
          link: "https://www.linkedin.com/in/dr-kinjal-joshi-76072264"
        },
        period: "May 2023 - Dec 2023",
        description: [
          "Created an assistive model for visually impaired people to safely cross roads, using Time Distributed LSTM-CNN Hybrid Model and ConvNext architecture.",
          "Conducted extensive research under Dr. Kinjal Joshi, focusing on refining various deep learning models to enhance real-time object detection.",
          "Meticulously fine-tuned models and optimized datasets to achieve an F1-score of 88.8%, surpassing previous results by 2% while also reducing latency.",
          "Demonstrated capability to push the boundaries of computer vision technology, particularly in challenging environments like Indian roads."
        ],
        technologies: "PyTorch • TensorFlow • Computer Vision • LSTM • CNN • ConvNext"
      }
    ];
  
    return (
      <main className="p-4 md:p-8 h-[85vh] overflow-scroll mx-auto max-w-[1240px]">
        <h3 className="text-3xl md:text-6xl font-bold mb-8">Publications & Research</h3>
        <div className="flex flex-col gap-8">
          {PUBLICATIONS_INFO.map((publication, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 transition-all hover:shadow-md dark:hover:shadow-gray-800"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <a 
                    href={publication.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl md:text-2xl font-semibold hover:underline transition-all"
                  >
                    {publication.title}
                  </a>
                  <p className="text-sm md:text-base mt-1">
                    Supervised by: <a 
                      href={publication.supervisor.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {publication.supervisor.name}
                    </a>
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{publication.period}</p>
              </div>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {publication.description.map((point, i) => (
                  <li key={i} className="text-sm md:text-base">{point}</li>
                ))}
              </ul>
              <p className="text-sm mt-4 font-medium text-gray-700 dark:text-gray-300">
                <span className="font-bold">Technologies:</span> {publication.technologies}
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default Publications;