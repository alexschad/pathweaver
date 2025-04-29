import React from "react";
import { AdventureNode } from "../type";
import Node from "./node";

function Adventure({ data }: { data: AdventureNode[] }) {
    return <Node data={data} id={data[0].id} />;
}

export default Adventure;
