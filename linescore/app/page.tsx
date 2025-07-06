"use client"

import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Input
        placeholder="Type something…"
        className="w-full max-w-md"
      />
    </div>
  )
}
