import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, Inbox } from "lucide-react";

export default function PopoverNotification() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Inbox />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-2">
          <h3>Mensagens</h3>
          <Tabs defaultValue="inbox" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="inbox">
                Inbox <span className="ml-1 text-xs">0</span>
              </TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="inbox" className="mt-4">
              <div className="flex flex-col items-center justify-center space-y-2 py-8">
                <div className="rounded-full bg-secondary p-3">
                  <Inbox className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">All caught up</h3>
                <p className="text-center text-sm text-muted-foreground">
                  You will be notified here for any notices on your
                  organizations and projects
                </p>
              </div>
            </TabsContent>
            <TabsContent value="archived">
              <p className="text-sm text-muted-foreground">
                No archived notifications.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
}
