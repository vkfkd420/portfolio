<!-- Please remove this file from your project -->
<template>
  <div>
    <body class="is-preload">
      <!-- Nav -->
      <nav id="nav">
        <div class="fav">
          <div @click="top()">
            <img src="~/assets/images/fav.png" alt="" />
          </div>
          <div>
            <span>KHM's Portfolio</span>
          </div>
        </div>
        <ul class="container">
          <li><a href="#home">HOME</a></li>
          <li><a href="#work">ABOUT ME</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <!-- <li><a href="#contact">CONTACT</a></li> -->
        </ul>
      </nav>

      <!-- Home -->
      <article id="home" class="wrapper style1">
        <div class="container">
          <div class="row">
            <div class="col-4 col-5-large col-12-medium">
              <span class="image fit"><img src="~/assets/images/pic00.jpg" alt="" /></span>
            </div>
            <div class="col-8 col-7-large col-12-medium">
              <header>
                <h1>
                  Make it happen Websites,<br />
                  Solution, Platform
                </h1>
              </header>
              <p>
                다양한 환경과 개발 언어로 맞춤형 웹사이트를 구축합니다. 노하우가 담긴 프로젝트
                작업물을 살펴보세요. test
              </p>
            </div>
          </div>
        </div>
      </article>

      <!-- Work -->
      <article id="work" class="wrapper style2">
        <div class="container">
          <header>
            <h2><strong>About Me</strong></h2>
          </header>
          <div class="row aln-center">
            <div class="col-4 col-6-medium col-12-small">
              <section class="box style1">
                <img src="~/assets/images/profile.png" alt="profile" />
                <div class="inner">
                  <h3>이름</h3>
                  <p>강현민</p>
                </div>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="box style1">
                <img src="~/assets/images/calendar.png" alt="calendar" />
                <div class="inner">
                  <h3>생년월일</h3>
                  <p>94.04.20</p>
                </div>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="box style1">
                <img src="~/assets/images/home.png" alt="home" />
                <div class="inner">
                  <h3>주소지</h3>
                  <p>서울특별시 영등포구</p>
                </div>
              </section>
            </div>
          </div>
          <div class="row aln-center">
            <div class="col-4 col-6-medium col-12-small">
              <section class="box style1">
                <img src="~/assets/images/tel.png" alt="tel" />
                <div class="inner">
                  <h3>연락처</h3>
                  <p>010-2982-9609</p>
                </div>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="box style1">
                <img src="~/assets/images/email.png" alt="email" />
                <div class="inner">
                  <h3>이메일</h3>
                  <p>vkfkd420@naver.com</p>
                </div>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="box style1">
                <img src="~/assets/images/education.png" alt="education" />
                <div class="inner">
                  <h3>학력</h3>
                  <p>서일대학교(정보통신학과)</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <article id="skills" class="wrapper style5">
        <div class="container">
          <header>
            <h2><strong>Skills</strong></h2>
          </header>
          <div class="row aln-center">
            <div class="skill-content">
              <div class="skill-title">
                <strong>Front-end</strong>
              </div>
              <img src="~/assets/images/front.png" alt="front" style="width: 700px" />
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <strong>Back-end</strong>
              </div>
              <img src="~/assets/images/back.png" alt="back" style="width: 300px" />
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <strong>Library</strong>
              </div>
              <img src="~/assets/images/tool.png" alt="tool" style="width: 230px" />
            </div>
          </div>
        </div>
      </article>

      <!-- Portfolio -->
      <Project />

      <!-- Contact -->
      <article id="contact" class="wrapper style4">
        <div class="container medium">
          <footer>
            <ul id="copyright">
              <li><strong>Make by me</strong></li>
              <!-- <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> -->
              <li>
                <a href="#" class="icon brands fa-github"><span class="label">Github</span></a>
              </li>
            </ul>
          </footer>
        </div>
      </article>

      <!-- Scripts -->
      <!-- <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script> -->
    </body>
  </div>
</template>

<script>
import Project from '~/components/Project'
export default {
  name: 'Main',
  components: {
    Project
  },
  methods: {
    top () {

    }
  }
}
</script>
