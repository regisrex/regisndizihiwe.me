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
    {
        title: "The gotcha with useSWR hook",
        description: "The disadvantage that I met when I first used the useSWR hook",
        id: "the-swr-hook-gotcha",
        releaseDate : "Jan 2024",
        tags: ['typescipt', 'frontend']
    },
    {
        title: "The fetch() api",
        description: "The API that links apps to the internet",
        id: "the-fetch()-api",
        releaseDate : "Jan 2024",
        tags: ['typescipt', 'frontend']
    },
    {
        title: "Intro to programming - [Within-Tech]",
        description: "Intro to python - for within-tech noobs",
        id: "let's-build-things-using-python",
        releaseDate : "Jan 2024",
        tags: ['python']
    },

]

export default blogs;