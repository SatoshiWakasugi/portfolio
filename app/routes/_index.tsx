import type { MetaFunction } from "@remix-run/node";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to my portfolio
          </h1>
          <Avatar className="w-72 h-72">
            <AvatarImage src="/icon.jpg" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
        </header>
      </div>
    </div>
  );
}
