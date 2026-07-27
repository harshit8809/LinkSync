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

                <div className="md:ml-56">
                    <CommonHeader />
                </div>

                <main className="md:ml-56 p-6">
                    {children}
                </main>
            </div>
        </AuthProvider>
    );
}