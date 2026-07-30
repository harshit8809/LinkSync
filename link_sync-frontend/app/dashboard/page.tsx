"use client"
import { Button } from "@/components/ui/button"
import AddedLinks from "@/src/components/dashboard/section/AddedLinks"
import { Check, Copy, Link, Share } from "lucide-react"
import { useState } from "react"

const page = () => {

  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    // console.log("jhbcj")
    setIsCopied(true)
  }

  return (
    <main className="shadow-xl p-4 rounded-2xl bg-white md:mx-4">
      <div className=" flex justify-between items-center mb-4">
        <div>
          <h1 className="font-display text-3xl ">Hi, Harshit 👋</h1>
        </div>
      </div>

      <div className="rounded-xl border-2 mt-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full`}
              style={{ backgroundColor: 'rgba(28, 81, 54, 0.3)' }}
            >
              <Link className={`h-5 w-5`} color="#194d33" />
            </div>

            <div>
              <p className="text-xs font-mono">
                Your Link
              </p>
              <p>
                linksync/harshit.kumar
              </p>
            </div>
          </div>

          <div className="">
            <Button variant={"outline"} onClick={handleCopy}>
              {isCopied ? <Check /> : <Copy />}  <p className="text-xs font-mono">{isCopied ? "Copied" : "Copy"}</p>
            </Button>

            <Button variant={"outline"} className='ml-4'>
              <Share /> <p className="text-xs font-mono">Share</p>
            </Button>
          </div>
        </div>
      </div>

      <AddedLinks />

    </main>
  )
}

export default page