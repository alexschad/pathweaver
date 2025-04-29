"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AdventureNode } from "../type";

export default function Node({
    data,
    id,
}: {
    data: AdventureNode[];
    id: number;
}) {
    const [node, setNode] = useState(data.find((n) => n.id === id));
    if (!node) return <div>No Node</div>;

    return (
        <div>
            <p className="text-white text-xl font-bold">{node.title}</p>
            <p className="text-white">{node.text}</p>
            {node.children && node.children.length > 0 ? (
                <div className="flex gap-4 items-center justify-items-center flex-col sm:flex-row my-5">
                    {node.children.map((c) => (
                        <button
                            key={c}
                            className="font-bold bg-[white] rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent sm:text-basesm:h-10 px-3 py-2 w-full sm:w-auto "
                            onClick={() => {
                                setNode(data.find((n) => n.id === c));
                            }}
                        >
                            {data.find((n) => n.id === c)?.action}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="flex gap-4 items-center justify-items-center flex-col sm:flex-row my-5">
                    <Link
                        href="/"
                        className="font-bold bg-[white] rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent sm:text-basesm:h-10 px-4 py-2 w-full sm:w-auto "
                    >
                        Start a new Adventure
                    </Link>
                </div>
            )}
        </div>
    );
}
