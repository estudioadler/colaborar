"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Link from "next/link";

type Semester =
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 1º SEMESTRE"
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 2º SEMESTRE"
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 3º SEMESTRE"
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 4º SEMESTRE"
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 5º SEMESTRE"
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 6º SEMESTRE"
  | "ENGENHARIA DE SOFTWARE - BACHARELADO - 7º SEMESTRE";

const coursesData: Record<Semester, string[]> = {
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 1º SEMESTRE": [
    "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES",
    "DIREITO CIBERNÉTICO",
    "EMPREENDEDORISMO E INOVAÇÃO",
    "ENGENHARIA, CIÊNCIA E TECNOLOGIA",
    "GESTÃO DO CONHECIMENTO E DA TECNOLOGIA DA INFORMAÇÃO",
    "SISTEMAS OPERACIONAIS",
  ],
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 2º SEMESTRE": [
    "ALGORITMOS E PROGRAMAÇÃO ESTRUTURADA",
    "ANÁLISE E MODELAGEM DE SISTEMAS",
    "FUNDAMENTOS DE CÁLCULO APLICADO",
    "LINGUAGEM DE PROGRAMAÇÃO",
    "LÓGICA E MATEMÁTICA COMPUTACIONAL",
    "SOCIEDADE BRASILEIRA E CIDADANIA",
  ],
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 3º SEMESTRE": [
    "ANÁLISE ORIENTADA A OBJETOS",
    "ENGENHARIA DE REQUISITOS",
    "ENGENHARIA DE SOFTWARE",
    "MODELAGEM DE DADOS",
    "PROJETO DE EXTENSÃO I - ENGENHARIA DE SOFTWARE",
    "SISTEMAS DE COMPUTAÇÃO E DE INFORMAÇÃO",
  ],
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 4º SEMESTRE": [
    "COMPUTAÇÃO EM NUVEM",
    "FUNDAMENTOS DA INTELIGÊNCIA ARTIFICIAL",
    "LINGUAGEM ORIENTADA A OBJETOS",
    "MÉTODOS MATEMÁTICOS",
    "PROGRAMAÇÃO E DESENVOLVIMENTO DE BANCO DE DADOS",
    "REDES E SISTEMAS DISTRIBUÍDOS",
  ],
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 5º SEMESTRE": [
    "ARQUITETURA DE SOFTWARE",
    "GERENCIAMENTO E QUALIDADE DE SOFTWARE",
    "GOVERNANÇA DE TECNOLOGIA DA INFORMAÇÃO",
    "INTERFACE E USABILIDADE",
    "PROGRAMAÇÃO WEB",
    "PROJETO DE EXTENSÃO II - ENGENHARIA DE SOFTWARE",
  ],
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 6º SEMESTRE": [
    "BANCOS DE DADOS NÃO RELACIONAIS",
    "FRAMEWORKS PARA DESENVOLVIMENTO DE SOFTWARE",
    "IMPLEMENTAÇÃO DE PROJETO WEB",
    "INFRAESTRUTURA ÁGIL",
    "PROJETO DE SOFTWARE",
    "SEGURANÇA E AUDITORIA DE SISTEMAS",
  ],
  "ENGENHARIA DE SOFTWARE - BACHARELADO - 7º SEMESTRE": [
    "DESENVOLVIMENTO DE E-COMMERCE COM CMS",
    "DESENVOLVIMENTO MOBILE",
    "GREEN IT",
    "PROJETO DE EXTENSÃO III - ENGENHARIA DE SOFTWARE",
    "SEGURANÇA EM ENGENHARIA DE SOFTWARE",
    "TESTES E MANUTENÇÃO DE SOFTWARE",
  ],
};

export default function CourseCard() {
  const [progress, setProgress] = useState(13);
  const [selectedSemester, setSelectedSemester] =
    useState<Semester>("ENGENHARIA DE SOFTWARE - BACHARELADO - 1º SEMESTRE");

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <Select
        onValueChange={(value: Semester) => setSelectedSemester(value)}
        defaultValue={selectedSemester}
      >
        <SelectTrigger className="w-full text-xs">
          <SelectValue placeholder="Selecione o semestre" />
        </SelectTrigger>
        <SelectContent>
          {(Object.keys(coursesData) as Semester[]).map((semester) => (
            <SelectItem key={semester} value={semester}>
              {semester}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coursesData[selectedSemester].map((course, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <div className="border-b w-full p-1.5 card-header rounded-t-lg" />
            <CardHeader className="align-text-top">
              <CardTitle className="text-sm">{course}</CardTitle>
              <CardDescription className="text-xs">
                Prox Vencimento: 12/10/2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col text-xs gap-2">
                Progresso: {progress}%
                <Progress value={progress} className="h-1" />
              </div>
            </CardContent>
            <CardFooter>
            <Link 
                href={{
                  pathname: '/course/[courseName]',
                  query: { courseName: course },
                }}
                as={`dashboard/course/${encodeURIComponent(course)}`}
                passHref
              >
                <Button
                  variant="outline"
                  size={"sm"}
                  className="w-full"
                  onClick={() => setProgress(66)}
                >
                  Acessar aula
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
