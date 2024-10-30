import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Curso({ params }: { params: { courseName: string } }) {
  const courseName = decodeURIComponent(params.courseName);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Curso: {courseName}</h1>
      <p className="mb-4">Bem-vindo ao curso de {courseName}. Aqui você encontrará o conteúdo do curso.</p>
      <Link href="/dashboard" passHref>
        <Button variant="outline">Voltar para a lista de cursos</Button>
      </Link>
    </div>
  );
}