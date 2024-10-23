<template>
  <div class="publications">
    <h2>Publications</h2>
    <div
      v-for="publication in publications"
      :key="publication.id"
      class="publication-card"
      @click="flipCard(publication)"
    >
      <div
        class="card-content"
        :class="{ 'is-flipped': publication.isFlipped }"
      >
        <div class="front">
          <h3>{{ publication.title }}</h3>
          <p class="journal">{{ publication.journal }}</p>
          <p class="date">{{ publication.date }}</p>
        </div>
        <div class="back">
          <h4>{{ publication.title }}</h4>
          <p class="summary">{{ publication.summary }}</p>
          <a
            :href="publication.link"
            target="_blank"
            rel="noopener noreferrer"
            class="publication-link"
            @click.stop
            >Read More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Publication } from '@/types'

const publications = ref<Publication[]>([
  {
    id: 1,
    title: 'Total solar eclipse 2017 in USA: deep coronal spectra',
    journal: 'SF2A',
    date: 'December, 2019',
    link: 'https://ui.adsabs.harvard.edu/abs/2019sf2a.conf..363K/abstract',
    summary:
      'This paper presents deep coronal spectra obtained during the 2017 total solar eclipse in the USA. It discusses the methodology, observations, and implications for our understanding of the solar corona.',
    isFlipped: false,
  },
  {
    id: 2,
    title: 'New deep coronal spectra from the 2017 total solar eclipse',
    journal: 'Astronomy & Astrophysics',
    date: 'December, 2019',
    link: 'https://www.aanda.org/articles/aa/abs/2019/12/aa35681-19/aa35681-19.html',
    summary:
      'This study provides an in-depth analysis of new deep coronal spectra collected during the 2017 total solar eclipse. It offers insights into the composition and dynamics of the solar corona.',
    isFlipped: false,
  },
  {
    id: 3,
    title: 'Eclipse 2017: new results on the dynamical inner-corona',
    journal: 'SF2A',
    date: 'December, 2019',
    link: 'https://ui.adsabs.harvard.edu/abs/2019sf2a.conf..361K/abstract',
    summary:
      'This paper presents new findings on the dynamical inner-corona based on observations from the 2017 solar eclipse. It discusses the implications for our understanding of solar dynamics and coronal heating.',
    isFlipped: false,
  },
  {
    id: 4,
    title:
      'Pointing the NTT at the Sun: Studying the Solar Corona During the Total Eclipse',
    journal: 'The Messenger',
    date: 'September, 2019',
    link: 'https://www.eso.org/sci/publications/messenger/archive/no.177-sep19/messenger-no177-54-55.pdf',
    summary:
      'This article describes the innovative use of the New Technology Telescope (NTT) to study the solar corona during a total eclipse. It details the technical challenges and scientific outcomes of this unique observational approach.',
    isFlipped: false,
  },
])

const flipCard = (publication: Publication): void => {
  publication.isFlipped = !publication.isFlipped
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Agdasima';

.publications {
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

.publication-card {
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
  justify-content: space-between;
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

h3,
h4 {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-family: 'Agdasima', sans-serif;
  font-size: 1.8rem;
  text-align: center;
}

.journal {
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

.summary {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  text-align: justify;
}

.publication-link {
  display: inline-block;
  color: #ffd700;
  text-decoration: none;
  border: 1px solid #ffd700;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.3s;
  text-align: center;
}

.publication-link:hover {
  background-color: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

@media (max-width: 1200px) {
  .publication-card {
    width: 350px;
    height: 350px;
  }
  h3,
  h4 {
    font-size: 1.6rem;
  }
  .journal {
    font-size: 1.2rem;
  }
  .date {
    font-size: 1.1rem;
  }
  .summary {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .publication-card {
    width: 300px;
    height: 300px;
  }
  h3,
  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .journal {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  .date {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .summary {
    font-size: 0.8rem;
  }
  .front,
  .back {
    padding: 20px;
  }
}

@media (hover: hover) {
  .publication-card:hover .card-content {
    transform: rotateY(180deg);
  }
}
</style>
