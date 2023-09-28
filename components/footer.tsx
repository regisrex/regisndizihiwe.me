import Link from "next/link";
import { BehanceIcon } from "./icons";

export default function Footer() {
    return (
        <div className="px-[4vw] py-20 flex bg-[#F1F1EF] items-start justify-between">
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-medium">Regis Rex.</h1>
                <div className="flex flex-col">
                    <a href="tel:+250788927469">(+250) 788 927 469</a>
                    <a href="mailto:hey@regisndizihiwe.me" className="underline decoration-1 underline-offset-4">hey@regisndizihiwe.me</a>
                </div>
                <div>
                    <a href="https://behance.net/regisndizihiwe"><BehanceIcon /></a>

                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-medium">Projects</h1>
                <div className="flex flex-col">
                    <Link href={`/`}>Landlords real estate</Link>
                    <Link href={`/about`} >Scanna mobile app</Link>
                </div>
            </div>

        </div>
    )
}