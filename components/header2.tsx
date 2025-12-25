import Logo from "@/mynaui/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "@mynaui/icons-react";

export default function CenteredPill() {
  return (
    <header className="p-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between space-x-4 rounded-full border bg-background p-1.5 pl-4">
        <Logo />
        <div className="hidden md:inline-flex">
          <a
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Features
          </a>
          <a
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Pricing
          </a>
          <a
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Blog
          </a>
          <a
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Company
          </a>
          <a
            href="#"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Sign in
          </a>
        </div>
        <div className="hidden md:inline-flex">
          <a
            href="#"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
          >
            Get Started
          </a>
        </div>
        <button className="inline-flex px-2 py-1.5 md:hidden">
          <Menu />
          <span className="sr-only">Open Menu</span>
        </button>
      </div>
    </header>
  );
}
