"use client"
import { Bell, Mail } from "lucide-react"
import { Button } from "../ui/button"
import { BreadCrumb } from "../BreadCrumb/BreadCrumb"

export const Header = () => {
    return (
        <header className="w-full flex items-center justify-between border-b py-2 px-6">
            <div>
                <BreadCrumb text1="colaborar"
                    text2="projetos"
                    link1="/"
                    link2="/projetos"
                    page="Criar projeto"
                />
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Mail size={20}/>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Bell size={20}/>
                    </Button>
                </div>
            </div>
        </header>
    )
}
