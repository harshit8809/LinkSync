"use client";

import { Button } from "@/components/ui/button";
import AddedLinks from "@/src/components/dashboard/section/AddedLinks";
import { useAppSelector } from "@/src/redux/hooks";
import { Check, Copy, Link2, Share2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const username = user?.username ?? "Harshit";
  const profilePath = `/linksync/${username.toLowerCase().replaceAll(" ", ".")}`;

  useEffect(() => {
    if (!isCopied) return;
    const timeout = window.setTimeout(() => setIsCopied(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${profilePath}`);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: `${username}'s LinkSync`, url: `${window.location.origin}${profilePath}` });
      return;
    }
    await handleCopy();
  };

  return (
    <main className="min-h-full p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-teal uppercase">
              <Sparkles className="size-3.5" /> Your LinkSync space
            </div>
            <h1 className="font-display text-3xl text-ink sm:text-4xl">Hi, {username} 👋</h1>
            <p className="mt-2 text-sm text-ink-soft">Shape the links people see when they visit your profile.</p>
          </div>
          <div className="hidden rounded-full border border-teal/15 bg-teal/8 px-3 py-1.5 text-xs font-medium text-teal sm:block">
            Profile editor
          </div>
        </div>

        <section className="overflow-hidden rounded-2xl border border-hairline/80 bg-white shadow-[0_12px_40px_-24px_rgba(14,42,46,0.35)]">
          <div className="flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e1ebe5]">
                <Link2 className="size-5 text-[#194d33]" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] tracking-wide text-ink-soft uppercase">Your public link</p>
                <p className="mt-1 truncate text-base font-semibold text-ink sm:text-lg">{profilePath}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex">
              <Button variant="outline" onClick={handleCopy} className="h-10 rounded-xl border-hairline bg-white px-4 hover:border-teal/35 hover:bg-teal/5">
                {isCopied ? <Check className="size-4 text-teal" /> : <Copy className="size-4" />}
                <span>{isCopied ? "Copied" : "Copy link"}</span>
              </Button>
              <Button variant="outline" onClick={handleShare} className="h-10 rounded-xl border-hairline bg-white px-4 hover:border-teal/35 hover:bg-teal/5">
                <Share2 className="size-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </section>

        <AddedLinks />
      </div>
    </main>
  );
};

export default DashboardPage;
