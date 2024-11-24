import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <>
      <SidebarRail />
      <Sidebar>
        <SidebarHeader />
        <SidebarContent className="flex flex-col items-center justify-center">
          <SidebarMenuButton asChild>
            <a href="#">Profile</a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="#">Experience</a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="#">Project</a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="#">Contact</a>
          </SidebarMenuButton>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}
