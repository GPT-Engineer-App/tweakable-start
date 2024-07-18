import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";
import { Package2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <div className="flex items-center gap-2">
          <Package2 className="h-6 w-6" />
          <span className="font-semibold">Your Company</span>
        </div>
        <DesktopNavbar navItems={navItems} />
        <UserMenu />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t py-4 text-center">
        <p className="text-sm text-muted-foreground">© 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;