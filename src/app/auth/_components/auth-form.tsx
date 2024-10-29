"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

export default function AuthForm() {
  const [keepConnected, setKeepConnected] = useState(false);
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Formulário */}
      <div className="flex flex-col h-screen items-center justify-between p-12">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} />
          <h1 className="text-2xl font-medium">Colaborar</h1>
        </div>
        <Tabs defaultValue="login" className="w-full max-w-3xl">
          <TabsList className="grid w-full grid-cols-2 max-w-56">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="first-access">Primeiro Acesso</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="space-y-4">
              <div className="space-y-2">
                <Input id="cpf" placeholder="Digite seu CPF" required />
              </div>
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="keep-connected"
                  checked={keepConnected}
                  onCheckedChange={(checked) =>
                    setKeepConnected(checked as boolean)
                  }
                />
                <Label htmlFor="keep-connected">Manter conectado</Label>
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="first-access">
            <form className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="matricula"
                  placeholder="Digite o número da matrícula"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="cpf-first-access"
                  placeholder="Digite seu CPF"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Acessar
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        <div className="text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
      {/* Imagem */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-l">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
