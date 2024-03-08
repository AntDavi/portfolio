
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

const SkillsList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => setSkills(data.map(skill => skill.title)))
      .catch((error) => console.error("Erro ao buscar habilidades:", error));
  }, []);

  return (
    <div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="w-2/4 mx-auto mb-1 text-center xl:text-left xl:mx-0 before:w-[10px] before:h-[10px] before:rounded-full flex justify-center xl:justify-start before:bg-primary items-center gap-x-2"
        >
          <div className="font-medium">{skill}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
