import { Blog } from "@/types";

const blogs: Blog[] = [
    {
        title: "Using gcommit to write conventional commit messages",
        description: "Gcommit is a cli tool written in rust that coolifys commit messages to industry standards",
        id: "how-to-use-gcommit-tool",
        releaseDate : "Oct 2023",
        tags: ['rust', 'open-source', 'cli']
    },
    {
        title: "Validating environment variables",
        description: "A trick that you can use to prevent undefined environment variable errors in nodejs",
        id: "validating-environment-variables",
        releaseDate : "Oct 2023",
        tags: ['typescipt', 'backend-development']
    },

]

export default blogs;