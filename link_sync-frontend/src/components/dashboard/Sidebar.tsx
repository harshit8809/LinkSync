// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/src/redux/features/authSlice";
// import type { RootState } from "@/src/redux/store";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// const NAV_ITEMS = [
//     {
//         label: "Dashboard",
//         href: "/dashboard",
//         icon: (
//             <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="2" width="7" height="7" rx="1.5" />
//                 <rect x="11" y="2" width="7" height="7" rx="1.5" />
//                 <rect x="2" y="11" width="7" height="7" rx="1.5" />
//                 <rect x="11" y="11" width="7" height="7" rx="1.5" />
//             </svg>
//         ),
//     },
//     {
//         label: "My Links",
//         href: "/dashboard/links",
//         icon: (
//             <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M8 12a4 4 0 0 0 5.657 0l2-2a4 4 0 0 0-5.657-5.657L9 5.343" />
//                 <path d="M12 8a4 4 0 0 0-5.657 0l-2 2a4 4 0 0 0 5.657 5.657L11 14.657" />
//             </svg>
//         ),
//     },
//     {
//         label: "Appearance",
//         href: "/dashboard/appearance",
//         icon: (
//             <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="10" cy="10" r="8" />
//                 <path d="M10 2a8 8 0 0 1 0 16" />
//                 <path d="M2 10h16" />
//             </svg>
//         ),
//     },
//     {
//         label: "Settings",
//         href: "/dashboard/settings",
//         icon: (
//             <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="10" cy="10" r="2.5" />
//                 <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
//             </svg>
//         ),
//     },
// ];

// function Logomark() {
//     return (
//         <svg viewBox="0 0 28 16" className="h-4 w-7" aria-hidden="true">
//             <path
//                 d="M1,8 L6,3 L10,13 L14,4 L18,11 L22,8"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth={1.6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <circle cx={25} cy={8} r={2.5} fill="#ff6a3d" />
//         </svg>
//     );
// }

// export default function Sidebar() {
//     const pathname = usePathname();
//     const router = useRouter();
//     const dispatch = useDispatch();
//     const user = useSelector((state: RootState) => state.auth.user);

//     const initials = user?.username
//         ? user.username.slice(0, 2).toUpperCase()
//         : "??";

//     const handleLogout = () => {
//         dispatch(logout());
//         router.push("/");
//     };

//     const isActive = (href: string) =>
//         href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);

//     return (
//             <>
//                 {/* ── Desktop sidebar ── */}
//                 <aside className="hidden md:flex fixed top-0 left-0 h-screen w-56 flex-col z-40">
//                     <div className="flex flex-col h-full mx-3 my-3 rounded-2xl border border-white/10 bg-scope/80 backdrop-blur-xl shadow-2xl overflow-hidden">

//                         {/* Logo */}
//                         <div className="flex items-center gap-2.5 px-5 py-5">
//                             <Logomark />
//                             <span className="font-display text-base font-semibold text-white tracking-tight">
//                                 LinkSync
//                             </span>
//                         </div>

//                         <Separator className="bg-white/8" />

//                         {/* Nav */}
//                         {/* Nav */}
//                         <nav className="flex-1 px-3 py-4 space-y-1">
//                             {NAV_ITEMS.map((item) => {
//                                 const active = isActive(item.href);
//                                 return (
//                                     <Button
//                                         key={item.href}
//                                         variant="ghost"
//                                         onClick={() => router.push(item.href)}
//                                         className={`w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm font-medium rounded-xl transition-all duration-150 ${active
//                                                 ? "bg-signal text-scope hover:bg-signal hover:text-scope shadow-sm"
//                                                 : "text-white/60 hover:text-white hover:bg-white/8"
//                                             }`}
//                                     >
//                                         <span className={active ? "text-scope" : "text-white/50"}>
//                                             {item.icon}
//                                         </span>
//                                         {item.label}
//                                     </Button>
//                                 );
//                             })}
//                         </nav>

//                         <Separator className="bg-white/8" />

