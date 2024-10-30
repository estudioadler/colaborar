import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      Hello
      <Link
        href="/dashboard"
      >
        <Button
          variant="ghost"
          className="text-muted-foreground hover:text-primary"
        >
          dashboard
        </Button>
      </Link>
    </div>
  );
}
