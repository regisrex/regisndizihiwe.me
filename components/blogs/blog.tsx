import { Blog as BlogI } from "@/types";
import Link from "next/link";

export default function Blog(props: BlogI) {
    return (
        <Link href={`/blog/${props.id}`} className="flex items-start  cursor-pointer gap-2  py-3">
            <div>
                <h4 className="text-bluish-100">{props.title}</h4>
                <h4 className="text-bluish-200">{props.description}</h4>
            </div>
        </Link>
    )
}   