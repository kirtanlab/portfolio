import { data } from "@/constant";
import Image from "next/image";
import Button from "@/components/Button";

const Projects = () => {
  return (
    <main className="p-4 md:p-8 h-[85vh] overflow-scroll mx-auto max-w-[1240px]">
      <h3 className="text-3xl md:text-6xl font-bold mb-4">Previous Projects</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 jusitfy-center items-stretch">
        {data.map((card: any, i: number) => (
          <a
            className={`group/button block w-full h-full border rounded md:m-4 m-2 px-4 py-8`}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <div className=" w-full">
              <p className="mb-1 h-[2rem] text-sm md:text-base font-bold underline">
                {card.heading}
              </p>

              <p className="mb-1 h-[6rem] text-sm md:text-base">
                {card.description}
              </p>
              <Image
                src={card.img}
                alt=""
                className="h-auto max-w-full object-contain"
              />
              <p className="text-sm my-8 text-center font-medium">
                {card.skills}
              </p>
              <Button text="View Source" />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Projects;
