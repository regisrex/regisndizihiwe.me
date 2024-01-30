import { LinkIcon, WebIcon } from "../icons";

export interface IWork {
  title: string;
  description: string;
  link?: string;
  type: "web" | "tool" | "package" | "other" | "mobile";
}

const WorkIcon = ({ type }: { type: IWork["type"] }) => {
  switch (type) {
    case "web":
      return <WebIcon />;
    default:
      return <WebIcon />;
  }
};

export default function Work(props: IWork) {
  return (
    <div className="text-bluish-100 p-4 flex  h-full` w-full gap-4 border-bluish-200/10 border rounded-md w-fit  dark:bg-gray-950">
      {/* <WorkIcon type={props.type} /> */}
      <div>
        <h3 className="font-semibold">{props.title}</h3>
        <p className="text-bluish-200 py-1">{props.description}</p>
        {props.link && (
          <a
            href={`https://${props.link}`}
            className="flex items-center gap-2 text-blue hover:underline underline-offset-6 underline-blue/30 hover:gap-4 duration-100 "
          >
            <span>{props.link} </span> <LinkIcon />
          </a>
        )}
      </div>
    </div>
  );
}
