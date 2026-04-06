import { useState } from 'react'
import TailwindTest from './shared/ui/TailwindTest'

const MAX_COUNT = Number.MAX_SAFE_INTEGER

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <main className="mx-auto flex max-w-3xl flex-col gap-4 p-8">
        <h1 className="text-2xl font-semibold tracking-tight">VibeBoard</h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setCount((c) => (c < MAX_COUNT ? c + 2 : c))
            }
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 active:bg-blue-700"
          >
            Счётчик: {count}
          </button>
        </div>
        <TailwindTest />
      </main>
    </div>
  )
}