//                         {/* Bottom: user + logout */}
//                         <div className="px-3 py-4 space-y-2">
//                             {/* User chip */}
//                             <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5">
//                                 <Avatar className="h-7 w-7 shrink-0">
//                                     <AvatarFallback className="bg-signal text-scope font-mono text-xs font-bold">
//                                         {initials}
//                                     </AvatarFallback>
//                                 </Avatar>
//                                 <span className="text-white/70 text-xs font-mono truncate">
//                                     {user?.username ?? ""}
//                                 </span>
//                             </div>

//                             {/* Logout */}
//                             <Button
//                                 variant="ghost"
//                                 onClick={handleLogout}
//                                 className="w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm font-medium rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10"
//                             >
//                                 <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
//                                     <path d="M13 15l3-5-3-5" />
//                                     <path d="M16 10H7" />
//                                     <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3" />
//                                 </svg>
//                                 Log out
//                             </Button>
//                         </div>
//                     </div>
//                 </aside>

//                 {/* ── Mobile bottom nav ── */}
//                 <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 mx-3 mb-3">
//                     <div className="flex items-center justify-around rounded-2xl border border-white/10 bg-scope/85 backdrop-blur-xl shadow-2xl px-2 py-2">
//                         {NAV_ITEMS.map((item) => {
//                             const active = isActive(item.href);
//                             return (
//                                 <Button
//                                     key={item.href}
//                                     variant="ghost"
//                                     onClick={() => router.push(item.href)}
//                                     className={`flex flex-col items-center gap-1 px-3 py-2 h-auto rounded-xl transition-all ${active ? "text-signal hover:text-signal" : "text-white/50 hover:text-white"
//                                         }`}
//                                 >
//                                     {item.icon}
//                                     <span className="text-[10px] font-mono">{item.label}</span>
//                                 </Button>
//                             );
//                         })}
//                         <Button
//                             variant="ghost"
//                             onClick={handleLogout}
//                             className="flex flex-col items-center gap-1 px-3 py-2 h-auto rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10"
//                         >
//                             <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
//                                 <path d="M13 15l3-5-3-5" />
//                                 <path d="M16 10H7" />
//                                 <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3" />
//                             </svg>
//                             <span className="text-[10px] font-mono">Logout</span>
//                         </Button>
//                     </div>
//                 </nav>
//             </>
//     );
// }




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

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="7" height="7" rx="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "My Links",
    href: "/dashboard/links",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a4 4 0 0 0 5.657 0l2-2a4 4 0 0 0-5.657-5.657L9 5.343" />
        <path d="M12 8a4 4 0 0 0-5.657 0l-2 2a4 4 0 0 0 5.657 5.657L11 14.657" />
      </svg>
    ),
  },
  {
    label: "Appearance",
    href: "/dashboard/appearance",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 2a8 8 0 0 1 0 16" />
        <path d="M2 10h16" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
];

// ── hardcoded design tokens ──────────────────────────────
const SCOPE = "#0e1b20";   // dark background
const SIGNAL = "#ff6a3d";   // orange accent
// ────────────────────────────────────────────────────────

function Logomark() {
  return (
    <svg viewBox="0 0 28 16" className="h-4 w-7" aria-hidden="true">
      <path
        d="M1,8 L6,3 L10,13 L14,4 L18,11 L22,8"
        fill="none"
        stroke="white"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={25} cy={8} r={2.5} fill={SIGNAL} />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [userLogout] = useLogoutMutation()

  const initials = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "??";

  const handleLogout = async () => {
    try {
      const resp = await userLogout('').unwrap()
      console.log(resp)
      dispatch(logout());
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
          className="flex flex-col h-full mx-3 my-3 rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl bg-teal pt-4">
          {/* Logo */}
          <div className="ml-3 mb-2">
            <AppLogo />
          </div>

          <Separator style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

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
                  <span style={active ? { color: SCOPE } : { color: "rgba(255,255,255,0.45)" }}>
                    {item.icon}
                  </span>
                  {item.label}
                </Button>
              );
            })}
          </nav>

          <Separator style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

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
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="flex flex-col items-center gap-1 px-3 py-2 h-auto rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 15l3-5-3-5" />
              <path d="M16 10H7" />
              <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3" />
            </svg>
            <span className="text-[10px] font-mono">Logout</span>
          </Button>
        </div>
      </nav>
    </>
  );
}