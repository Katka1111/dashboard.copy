'use client'

import { ReactNode } from 'react'




export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm">
          <nav className="p-4 h-full">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            {/* Add navigation items here */}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  )
}
