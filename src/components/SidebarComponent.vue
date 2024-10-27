<template>
  <div class="sidebar glass-effect">
    <div class="content">
      <div class="profile">
        <img src="/images/profile.jpg" alt="Shahin ABDI" />
        <h2>Shahin ABDI</h2>
        <p>Data Engineer | Python Developer</p>
        <p>Paris, France</p>
        <p>contact@shahinabdi.fr</p>
        <div class="social-links">
          <a
            href="https://linkedin.com/in/shahinabdi"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/shahinabdi"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
      <nav class="nav">
        <ul>
          <li
            v-for="section in sections"
            :key="section.id"
            :class="{ active: activeSection === section.id }"
            @click="$emit('section-change', section.id)"
          >
            {{ section.name }}
          </li>
        </ul>
      </nav>
      <hr />
      <div class="skills">
        <h3>Skills</h3>
        <div class="skills-container">
          <div v-for="skill in skills" :key="skill.name" class="skill">
            <div class="circle">
              <svg width="75" height="75">
                <circle
                  cx="37.5"
                  cy="37.5"
                  r="33.5"
                  fill="none"
                  stroke="#333"
                  stroke-width="4"
                />
                <circle
                  class="progress"
                  cx="37.5"
                  cy="37.5"
                  r="33.5"
                  fill="none"
                  stroke="#00ffff"
                  stroke-width="4"
                  :stroke-dasharray="circumference"
                  :stroke-dashoffset="circumference"
                  transform="rotate(-90 37.5 37.5)"
                />
              </svg>
              <div class="percentage">{{ skill.level }}%</div>
            </div>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="coding">
        <h3>Coding</h3>
        <div class="coding-container">
          <div v-for="skill in codingSkills" :key="skill.name" class="skill">
            <div class="circle">
              <svg width="75" height="75">
                <circle
                  cx="37.5"
                  cy="37.5"
                  r="33.5"
                  fill="none"
                  stroke="#333"
                  stroke-width="4"
                />
                <circle
                  class="progress"
                  cx="37.5"
                  cy="37.5"
                  r="33.5"
                  fill="none"
                  stroke="#00ffff"
                  stroke-width="4"
                  :stroke-dasharray="circumference"
                  :stroke-dashoffset="circumference"
                  transform="rotate(-90 37.5 37.5)"
                />
              </svg>
              <div class="percentage">{{ skill.level }}%</div>
            </div>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="other-skills">
        <h3>Other Skills</h3>
        <div class="other-skills-container">
          <p v-for="skill in otherSkills" :key="skill">{{ skill }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Section, BaseSkill } from '@/types'

interface Props {
  activeSection: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'section-change': [section: string]
}>()

const sections = ref<Section[]>([
  { id: 'experiences', name: 'Professional Experiences' },
  { id: 'education', name: 'Education' },
  { id: 'projects', name: 'Projects' },
  { id: 'publications', name: 'Publications' },
])

const skills = ref<BaseSkill[]>([
  { name: 'Programming', level: 90 },
  { name: 'Data Analysis', level: 87 },
  { name: 'Web Development', level: 80 },
  { name: 'Cloud', level: 70 },
])

const codingSkills = ref<BaseSkill[]>([
  { name: 'Python', level: 86 },
  { name: 'R', level: 70 },
  { name: 'C#', level: 60 },
  { name: 'JavaScript', level: 75 },
])

const otherSkills = ref<string[]>([
  'Python',
  'JavaScript',
  'TypeScript',
  'C#.NET',
  // ... rest of your skills
])

const circumference = computed((): number => 2 * Math.PI * 33.5)

onMounted((): void => {
  setTimeout(() => {
    const circles = document.querySelectorAll('.progress')
    circles.forEach((circle, index) => {
      const skill = [...skills.value, ...codingSkills.value][index]
      const offset =
        circumference.value - (skill.level / 100) * circumference.value
      ;(circle as HTMLElement).style.strokeDashoffset = offset.toString()
    })
  }, 300)
})

const dashOffset = (level: number): number => {
  return circumference.value - (level / 100) * circumference.value
}
</script>
<style scoped>
.sidebar {
  width: 300px;
  background: #2c2c2e;
  padding: 2.5rem;
  box-sizing: border-box;
  overflow-y: auto;
}
.glass-effect {
  background: rgba(44, 44, 46, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.profile {
  text-align: center;
  margin-bottom: 20px;
}

.profile img {
  width: 100px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.profile h2 {
  margin: 10px 0 5px;
  color: rgba(255, 255, 255, 0.9);
}

hr {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.skills,
.coding,
.other-skills {
  margin-bottom: 20px;
}

.skills h3,
.coding h3,
.other-skills h3 {
  margin-bottom: 10px;
}

.nav ul {
  list-style: none;
  padding: 0;
}

.nav ul li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.nav ul li:hover {
  background: rgba(0, 185, 219, 0.3);
}

.skills-container,
.coding-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill {
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.skill p {
  margin-top: 10px;
  text-align: center;
}

.circle {
  position: relative;
  width: 75px;
  height: 75px;
}

.circle svg {
  position: absolute;
  top: 0;
  left: 0;
}

.circle .percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 255, 255, 0.9);
}
.circle .progress {
  transition: stroke-dashoffset 1s ease-in-out;
}

.other-skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.other-skills-container p {
  margin: 0;
  padding: 5px 10px;
  background: rgba(28, 28, 30, 0.5);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  flex: 1 1 auto;
  text-align: center;
}

.other-skills-container p:hover {
  transform: scale(1.1);
  background: rgba(0, 185, 219, 0.3);
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.7);
  transition:
    color 0.3s,
    transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  color: rgba(0, 255, 255, 0.9);
  transform: scale(1.1);
}

.social-icon {
  width: 24px;
  height: 24px;
}
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
