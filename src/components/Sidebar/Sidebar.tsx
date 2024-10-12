"use client";

import { useState } from "react";
import { Book, BookOpen, Calendar, CalendarDays, ChevronRight, FileText, GraduationCap, HelpCircle, Home, LayoutDashboard, MessageSquare, PartyPopper, Settings, SquareLibrary, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import UserMenu from "../UserMenu/UserMenu";
import Link from "next/link";
import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarSubItem from "./SidebarSubITem/SidebarSubITem";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col fixed left-0 top-0 bottom-0 p-1 bg-background transition-all duration-300 ease-in-out border-r",
        isExpanded ? "w-64" : "w-14"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={28}
          height={28}
          className="my-3 mx-2.5"
        />
      </Link>

      <ScrollArea className="flex-grow mt-4">
        <div>
          <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label="Meus Cursos" href="/" isExpanded={isExpanded} />
          <SidebarItem icon={<BookOpen className="h-5 w-5" />} label="Apoio ao Estudo" isExpanded={isExpanded}>
            <SidebarSubItem icon={<MessageSquare className="h-4 w-4" />} label="Mensagem para o Tutor" href="/mensagem-tutor" />
            <SidebarSubItem icon={<Book className="h-4 w-4" />} label="Livros" href="/livros" />
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Manuais">
              <SidebarSubItem label="Manual AVA" href="/manuais/ava" />
              <SidebarSubItem label="Manual do Estágio" href="/manuais/estagio" />
              <SidebarSubItem label="Manual Acadêmico" href="/manuais/academico" />
              <SidebarSubItem label="Manual da Avaliação Continuada EAD" href="/manuais/avaliacao-ead" />
            </SidebarSubItem>
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Boletim" href="/boletim" />
          </SidebarItem>
          <SidebarItem icon={<CalendarDays className="h-5 w-5" />} label="Agendamento de Provas" href="/agendamento-provas" isExpanded={isExpanded} />
          <SidebarItem icon={<GraduationCap className="h-5 w-5" />} label="Sala do Tutor" href="/sala-tutor" isExpanded={isExpanded} />
          <SidebarItem icon={<SquareLibrary className="h-5 w-5" />} label="Biblioteca Virtual" href="/biblioteca" isExpanded={isExpanded} />
          <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label="Serviços" isExpanded={isExpanded}>
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Financeiro" href="/financeiro" />
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Solicitações de Serviços">
              <SidebarSubItem label="Inclusão de DP e/ou AD" href="/solicitacoes/inclusao-dp-ad" />
              <SidebarSubItem label="Exclusão de DP e/ou AD" href="/solicitacoes/exclusao-dp-ad" />
              <SidebarSubItem label="Segunda Chamada de Prova" href="/solicitacoes/segunda-chamada" />
              <SidebarSubItem label="Outros Serviços" href="/solicitacoes/outros" />
            </SidebarSubItem>
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Entregar Documentos" href="/entregar-documentos" />
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Contratos" href="/contratos" />
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Extratos de Disciplinas" href="/extratos-disciplinas" />
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Download Matriz Curricular" href="/matriz-curricular" />
          </SidebarItem>
          <SidebarItem icon={<PartyPopper className="h-5 w-5" />} label="Oportunidades" isExpanded={isExpanded}>
            <SidebarSubItem icon={<Users className="h-4 w-4" />} label="Canal Conecta" href="/canal-conecta" />
            <SidebarSubItem icon={<User className="h-4 w-4" />} label="Amigo Vale Prêmios" href="/amigo-vale-premios" />
          </SidebarItem>
          <SidebarItem icon={<HelpCircle className="h-5 w-5" />} label="Ajuda" isExpanded={isExpanded}>
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Manual do AVA" href="/manual-ava" />
            <SidebarSubItem icon={<FileText className="h-4 w-4" />} label="Tour Virtual" href="/tour-virtual" />
          </SidebarItem>
          <SidebarItem icon={<Settings className="h-5 w-5" />} label="Configurações" href="/configuracoes" isExpanded={isExpanded} />
        </div>
      </ScrollArea>
        <UserMenu />
    </aside>
  );
}
