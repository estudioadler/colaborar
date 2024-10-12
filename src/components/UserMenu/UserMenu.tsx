import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, User, LogOut, ChevronsUpDown } from "lucide-react";
import { ModeToggle } from "../ModeToggle/ModeToggle";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className="w-full flex items-center py-6"
          variant="ghost"
          role="combobox"
          aria-expanded={isOpen}
        >
          <Avatar className="size-6 ml-0.5">
            <AvatarImage
              src="https://github.com/estudioadler.png"
              alt="@estudioadler"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isExpanded ? (
            <></>
          ) : (
            <div className="flex items-center justify-between w-full truncate">
              <span className="flex flex-col items-start text-sm truncate ml-2">
                <span
                  title="Adler Gabriel"
                  className="w-full text-left text-foreground truncate"
                >
                  Adler Gabriel
                </span>
                <span
                  title="adler.gabriel20@gmail.com"
                  className="w-full text-left text-muted-foreground text-xs truncate"
                >
                  Engenharia de Software
                </span>
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <div className="p-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-left text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <User className="mr-2 h-4 w-4" />
            Account preferences
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="mr-2 h-4 w-4" />
            Feature previews
          </Button>
        </div>
        <div className="p-1 border-t">
          <p className="text-xs font-medium mb-2 pl-3 pt-3 text-muted-foreground">
            Theme
          </p>
          <ModeToggle />
        </div>
        <div className="p-1 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-left text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
