<template>
  <div class="projects">
    <h2>Projects</h2>
    <div
      v-for="project in projects"
      :key="project.id"
      class="project-card"
      @click="flipCard(project)"
    >
      <div class="card-content" :class="{ 'is-flipped': project.isFlipped }">
        <div class="front">
          <h3>{{ project.title }}</h3>
          <p class="date">{{ project.date }}</p>
        </div>
        <div class="back">
          <ul>
            <li v-for="(detail, index) in project.details" :key="index">
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
import type { Project } from '@/types'

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'PLATO Mission',
    date: 'Ongoing',
    type: 'Professional Project',
    details: [
      "Developing and optimizing Python code for ESA's PLATO mission.",
      'Improved code performance by 40% through refactoring and pythonization.',
      'Implemented rigorous unit and integration tests, reducing bugs by 30%.',
      'Integrated optimized code into the data processing pipeline, accelerating analysis by 25%.',
      'Collaborating with international teams to enhance exoplanet detection algorithms.',
    ],
    isFlipped: false,
  },
  {
    id: 2,
    title: 'RENOIR Web Application',
    date: 'Completed',
    type: 'Professional Project',
    details: [
      'Developed a web application using Django framework.',
      'Implemented user authentication and authorization systems.',
      'Created dynamic data visualization tools for scientific data analysis.',
      'Integrated database management functionalities for efficient data handling.',
      'Ensured responsive design for optimal user experience across devices.',
    ],
    isFlipped: false,
  },
  {
    id: 3,
    title: 'FAO Database Analysis',
    date: '2021',
    type: 'University Project',
    details: [
      'Analyzed FAO database using Python and R.',
      'Developed data visualization and analysis tools.',
      'Deployed the project using R Shiny for interactive web-based presentation.',
      'Showcased data analysis and visualization skills in an agricultural context.',
    ],
    isFlipped: false,
  },
  {
    id: 4,
    title: 'Gaia DR2 Data Analysis with Machine Learning',
    date: '2022',
    type: 'University Project',
    details: [
      'Implemented machine learning algorithms to classify stars using Gaia DR2 data.',
      'Developed a Flask web application for model deployment and user interaction.',
      'Trained the model to accurately classify different types of stars based on Gaia DR2 parameters.',
      'Demonstrated proficiency in astronomical data analysis and machine learning techniques.',
    ],
    isFlipped: false,
  },
  {
    id: 5,
    title: 'Expert Advisors for MT4/MT5',
    date: 'Ongoing',
    type: 'Personal Project',
    details: [
      'Developed multiple Expert Advisors (EAs) for MetaTrader 4 and 5 platforms.',
      'Utilized MQL language to create automated trading strategies.',
      'Implemented various trading algorithms and risk management techniques.',
      'Continuously optimized and back-tested EAs for improved performance.',
    ],
    isFlipped: false,
  },
  {
    id: 6,
    title: 'AI-Powered Trader Statement Analysis Dashboard',
    date: 'Ongoing',
    type: 'Personal Project',
    details: [
      'Developing a web application for analyzing trader statements using AI.',
      'Implementing a dashboard using Django (backend) and React (frontend).',
      'Incorporating AI algorithms for pattern recognition and performance analysis.',
      'Containerizing the application using Docker for easy deployment and scalability.',
      'Focusing on creating an intuitive user interface for effective data visualization.',
    ],
    isFlipped: false,
  },
  {
    id: 7,
    title: 'Trading Dashboard for cTrader',
    date: 'Ongoing',
    type: 'Personal Project',
    details: [
      'Developed a custom trading dashboard for cTrader platform using C#.',
      'Implemented real-time market data visualization and analysis tools.',
      'Created user-friendly interface for monitoring multiple trading accounts and instruments.',
      'Integrated advanced risk management features and performance analytics.',
      'Utilized C# to ensure high performance and seamless integration with cTrader API.',
    ],
    isFlipped: false,
  },
])

const flipCard = (project: Project): void => {
  project.isFlipped = !project.isFlipped
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Agdasima';

.projects {
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

.project-card {
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
  .project-card {
    width: 350px;
    height: 350px;
  }
  h3 {
    font-size: 1.8rem;
  }
  .date {
    font-size: 1.1rem;
  }
  li {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .project-card {
    width: 300px;
    height: 300px;
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
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
  .project-card:hover .card-content {
    transform: rotateY(180deg);
  }
}
</style>
