// SidebarSubItem.tsx
import React from 'react';
import { DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import Link from 'next/link';

interface SidebarSubItemProps {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  children?: React.ReactNode;
}

export default function SidebarSubItem({
  icon,
  label,
  href,
  children,
}: SidebarSubItemProps) {
  if (children) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="w-full text-muted-foreground hover:text-foreground group">
          <div className="flex items-center">
            {icon && <span className="group-hover:text-blue-800 group-hover:dark:text-blue-500">{icon}</span>}
            <span className="ml-2">{label}</span>
          </div>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className="w-56">
            {children}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <Link href={href || "#"} className="w-full text-muted-foreground hover:text-foreground group">
        <div className="flex items-center">
          {icon && <span className="group-hover:text-blue-800 group-hover:dark:text-blue-500">{icon}</span>}
          <span className="ml-2">{label}</span>
        </div>
      </Link>
    </DropdownMenuItem>
  );
}