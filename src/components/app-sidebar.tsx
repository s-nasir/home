import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <>
      <SidebarRail />
      <Sidebar>
        <SidebarHeader />
          <SidebarContent className="flex flex-col items-center justify-center">
            <SidebarMenuButton asChild>
              <a href="#">Home</a>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <a href="#">Home</a>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <a href="#">Home</a>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <a href="#">Home</a>
            </SidebarMenuButton>
          </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  )
}
