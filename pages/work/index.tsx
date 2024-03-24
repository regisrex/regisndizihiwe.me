import { LinkIcon } from "@/components/icons";
import Work from "@/components/works/work";
import { works } from "@/content/works";

export default function WorksPage() {
  return (
    <div>
      <h2 className="text-2xl my-4  text-bluish-100 font-bold">Works</h2>
      <div className="flex flex-col">
        <p className="text-bluish-200">
          I&apos;ve been in this career of software development for 3 years now,
          below here is curated list of my experiences and my contributions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-4">
        {works
          .map((work, i) => (
            <Work key={i} {...work} />
          ))}
      </div>
    </div>
  );
}
