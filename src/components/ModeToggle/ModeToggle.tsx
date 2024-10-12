"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-start text-left text-muted-foreground hover:text-primary"
        onClick={() => setTheme("dark")}
      >
        <Moon className="mr-2 h-4 w-4" />
        Dark
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-left text-muted-foreground hover:text-primary"
        onClick={() => setTheme("light")}
      >
        <Sun className="mr-2 h-4 w-4" />
        Light
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-left text-muted-foreground hover:text-primary"
        onClick={() => setTheme("system")}
      >
        <Monitor className="mr-2 h-4 w-4" />
        System
      </Button>
    </div>
  );
}
