<template>
  <article id="portfolio" class="wrapper style3">
    <div class="container">
      <header>
        <h2><Strong>Project</Strong></h2>
        <!-- <p>Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.</p> -->
      </header>
      <div class="row">
        <div class="col-4 col-6-medium col-12-small" v-for="(item, idx) in project" :key="idx">
          <article class="box style2">
            <a :href="item.url" class="image featured" target="_blank"
              ><img :src="item.img" alt=""
            /></a>
            <h3>
              <a href="#">{{ item.title }}</a>
            </h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <!-- <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="~/assets/images/pic02.jpg" alt="" /></a>
            <h3><a href="#">2번 프로젝트</a></h3>
            <p>Ornare nulla proin odio consequat.</p>
          </article>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="~/assets/images/pic03.jpg" alt="" /></a>
            <h3><a href="#">3번 프로젝트</a></h3>
            <p>Ornare nulla proin odio consequat.</p>
          </article>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="~/assets/images/pic04.jpg" alt="" /></a>
            <h3><a href="#">4번 프로젝트</a></h3>
            <p>Ornare nulla proin odio consequat.</p>
          </article>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="~/assets/images/pic05.jpg" alt="" /></a>
            <h3><a href="#">5번 프로젝트</a></h3>
            <p>Ornare nulla proin odio consequat.</p>
          </article>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="~/assets/images/pic06.jpg" alt="" /></a>
            <h3><a href="#">6번 프로젝트</a></h3>
            <p>Ornare nulla proin odio consequat.</p>
          </article>
        </div> -->
      </div>
      <!-- <footer>
        <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
        <a href="#contact" class="button large scrolly">Get in touch with me</a>
      </footer> -->
    </div>
  </article>
</template>
<script>
export default {
  data: () => ({
    project: [
      { title: '프로젝트1', text: '설명입니다1', img: require('@/assets/images/pic01.jpg'), url: 'url입니다1' },
      { title: '프로젝트2', text: '설명입니다2', img: require('@/assets/images/pic02.jpg'), url: 'url입니다1' },
      { title: '프로젝트3', text: '설명입니다3', img: require('@/assets/images/pic03.jpg'), url: 'url입니다1' },
      { title: '프로젝트4', text: '설명입니다4', img: require('@/assets/images/pic04.jpg'), url: 'url입니다1' },
      { title: '프로젝트5', text: '설명입니다5', img: require('@/assets/images/pic05.jpg'), url: 'url입니다1' },
      { title: '프로젝트6', text: '설명입니다6', img: require('@/assets/images/pic06.jpg'), url: 'url입니다1' }
    ]
  })
}
</script>
