<template>
  <div class="experiences">
    <h2>Professional Experiences</h2>
    <div
      v-for="experience in experiences"
      :key="experience.id"
      class="experience-card"
      @click="flipCard(experience)"
    >
      <div class="card-content" :class="{ 'is-flipped': experience.isFlipped }">
        <div class="front">
          <h3>{{ experience.title }}</h3>
          <p class="company">{{ experience.company }}</p>
          <p class="date">{{ experience.date }}</p>
        </div>
        <div class="back">
          <ul>
            <li v-for="(detail, index) in experience.details" :key="index">
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
import type { Experience } from '@/types'

const experiences = ref<Experience[]>([
  {
    id: 1,
    title: 'Python Developer',
    company: 'Institute of Space Astrophysics',
    date: 'July 2023 - Present',
    details: [
      "Optimized Python code for ESA's PLATO mission, improving performance by 40%.",
      'Implemented rigorous unit and integration tests, reducing bugs by 30%.',
      'Successfully integrated optimized code into the data processing pipeline, accelerating analysis by 25%.',
    ],
    isFlipped: false,
  },
  {
    id: 2,
    title: 'Python Developer',
    company: 'Institute of Space Astrophysics',
    date: 'August 2021 - June 2023',
    details: [
      'Developed a robust database management platform using Django, increasing data processing efficiency by 35%.',
      'Created a user interface that integrates seamlessly with the backend, enhancing overall system cohesion.',
      'Dockerized the project and implemented Docker Compose, streamlining deployment and improving scalability.',
    ],
    isFlipped: false,
  },
  {
    id: 3,
    title: "Master's Intern",
    company: 'LATMOS-CNRS',
    date: 'March 2020 - September 2020',
    details: [
      'Optimized Python programs for complex atmospheric calculations, reducing computation time by 45%.',
      'Managed and analyzed extensive atmospheric datasets using MongoDB and R.',
      'Conducted large-scale simulations of terrestrial spectra for improved understanding of atmospheric phenomena.',
    ],
    isFlipped: false,
  },
  {
    id: 4,
    title: 'Research Assistant',
    company: 'IAS-IAP',
    date: 'April-June 2018 and April-June 2019 (Two 3-month periods)',
    details: [
      'Co-authored "New deep coronal spectra from the 2017 total solar eclipse", published in A&A, 632 (2019) A86.',
      'Contributed to "Pointing the NTT at the Sun: Studying the Solar Corona During the Total Eclipse", The Messenger, 177, 54-55 (2019).',
      'Conducted spectral analysis of the solar corona, enhancing understanding of solar physics.',
    ],
    isFlipped: false,
  },
])

const flipCard = (experience: Experience): void => {
  experience.isFlipped = !experience.isFlipped
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Agdasima';

.experiences {
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

.experience-card {
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

.company {
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
  .experience-card {
    width: 350px;
    height: 350px;
  }
  h3 {
    font-size: 1.8rem;
  }
  .company {
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
  .experience-card {
    width: 300px;
    height: 300px;
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .company {
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
  .experience-card:hover .card-content {
    transform: rotateY(180deg);
  }
}
</style>
