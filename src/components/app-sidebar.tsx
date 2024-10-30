"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  LayoutDashboard,
  SquareLibrary,
  GraduationCap,
  SwatchBook,
  CalendarDays,
  CircleHelp
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Meu Curso",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Serviços online",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Financeiro",
          url: "#",
        },
        {
          title: "Solicitações de Serviços",
          url: "#",
        },
        {
          title: "Entregar Documentos",
          url: "#",
        },
        {
          title: "Contratos",
          url: "#",
        },
        {
          title: "Extratos de Disciplinas",
          url: "#",
        },
        {
          title: "Download Matriz Curricular",
          url: "#",
        },
      ],
    },
    {
      title: "Apoio ao Estudo",
      url: "#",
      icon: SwatchBook,
      items: [
        {
          title: "Livros",
          url: "#",
        },
        {
          title: "Manuais",
          url: "#",
        },
      ],
    },
    {
      title: "Sala do tutor",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Mensagem para o Tutor",
          url: "#",
        },
      ],
    },
    {
      title: "Biblioteca Virtual",
      url: "#",
      icon: SquareLibrary,
    },
    {
      title: "Agendamento de provas",
      url: "#",
      icon: CalendarDays,
    },
  ],
  navSecondary: [
    {
      title: "Oportunidades",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Ajuda",
      url: "/dashboard/help",
      icon: CircleHelp,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset"  collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image 
                  src="/logo.svg"
                  alt={data.user.name}
                  width={28}
                  height={28}
                />
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold">Colaborar</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
