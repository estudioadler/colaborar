"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="w-full flex items-center justify-start gap-3 py-6"
          variant="ghost"
          role="combobox"
          aria-expanded={open}
        >
          <Avatar className="size-7">
            <AvatarImage src="https://github.com/estudioadler.png" alt="@estudioadler" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="w-[8rem] flex flex-col items-start text-sm truncate">
            <span
              title="estudioadler"
              className="w-full text-left text-foreground truncate"
            >
              estudioadler
            </span>
            <span
              title="adler.gabriel20@gmail.com"
              className="w-full text-left text-muted-foreground text-xs truncate"
            >
              adler.gabriel20@gmail.com
            </span>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        ola
      </PopoverContent>
    </Popover>
  );
}
