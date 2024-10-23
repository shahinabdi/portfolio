<template>
  <div class="education">
    <h2>Education</h2>
    <div
      v-for="education in educations"
      :key="education.id"
      class="education-card"
      @click="flipCard(education)"
    >
      <div class="card-content" :class="{ 'is-flipped': education.isFlipped }">
        <div class="front">
          <h3>{{ education.title }}</h3>
          <p class="institution">{{ education.company }}</p>
          <p class="date">{{ education.date }}</p>
        </div>
        <div class="back">
          <ul>
            <li v-for="(detail, index) in education.details" :key="index">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Education } from '@/types'

const educations = ref<Education[]>([
  {
    id: 5,
    title: 'M.Sc. Data Science & Management',
    company: 'IASchool- GroupeGEMA, Paris',
    date: '2020 - 2022',
    details: [
      'Specialized in advanced data analysis techniques and machine learning algorithms.',
      'Completed key projects including predictive analysis of market trends and development of ML models for fraud detection.',
      'Gained proficiency in Python, R, and various data visualization tools.',
    ],
    isFlipped: false,
  },
  {
    id: 6,
    title: 'M.Sc. Astronomy and Astrophysics',
    company: 'Paris Observatory, Meudon',
    date: '2017 - 2020',
    details: [
      'Focused on advanced concepts in astronomy and astrophysics.',
      'Conducted research project on spectral analysis of the solar corona.',
      'Developed strong analytical and problem-solving skills through complex astronomical calculations.',
    ],
    isFlipped: false,
  },
  {
    id: 7,
    title: 'Professional Training',
    company: 'Various Institutions',
    date: 'November 2023',
    details: [
      'Completed intensive course on Distributed Version Control with Git (2 days) at IJCLab - CNRS.',
      'Attended advanced Python programming for scientific applications (4 days) at Pythagore FD - CNRS.',
      'Enhanced skills in version control, collaborative coding, and scientific programming techniques.',
    ],
    isFlipped: false,
  },
])

const flipCard = (education: Education): void => {
  education.isFlipped = !education.isFlipped
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Agdasima';

.education {
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h2 {
  color: #ffffff;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  text-align: center;
  font-family: 'Agdasima', sans-serif;
  font-size: 3rem;
}

.education-card {
  width: 400px;
  height: 400px;
  margin: 20px;
  perspective: 1000px;
  cursor: pointer;
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-content.is-flipped {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
}

.front {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.back {
  background: rgb(3, 68, 106);
  color: white;
  transform: rotateY(180deg);
  overflow-y: auto;
}

h3 {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-family: 'Agdasima', sans-serif;
  font-size: 2rem;
  text-align: center;
}

.institution {
  color: #00ffd5;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
}

.date {
  color: #00d0ff;
  margin-bottom: 1.5rem;
  font-style: italic;
  font-size: 1.2rem;
  text-align: center;
}

ul {
  padding-left: 2rem;
  margin-bottom: 0;
  text-align: left;
}

li {
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.5;
}

li:last-child {
  margin-bottom: 0;
}

@media (max-width: 1200px) {
  .education-card {
    width: 350px;
    height: 350px;
  }
  h3 {
    font-size: 1.8rem;
  }
  .institution {
    font-size: 1.2rem;
  }
  .date {
    font-size: 1.1rem;
  }
  li {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .education-card {
    width: 300px;
    height: 300px;
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .institution {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  .date {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  li {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
  .front,
  .back {
    padding: 20px;
  }
  ul {
    padding-left: 1.5rem;
  }
}

@media (hover: hover) {
  .education-card:hover .card-content {
    transform: rotateY(180deg);
  }
}
</style>
