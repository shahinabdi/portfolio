<template>
  <div class="app">
    <div class="blurry-background"></div>
    <Sidebar
      :activeSection="activeSection"
      @section-change="changeSection"
      :class="{ 'mobile-hidden': isMobileMenuClosed }"
    />
    <div class="mobile-header">
      <button @click="toggleMobileMenu" class="hamburger-menu">☰</button>
      <h1>Shahin ABDI</h1>
    </div>
    <div v-if="!isMobileMenuClosed" class="mobile-menu">
      <div class="profile">
        <img src="/images/profile.jpg" alt="Shahin ABDI" />
        <h2>Shahin ABDI</h2>
        <p>Data Engineer | Python Developer</p>
        <p>Paris, France</p>
        <p>contact@shahinabdi.fr</p>
      </div>
      <nav>
        <ul>
          <li
            v-for="section in sections"
            :key="section.id"
            :class="{ active: activeSection === section.id }"
            @click="changeSection(section.id)"
          >
            {{ section.name }}
          </li>
        </ul>
      </nav>
    </div>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from './components/SidebarComponent.vue'
import type { Section } from '@/types'

const router = useRouter()
const activeSection = ref<string>('experiences')
const isMobileMenuClosed = ref<boolean>(true)

const sections: Section[] = [
  { id: 'experiences', name: 'Professional Experiences' },
  { id: 'education', name: 'Education' },
  { id: 'projects', name: 'Projects' },
  { id: 'publications', name: 'Publications' },
]

const changeSection = (section: string): void => {
  activeSection.value = section
  router.push({ name: section })
  isMobileMenuClosed.value = true
}

const toggleMobileMenu = (): void => {
  isMobileMenuClosed.value = !isMobileMenuClosed.value
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #121212;
}

.app {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.blurry-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      45deg,
      rgba(29, 38, 113, 0.8),
      rgba(195, 55, 100, 0.8)
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  filter: blur(100px);
  transform: scale(1.1);
  z-index: -1;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  width: calc(100vw - 300px);
  background-color: rgba(28, 28, 30, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.mobile-header {
  display: none;
  background-color: rgba(44, 44, 46, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.hamburger-menu {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(44, 44, 46, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999;
  overflow-y: auto;
  padding: 1rem;
  text-align: center;
}

.mobile-menu .profile {
  margin-bottom: 2rem;
}

.mobile-menu .profile img {
  width: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.mobile-menu .profile h2 {
  margin: 0.5rem 0;
}

.mobile-menu .profile p {
  margin: 0.25rem 0;
}

.mobile-menu nav {
  display: flex;
  justify-content: center;
}

.mobile-menu nav ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 300px;
}

.mobile-menu nav ul li {
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu nav ul li:last-child {
  border-bottom: none;
}

.mobile-menu nav ul li.active {
  color: #00adb5;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }
  .mobile-header {
    display: flex;
    align-items: center;
  }
  .mobile-header h1 {
    margin-left: 1rem;
  }
  .mobile-menu {
    display: block;
  }
  .main-content {
    padding-top: 4rem;
    width: 100vw;
  }
  .mobile-hidden {
    display: none;
  }
}
</style>
