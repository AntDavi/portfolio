import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

const EducationList = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const query = '*[_type == "education"]';

        client.fetch(query)
            .then((data) => setEducation(data))
            .catch((error) => console.error("Erro ao buscar educação:", error));
    }, []);

    return (
        <div>
            {education.map((item, index) => {
                const { university, qualification, years } = item;
                return (
                    <div className="flex gap-x-8 group mb-4" key={index}>
                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 text-xl font-semibold leading-none">
                                {university}
                            </div>
                            <div className="mb-4 text-lg leading-none text-muted-foreground">
                                {qualification}
                            </div>
                            <div className="text-base font-medium">
                                {years}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default EducationList;
