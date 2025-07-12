
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavigation } from "@/components/layout/TopNavigation";
import { DashboardHome } from "@/components/dashboard/DashboardHome";
import { ManageMentors } from "@/components/dashboard/ManageMentors";
import { ManageMentees } from "@/components/dashboard/ManageMentees";
import { Analytics } from "@/components/dashboard/Analytics";
import { Settings } from "@/components/dashboard/Settings";
import { LoginPage } from "@/components/auth/LoginPage";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; address: string } | null>(null);

  const handleLogin = (email: string, address: string) => {
    setUser({ email, address });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage("dashboard");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome />;
      case "manage-mentors":
        return <ManageMentors />;
      case "manage-mentees":
        return <ManageMentees />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <div className="flex-1 flex flex-col">
        <TopNavigation
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          user={user}
          onLogout={handleLogout}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

export default Index;
