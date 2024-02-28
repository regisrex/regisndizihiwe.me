import React from "react";

export default function T({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-black pt-2 px-2  mb-6 text-3xl  w-fit font-black bg-yellow-400 "> {children}</h3>
    )
}

