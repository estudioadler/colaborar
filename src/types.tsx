import { LucideIcon } from "lucide-react"

export interface SidebarItems {
    sections: {
        sectionName: string;
        links: {
            name: string;
            href: string;
            icon: LucideIcon;
        }[];
    }[];
    fixedLinks: {
        name: string;
        href: string;
        icon: LucideIcon;
    }[]
}