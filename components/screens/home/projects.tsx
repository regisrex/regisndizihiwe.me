import { ArrowIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json"
export default function Projects() {
    return (
        <div className="grid grid-cols-1 gap-0 my-[10vw]">
            {
                data.projects.map((project, index) => (
                <div className="items-center justify-center grid grid-cols-1 gap-3">
                    <Image className=" w-full h-full bg-[#F1F1EF]" src={project.image} width={990} height={540} alt="" />
                    <div className="mt-6">
                        <h2 className="text-2xl font-medium">{project.name}</h2>
                        <p>{project.description}</p>
                        <Link href={"#"} className="flex items-center  gap-4 h-fit hover:gap-6 duration-100 hover:bg-[#F1F1EF] w-fit underline underline-offset-8 decoration-1">
                            <span> View case study  </span><ArrowIcon />
                        </Link>
                    </div>
                </div>
                ))

            }


        </div>
    )
}