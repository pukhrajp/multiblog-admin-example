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
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger asChild>
        <h2>{item.label}</h2>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <NavChildren items={item.children} />
      </CollapsibleContent>
    </Collapsible>
  );
}
