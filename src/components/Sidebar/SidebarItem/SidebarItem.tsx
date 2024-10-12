import React from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  isExpanded: boolean;
  children?: React.ReactNode;
}

export default function SidebarItem({
  icon,
  label,
  href,
  isExpanded,
  children,
}: SidebarItemProps) {
  if (children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-left mx-auto text-muted-foreground hover:text-foreground  group",
            )}
          >
            <div className="flex items-center justify-between pl-1 w-full">
              <span  className="group-hover:text-blue-800 group-hover:dark:text-blue-500">{icon}</span>
              <span className={cn("ml-2", isExpanded ? "opacity-100" : "opacity-0")}>
                {label}
              </span>
              {isExpanded && <ChevronRight className="ml-auto h-4 w-4" />}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56" align="start" side="right" sideOffset={5}>
            {children}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    );
  }

  return (
    <Link href={href || "#"} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start text-left text-muted-foreground hover:text-foreground group",
        )}
      >
        <div className="flex items-center pl-1">
          <span className="group-hover:text-blue-800 group-hover:dark:text-blue-500">{icon}</span>
          <span className={cn("ml-2", isExpanded ? "opacity-100" : "opacity-0")}>
            {label}
          </span>
        </div>
      </Button>
    </Link>
  );
}