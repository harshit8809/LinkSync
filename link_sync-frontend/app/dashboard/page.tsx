"use client";

import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-3xl text-ink">Dashboard</h1>
      <Button className={"bg-black text-amber-50 w-2xl"}>Button</Button>
      <p className="mt-4 text-ink-soft">
        Your authenticated workspace will live here.
      </p>
    </main>
  );
}
