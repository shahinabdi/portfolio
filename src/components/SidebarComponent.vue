<template>
  <div class="sidebar glass-effect">
    <div class="content">
      <div class="profile">
        <img src="/images/profile.jpg" alt="Shahin ABDI" />
        <h2>Shahin ABDI</h2>
        <p>Data Engineer | Python Developer</p>
        <p>Paris, France</p>
        <p>contact@shahinabdi.fr</p>
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

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
