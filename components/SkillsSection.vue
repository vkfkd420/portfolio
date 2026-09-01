<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Skills</h2>

      <div class="skills-box" v-reveal>
        <div
          class="quadrant"
          v-for="category in skillCategories"
          :key="category.title"
        >
          <h3>{{ category.title }}</h3>
          <ul class="skill-list">
            <li v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <img
                v-if="skill.icon"
                :src="icons[skill.icon]"
                :alt="`${skill.name} logo`"
                class="skill-icon"
                loading="lazy"
                decoding="async"
              />
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillCategories } from '~/data/skills.js'
import vuejs from '~/assets/img/skills/vuejs.svg'
import nuxtjs from '~/assets/img/skills/nuxtjs.svg'
import html5 from '~/assets/img/skills/html5.svg'
import css3 from '~/assets/img/skills/css3.svg'
import javascript from '~/assets/img/skills/javascript.svg'
import jquery from '~/assets/img/skills/jquery.svg'
import bootstrap from '~/assets/img/skills/bootstrap.svg'
import spring from '~/assets/img/skills/spring.svg'
import java from '~/assets/img/skills/java.svg'
import oracle from '~/assets/img/skills/oracle.svg'
import mariadb from '~/assets/img/skills/mariadb.svg'
import mysql from '~/assets/img/skills/mysql.svg'
import git from '~/assets/img/skills/git.svg'
import sourcetree from '~/assets/img/skills/sourcetree.svg'
import figma from '~/assets/img/skills/figma.svg'
import googleAnalytics from '~/assets/img/skills/google-analytics.svg'

const icons = {
  vuejs,
  nuxtjs,
  html5,
  css3,
  javascript,
  jquery,
  bootstrap,
  spring,
  java,
  oracle,
  mariadb,
  mysql,
  git,
  sourcetree,
  figma,
  'google-analytics': googleAnalytics
}
</script>
