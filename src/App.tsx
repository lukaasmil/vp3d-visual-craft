
import React from 'react'
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarInset } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/toaster'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarHeader>
              <h2 className="text-lg font-semibold">Navigation</h2>
            </SidebarHeader>
            <SidebarContent>
              <p className="p-4 text-sm text-muted-foreground">
                Sidebar content goes here
              </p>
            </SidebarContent>
            <SidebarFooter>
              <p className="text-xs text-muted-foreground">Footer</p>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <main className="flex-1 p-6">
              <h1 className="text-3xl font-bold">Welcome to your app</h1>
              <p className="mt-4 text-muted-foreground">
                Your application is now running with the sidebar component.
              </p>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Toaster />
    </div>
  )
}

export default App
