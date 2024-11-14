'use client'

import { ReactNode } from 'react'

interface AppDashboardLayoutProps {
  children?: ReactNode
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-sm">
          <nav className="p-4">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            {/* Add navigation items here */}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  )
}
