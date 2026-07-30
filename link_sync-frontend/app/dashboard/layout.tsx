import CommonHeader from "@/src/components/dashboard/CommonHeader";
import PreviewPanel from "@/src/components/dashboard/PreviewPanel";
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

                <div className="flex">
                    <main className="flex-1 md:ml-56">
                        {children}
                    </main>
                    <PreviewPanel />
                </div>
            </div>
        </AuthProvider>
    );
}