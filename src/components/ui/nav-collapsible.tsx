import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { NavChildren } from "./nav-children";

export function NavCollapsible({ item }: { item: any }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="space-y-2"
    >
      <CollapsibleTrigger asChild>
      <div className="flex items-center cursor-pointer mb-0 justify-between w-[200px]">
        <h2>{item.label}</h2>
        <img src={item.icon}/>
      </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <NavChildren items={item.children} />
      </CollapsibleContent>
    </Collapsible>
  );
}
