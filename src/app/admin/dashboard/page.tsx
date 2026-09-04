"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar, AdminTab } from "@/components/admin/AdminSidebar";
import { AnalyticsOverview } from "@/components/admin/AnalyticsOverview";
import { PostProjectForm } from "@/components/admin/PostProjectForm";
import { ProjectListTable } from "@/components/admin/ProjectListTable";
import { MessagesInbox } from "@/components/admin/MessagesInbox";
import { useAuth } from "@/context/AuthContext";

export default function AdminDashboardPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem("kingheart_admin_auth");
    if (!isAuthenticated && (!storedAuth || !JSON.parse(storedAuth).isAuthenticated)) {
      router.push("/admin/login");
    } else {
      setIsCheckingAuth(false);
    }
  }, [isAuthenticated, router]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center bg-background font-mono text-xs text-amber-400">
        <span>VERIFYING ADMIN CREDENTIALS...</span>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-brand-blue/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1 w-full">
            {activeTab === "overview" && <AnalyticsOverview setActiveTab={setActiveTab} />}
            {activeTab === "post" && <PostProjectForm onSuccess={() => setActiveTab("projects")} />}
            {activeTab === "projects" && <ProjectListTable />}
            {activeTab === "messages" && <MessagesInbox />}
          </main>

        </div>
      </div>
    </div>
  );
}
