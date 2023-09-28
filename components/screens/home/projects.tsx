import { ArrowIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col gap-0 my-[10vw]">
            <div className="items-center justify-center grid grid-cols-2">
                <div>
                    <h2 className="text-2xl font-medium">Landlords real estate</h2>
                    <p> A platform that links up land or house owners to buyers  </p>
                    <Link href={"#"} className="flex items-center  gap-4 h-fit hover:gap-6 duration-100 hover:bg-[#F1F1EF] w-fit underline underline-offset-8 decoration-1">
                        <span> View case study  </span><ArrowIcon />
                    </Link>
                </div>
                <Image className=" w-full h-full" src={"https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"} width={990} height={540} alt="" />
            </div>
            <div className="items-center justify-center grid grid-cols-2">
                <Image className=" w-full h-full" src={"https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"} width={990} height={540} alt="" />
                <div>
                    <h2 className="text-2xl font-medium">Landlords real estate</h2>
                    <p> A platform that links up land or house owners to buyers  </p>
                    <Link href={"#"} className="flex items-center  gap-4 h-fit hover:gap-6 duration-100 hover:bg-[#F1F1EF] w-fit underline underline-offset-8 decoration-1">
                        <span> View case study  </span><ArrowIcon />
                    </Link>
                </div>
            </div>
            <div className="items-center justify-center grid grid-cols-2">
                <div>
                    <h2 className="text-2xl font-medium">Landlords real estate</h2>
                    <p> A platform that links up land or house owners to buyers  </p>
                    <Link href={"#"} className="flex items-center  gap-4 h-fit hover:gap-6 duration-100 hover:bg-[#F1F1EF] w-fit underline underline-offset-8 decoration-1">
                        <span> View case study  </span><ArrowIcon />
                    </Link>
                </div>
                <Image className=" w-full h-full" src={"https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"} width={990} height={540} alt="" />
            </div>
        </div>
    )
}