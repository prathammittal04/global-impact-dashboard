
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavigation } from "@/components/layout/TopNavigation";
import { DashboardHome } from "@/components/dashboard/DashboardHome";
import { ManageMentors } from "@/components/dashboard/ManageMentors";
import { ManageMentees } from "@/components/dashboard/ManageMentees";
import { CheckInReports } from "@/components/dashboard/CheckInReports";
import { MessagesFeed } from "@/components/dashboard/MessagesFeed";
import { Analytics } from "@/components/dashboard/Analytics";
import { CurriculumManagement } from "@/components/dashboard/CurriculumManagement";
import { Settings } from "@/components/dashboard/Settings";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome />;
      case "manage-mentors":
        return <ManageMentors />;
      case "manage-mentees":
        return <ManageMentees />;
      case "check-ins":
        return <CheckInReports />;
      case "messages":
        return <MessagesFeed />;
      case "analytics":
        return <Analytics />;
      case "curriculum":
        return <CurriculumManagement />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

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
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

export default Index;
