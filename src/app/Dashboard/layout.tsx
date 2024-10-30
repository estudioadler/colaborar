import { AppSidebar } from "@/components/app-sidebar";
import NotesComponent from "@/components/NotesComponent/NotesComponent";
import PageTitle from "@/components/PageTitle";
import PopoverNotification from "@/components/PopoverNotification/PopoverNotification";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Inbox, NotepadText } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center justify-between gap-2 pr-3">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-1">
          <NotesComponent />
            <Button
              variant="ghost"
              size="icon"
            >
              <Bell />
            </Button>
            <PopoverNotification />
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 md:px-12 md:py-6">
        <PageTitle />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
