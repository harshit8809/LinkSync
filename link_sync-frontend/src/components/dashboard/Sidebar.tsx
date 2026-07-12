"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/src/redux/features/authSlice";
import type { RootState } from "@/src/redux/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AppLogo from "../AppLogo";
import { useLogoutMutation } from "@/src/redux/apis/authApi";
import { apiSlice } from "@/src/redux/apis/apiSlice";
import { LayoutDashboard, Link, Palette, Settings } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard />
  },
  {
    label: "My Links",
    href: "/dashboard/links",
    icon: <Link />
  },
  {
    label: "Appearance",
    href: "/dashboard/appearance",
    icon: <Palette />
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings />,

  },
];

// ── hardcoded design tokens ──────────────────────────────
const SCOPE = "#0e1b20";   // dark background
const SIGNAL = "#ff6a3d";   // orange accent  // orange accent
// ────────────────────────────────────────────────────────


export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [userLogout] = useLogoutMutation()

  console.log("redux user->", user)

  const initials = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "??";

  const handleLogout = async () => {
    try {
      const resp = await userLogout('').unwrap()
      console.log(resp)
      dispatch(logout());
      dispatch(apiSlice.util.resetApiState());
      router.push("/");
    } catch (e) {
      console.log(e)
    }
  };

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href);

  return (
    <>
      {/* ── Desktop sidebar ───────────────────────────── */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-56 flex-col z-40">
        <div
          className="flex flex-col h-full mx-3 my-3 rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl pt-4 bg-linear-to-b from-[#949494] via-[#688c7e] to-[#011610]"       >
          {/* Logo */}
          <div className="ml-3 mb-2">
            <AppLogo />
          </div>

          <Separator style={{ backgroundColor: "#90a4ae" }} />

          {/* Nav */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => router.push(item.href)}
                  style={
                    active
                      ? { backgroundColor: SIGNAL, color: SCOPE }
                      : {}
                  }
                  className={`w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm font-medium rounded-xl transition-all duration-150 ${active
                    ? "shadow-sm hover:opacity-90"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span style={active ? { color: SCOPE } : { color: "#FFF" }}>
                    {item.icon}
                  </span>
                  <span style={active ? { color: SCOPE } : { color: "#FFF" }}>
                    {item.label}
                  </span>
                </Button>
              );
            })}
          </nav>

          <Separator style={{ backgroundColor: "#90a4ae" }} />

          {/* User + Logout */}
          <div className="px-3 py-4 space-y-2">
            {/* User chip */}
            <div
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <Avatar className="h-7 w-7 shrink-0">
                <AvatarFallback
                  className="font-mono text-xs font-bold"
                  style={{ backgroundColor: SIGNAL, color: SCOPE }}
                >
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-white/70 text-xs font-mono truncate">
                {user?.username ?? ""}
              </span>
            </div>

            {/* Logout */}
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm font-medium rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 15l3-5-3-5" />
                <path d="M16 10H7" />
                <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3" />
              </svg>

              Log out
            </Button>
          </div>
        </div>
      </aside>

      {/* ── Mobile bottom nav ─────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 mx-3 mb-3">
        <div
          className="flex items-center justify-around rounded-2xl border shadow-2xl px-2 py-2 backdrop-blur-xl"
          style={{
            background: `rgba(14, 27, 32, 0.88)`,
            borderColor: "rgba(255,255,255,0.10)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => router.push(item.href)}
                className="flex flex-col items-center gap-1 px-3 py-2 h-auto rounded-xl transition-all"
                style={active ? { color: SIGNAL } : { color: "rgba(255,255,255,0.45)" }}
              >
                {item.icon}
                <span className="text-[10px] font-mono">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
}