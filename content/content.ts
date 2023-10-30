import { Blog } from "@/types";

const blogs: Blog[] = [
    {
        title: "The new version and usage of gcommit, a cli too to make conventional git commit messages",
        description: "gcommit is a cli tool that helps your write conventional commit messages and share configurations accross teams",
        id: "how-to-use-gcommit-tool",
        releaseDate : "Oct 2023",
        tags: ['rust', 'open-source', 'cli']
    },
    {
        title: "Validating environment variables",
        description: "The way that I use to prevent errors in production that are caused by undefined and or environment variables",
        id: "validating-environment-variables",
        releaseDate : "Oct 2023",
        tags: ['typescipt', 'backend-development']
    },

]

export default blogs;