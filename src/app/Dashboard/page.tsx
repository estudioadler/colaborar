import CourseCard from "@/components/CourseCard/CourseCard";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Meus cursos</h1>
      <CourseCard />
    </div>
  );
}
