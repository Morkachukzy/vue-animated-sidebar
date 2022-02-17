<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed"> Vue Sidebar</span>
      <span v-else>
        <div>V</div>
        <div>S</div>
      </span>
    </h1>
    <sidebar-link
      :icon="sidebarLink.icon"
      :to="sidebarLink.to"
      v-for="sidebarLink in sidebarLinks"
      :key="sidebarLink.to"
    >
      {{ sidebarLink.name }}
    </sidebar-link>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>

<script>
import { collapsed, sidebarWidth, toggleSidebar } from "@/components/sidebar/state";
import SidebarLink from "@/components/sidebar/SidebarLink";

export default {
  name: "Sidebar",
  components: { SidebarLink },
  setup() {
    const sidebarLinks = [
      {
        name: "Home",
        to: "/",
        icon: "fas fa-home"
      },
      {
        name: "Dashboard",
        to: "/dashboard",
        icon: "fas fa-columns"
      },
      {
        name: "Analytics",
        to: "/analytics",
        icon: "fas fa-chart-bar"
      },
      {
        name: "Friends",
        to: "/friends",
        icon: "fas fa-users"
      },
      {
        name: "Images",
        to: "/images",
        icon: "fas fa-image"
      }
    ];
    return { collapsed, toggleSidebar, sidebarWidth, sidebarLinks };
  }
};
</script>
<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>
<style scoped>


.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>