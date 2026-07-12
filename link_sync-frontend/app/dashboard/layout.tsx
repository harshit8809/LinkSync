import CommonHeader from "@/src/components/dashboard/CommonHeader";
import Sidebar from "@/src/components/dashboard/Sidebar";
import AuthProvider from "@/src/providers/AuthProvider";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <div className="min-h-screen">
                <Sidebar />
                <main className="md:ml-56 p-6 bg-amber-400">
                    {children}
                </main>
            </div>
        </AuthProvider>
    );
}