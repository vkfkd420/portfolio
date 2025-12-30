import { a as buildAssetsURL } from '../_/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://C:/workspace/portfolio/node_modules/vue/server-renderer/index.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'file://C:/workspace/portfolio/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'file://C:/workspace/portfolio/node_modules/swiper/swiper-vue.mjs';
import 'file://C:/workspace/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/workspace/portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/workspace/portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/workspace/portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/workspace/portfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/workspace/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/workspace/portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/workspace/portfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/workspace/portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/unhead/dist/server.mjs';
import 'file://C:/workspace/portfolio/node_modules/devalue/index.js';
import 'file://C:/workspace/portfolio/node_modules/unhead/dist/utils.mjs';
import 'file://C:/workspace/portfolio/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/workspace/portfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/vue-router/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("hero-avatar.CPLXj3ac.jpg");
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const displayedSubtitle = ref("");
    const careersYear = computed(() => {
      const startDate = /* @__PURE__ */ new Date("2022-02-01");
      const today = /* @__PURE__ */ new Date();
      let years = today.getFullYear() - startDate.getFullYear();
      const m = today.getMonth() - startDate.getMonth();
      if (m < 0 || m === 0 && today.getDate() < startDate.getDate()) {
        years--;
      }
      return years + 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}><div class="container hero-content"><div class="hero-text"><span class="subtitle">${ssrInterpolate(displayedSubtitle.value)}<span class="typing-cursor"></span></span><h1 class="title">Clean Code,<br>Clear Experience.</h1><p class="description"> \uB354 \uB098\uC740 \uD611\uC5C5\uACFC \uC720\uC9C0\uBCF4\uC218\uB97C \uC704\uD574 \uC815\uB3C8\uB41C \uCF54\uB4DC\uB97C \uB9CC\uB4E4\uACE0\uC790 \uB04A\uC784\uC5C6\uC774 \uB178\uB825\uD558\uB294,<br><span class="highlight-year">${ssrInterpolate(careersYear.value)}\uB144\uCC28</span> \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \uAC15\uD604\uBBFC\uC785\uB2C8\uB2E4. </p><a href="#contact" class="btn">Get in Touch</a></div><div class="hero-image"><img${ssrRenderAttr("src", _imports_0)} alt="Developer Avatar" class="avatar-shimmer"></div></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "section"
  }, _attrs))} data-v-240443df><div class="container" data-v-240443df><h2 class="section-title" data-v-240443df>About Me &amp; Growth Process</h2><div class="about-content" data-v-240443df><p data-v-240443df><strong data-v-240443df>&quot;\uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uC9D1\uC694\uD568\uACFC \uAF3C\uAF3C\uD568&quot;</strong><br data-v-240443df> \uC5B4\uB9B0 \uC2DC\uC808 \uCEF4\uD4E8\uD130 \uBD84\uD574\uC640 \uC870\uB9BD \uACBD\uD5D8\uC744 \uD1B5\uD574 IT \uBD84\uC57C\uC5D0 \uAD00\uC2EC\uC744 \uAC00\uC9C0\uAC8C \uB418\uC5C8\uACE0, \uC774\uB54C \uCCB4\uB4DD\uD55C \uC9D1\uC694\uD568\uACFC \uD0D0\uAD6C\uC2EC\uC740 \uD604\uC7AC\uAE4C\uC9C0\uB3C4 \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uD559\uC2B5\uD558\uB294 \uC6D0\uB3D9\uB825\uC774 \uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uAF3C\uAF3C\uD55C \uC131\uACA9\uC73C\uB85C \uC778\uD574 \uC2DC\uAC04\uC774 \uB354 \uC18C\uC694\uB418\uAE30\uB3C4 \uD558\uC9C0\uB9CC, \uACC4\uD68D\uC801\uC778 \uC5C5\uBB34 \uAD00\uB9AC\uB85C \uC774\uB97C \uBCF4\uC644\uD558\uBA70 \uC624\uD788\uB824 \uC644\uC131\uB3C4 \uB192\uC740 \uC11C\uBE44\uC2A4\uB97C \uB9CC\uB4DC\uB294 \uAC15\uC810\uC73C\uB85C \uD65C\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. </p><p data-v-240443df><strong data-v-240443df>&quot;\uC18C\uD1B5\uACFC \uD611\uC5C5\uC744 \uD1B5\uD55C \uC131\uC7A5&quot;</strong><br data-v-240443df> \uB3D9\uB8CC\uB4E4\uACFC \uAE0D\uC815\uC801\uC778 \uD0DC\uB3C4\uB85C \uAD00\uACC4\uB97C \uC720\uC9C0\uD558\uBA70, \uAC08\uB4F1 \uC5C6\uC774 \uC18C\uD1B5\uD558\uB294 \uAC83\uC744 \uC911\uC694\uD558\uAC8C \uC0DD\uAC01\uD569\uB2C8\uB2E4. \uC55E\uC73C\uB85C\uB3C4 \uBE60\uB978 \uD559\uC2B5 \uB2A5\uB825\uACFC \uC801\uADF9\uC801\uC778 \uC790\uC138\uB97C \uBC14\uD0D5\uC73C\uB85C \uBCC0\uD654\uD558\uB294 IT \uD658\uACBD \uC18D\uC5D0\uC11C \uC9C0\uC18D\uC801\uC73C\uB85C \uC131\uC7A5\uD558\uBA70, \uC548\uC815\uC801\uC774\uACE0 \uD6A8\uC728\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uAC1C\uBC1C\uD558\uB294 \uAC1C\uBC1C\uC790\uAC00 \uB418\uACA0\uC2B5\uB2C8\uB2E4. </p></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-240443df"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "skills",
    class: "section"
  }, _attrs))}><div class="container"><h2 class="section-title">Skills</h2><div class="skills-grid"><div class="skill-category"><h3>Frontend</h3><ul><li>Vue.js / Nuxt.js</li><li>HTML5 / CSS3</li><li>JavaScript (ES6+) / jQuery</li><li>Bootstrap</li></ul></div><div class="skill-category"><h3>Backend</h3><ul><li>Spring Framework</li><li>SpringBoot</li><li>Java</li></ul></div><div class="skill-category"><h3>Database / ORM</h3><ul><li>Oracle / MariaDB / MySQL</li><li>MyBatis</li></ul></div><div class="skill-category"><h3>Tools &amp; Others</h3><ul><li>Git / SourceTree</li><li>Figma</li><li>Google Analytics</li></ul></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SkillsSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "experience",
    class: "section"
  }, _attrs))}><div class="container"><h2 class="section-title">Experience</h2><div class="timeline"><div class="timeline-item"><span class="date">2022.01.03 - \uC7AC\uC9C1\uC911</span><div class="content"><h3>\uCC45\uC784 (Senior Researcher)</h3><span class="company">\uC53D\uD06C\uD480 (ThinkPool)</span><p> Vue, Nuxt, Spring, Oracle \uB4F1\uC744 \uD65C\uC6A9\uD55C \uD504\uB85C\uC81D\uD2B8 \uCC38\uC5EC.<br> \uB9C8\uC2A4\uD130\uD074\uB798\uC2A4, \uD0A4\uC6B0\uBBF8, \uD22C\uC790\uC758\uBE44\uCC45, \uB178\uC1FC\uB178 \uB4F1 \uB2E4\uC218\uC758 \uC6F9/\uC571 \uC11C\uBE44\uC2A4 \uAC1C\uBC1C \uBC0F \uC720\uC9C0\uBCF4\uC218. </p></div></div><div class="timeline-item"><span class="date">2018.03 - 2021.02</span><div class="content"><h3>\uC11C\uC77C\uB300\uD559\uAD50</h3><span class="company">\uC815\uBCF4\uD1B5\uC2E0\uD559\uACFC \uC878\uC5C5</span></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ExperienceSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const kiumi1 = "" + buildAssetsURL("kiumi-1.Cfz32nsV.png");
const kiumi2 = "" + buildAssetsURL("kiumi-2.DttBxa3f.png");
const kiumi3 = "" + buildAssetsURL("kiumi-3.YtF4SlFZ.png");
const masterclass1 = "" + buildAssetsURL("masterclass-1.CtK3n9T_.png");
const masterclass2 = "" + buildAssetsURL("masterclass-2.BT27foGD.png");
const masterclass3 = "" + buildAssetsURL("masterclass-3.3UbJyHJW.png");
const investmentSecret1 = "" + buildAssetsURL("investment-secret-1.DNnn-EgJ.png");
const investmentSecret2 = "" + buildAssetsURL("investment-secret-2.Cb7iZnYQ.png");
const investmentSecret3 = "" + buildAssetsURL("investment-secret-3.CNUsjtoN.png");
const noshow1 = "" + buildAssetsURL("noshow-1.BXx61q4r.png");
const noshow2 = "" + buildAssetsURL("noshow-2.CpJovSKW.png");
const noshow3 = "" + buildAssetsURL("noshow-3.CYZ9_08u.png");
const noshow4 = "" + buildAssetsURL("noshow-4.CPSKrD9I.png");
const noshow5 = "" + buildAssetsURL("noshow-5.CTI1_q_K.png");
const rassiAdmin1 = "" + buildAssetsURL("rassi-admin-1.zHIdFbYe.png");
const rassiAdmin2 = "" + buildAssetsURL("rassi-admin-2.CF-HWsM8.png");
const companyIntro1 = "" + buildAssetsURL("company-intro-1.DFLv0qe2.png");
const companyIntro2 = "" + buildAssetsURL("company-intro-2.BDRaKJtc.png");
const companyIntro3 = "" + buildAssetsURL("company-intro-3.BRsMYObY.png");
const companyIntro4 = "" + buildAssetsURL("company-intro-4.86rpr96c.png");
const companyIntro5 = "" + buildAssetsURL("company-intro-5.D28UJRah.png");
const internalAdmin1 = "" + buildAssetsURL("internal-admin-1.0lJQQSwh.png");
const internalAdmin2 = "" + buildAssetsURL("internal-admin-2.gwBOSLrp.png");
const internalAdmin3 = "" + buildAssetsURL("internal-admin-3.DvrLzxif.png");
const _sfc_main$2 = {
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activeProjectIndex = ref(0);
    const selectedImage = ref(null);
    const projects = [
      {
        title: "\uD0A4\uC6B0\uBBF8 (AI \uCC57\uBD07 \uC790\uC0B0\uAD00\uB9AC)",
        subtitle: "\uD0A4\uC6C0\uC99D\uAD8C \uD611\uC5C5 / LLM\uC744 \uC5F0\uB3D9\uD55C \uC8FC\uC2DD \uAD00\uB828 \uCC44\uD305 \uD504\uB85C\uADF8\uB7A8 \uAC1C\uBC1C",
        tags: ["Vue.js (\uC9D1\uC911)", "Spring"],
        category: "Mobile/Hybrid",
        images: [kiumi3, kiumi1, kiumi2],
        descriptions: [
          "<strong>\uCC44\uD305 \uD654\uBA74 \uAE30\uB2A5 \uAD6C\uD604:</strong> Vue.js\uB97C \uD65C\uC6A9\uD558\uC5EC LLM \uC751\uB2F5\uC744 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC9C1\uAD00\uC801\uC73C\uB85C \uBCF4\uC5EC\uC8FC\uB294 \uC2E4\uC2DC\uAC04 \uCC44\uD305 \uC778\uD130\uD398\uC774\uC2A4 \uAE30\uB2A5 \uAD6C\uD604",
          "<strong>\uBAA8\uBC14\uC77C \uCD5C\uC801\uD654:</strong> \uC548\uB4DC\uB85C\uC774\uB4DC/iOS \uB300\uC751 \uBC0F \uB2E4\uC591\uD55C \uB514\uBC14\uC774\uC2A4 \uD658\uACBD\uC5D0\uC11C \uC548\uC815\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uB294 \uBAA8\uBC14\uC77C \uD654\uBA74 \uCD5C\uC801\uD654 \uC8FC\uB3C4",
          "<strong>\uC131\uB2A5 \uAC1C\uC120:</strong> \uBE44\uB3D9\uAE30\uC801\uC73C\uB85C \uB4E4\uC5B4\uC624\uB294 \uC751\uB2F5 \uB370\uC774\uD130\uB97C \uCC98\uB9AC\uD558\uACE0 \uD654\uBA74 \uB80C\uB354\uB9C1 \uC131\uB2A5 \uAC1C\uC120 \uC791\uC5C5 \uC218\uD589"
        ]
      },
      {
        title: "\uB9C8\uC2A4\uD130\uD074\uB798\uC2A4",
        subtitle: "\uAD6D\uCC45\uACFC\uC81C \uAD00\uB828 \uAD50\uC721 \uD50C\uB7AB\uD3FC \uD504\uB860\uD2B8\uC5D4\uB4DC \uC2DC\uC2A4\uD15C \uAD6C\uCD95",
        tags: ["Vue.js", "Spring"],
        category: "Web Service",
        images: [masterclass1, masterclass2, masterclass3],
        descriptions: [
          "<strong>\uD654\uBA74 \uAD6C\uD604 \uBC0F \uAC1C\uBC1C \uC804\uB2F4:</strong> \uC124\uACC4\uB41C \uD654\uBA74\uC744 \uBC14\uD0D5\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 \uD654\uBA74 \uBC0F \uAE30\uB2A5 \uAD6C\uD604",
          "<strong>\uAD8C\uD55C \uBC0F \uAE30\uB2A5 \uC81C\uC5B4 \uB85C\uC9C1:</strong> \uC0AC\uC6A9\uC790/\uAD00\uB9AC\uC790 \uAD8C\uD55C\uC5D0 \uB530\uB978 \uD654\uBA74 \uC811\uADFC \uBC0F \uAE30\uB2A5 \uD65C\uC131\uD654 \uC81C\uC5B4 \uB85C\uC9C1\uC744 REST API \uC5F0\uB3D9 \uAE30\uBC18\uC73C\uB85C \uC815\uD655\uD558\uAC8C \uAD6C\uD604",
          "<strong>\uBC18\uC751\uD615 \uC6F9 \uAD6C\uCD95:</strong> \uB2E4\uC591\uD55C \uD574\uC0C1\uB3C4 \uBC0F \uB514\uBC14\uC774\uC2A4 \uD658\uACBD \uB300\uC751\uC744 \uC704\uD55C \uBC18\uC751\uD615 \uC6F9 \uAD6C\uD604\uC744 \uD1B5\uD574 \uBAA8\uB4E0 \uD658\uACBD\uC5D0\uC11C \uC548\uC815\uC801\uC778 \uD654\uBA74 \uC81C\uACF5"
        ]
      },
      {
        title: "\uD22C\uC790\uC758 \uBE44\uCC45",
        subtitle: "\uC8FC\uC2DD \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC2DC\uD669 \uAD00\uB828 \uD398\uC774\uC9C0 \uAC1C\uBC1C \uBC0F \uC6B4\uC601",
        tags: ["Vue.js", "Spring", "Oracle"],
        category: "Web Service",
        images: [investmentSecret1, investmentSecret2, investmentSecret3],
        descriptions: [
          "<strong>\uB370\uC774\uD130 \uCC98\uB9AC \uCD5C\uC801\uD654:</strong> Oracle DB \uCFFC\uB9AC \uBD84\uC11D \uBC0F \uCD5C\uC801\uD654\uB97C \uD1B5\uD574 \uD575\uC2EC \uB370\uC774\uD130 \uB85C\uB529 \uC2DC\uAC04 \uB2E8\uCD95",
          "<strong>\uC2E0\uADDC \uAE30\uB2A5 \uAD6C\uD604:</strong> \uC8FC\uC2DD \uC2DC\uC138 \uBC0F \uAD00\uB828 \uC815\uBCF4 \uC870\uD68C \uAE30\uB2A5 \uAD6C\uD604, Spring \uAE30\uBC18 API \uAC1C\uBC1C\uB85C \uB370\uC774\uD130 \uC81C\uACF5 \uC548\uC815\uC131 \uD655\uBCF4"
        ]
      },
      {
        title: "\uB178\uC1FC\uB178",
        subtitle: "\uBCF4\uC99D\uAE08 \uAE30\uBC18\uC758 \uC57D\uC18D \uAD00\uB9AC \uC11C\uBE44\uC2A4 \uD398\uC774\uC9C0 \uAC1C\uBC1C",
        tags: ["Vue.js", "Spring", "Oracle"],
        category: "Web Service",
        images: [noshow1, noshow2, noshow3, noshow4, noshow5],
        descriptions: [
          "<strong>\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C:</strong> \uC57D\uC18D \uC0DD\uC131, \uBCF4\uC99D\uAE08 \uAD00\uB9AC, \uC9C4\uD589 \uD604\uD669 \uB4F1 \uD575\uC2EC \uC0AC\uC6A9\uC790 \uAE30\uB2A5 \uD654\uBA74 \uAD6C\uD604",
          "<strong>\uC548\uC815\uC801\uC778 \uD2B8\uB79C\uC7AD\uC158:</strong> \uBCF4\uC99D\uAE08 \uCC98\uB9AC \uBC0F \uC57D\uC18D \uC0C1\uD0DC \uBCC0\uACBD\uC5D0 \uD544\uC694\uD55C \uBC31\uC5D4\uB4DC \uB85C\uC9C1 \uBC0F DB \uD2B8\uB79C\uC7AD\uC158 \uC548\uC815\uC131 \uD655\uBCF4"
        ]
      },
      {
        title: "\uB77C\uC528 \uB9E4\uB9E4\uBE44\uC11C (\uAD00\uB9AC\uC790)",
        subtitle: "\uC8FC\uC2DD \uB9E4\uB9E4\uBE44\uC11C \uC11C\uBE44\uC2A4 \uC6B4\uC601\uC744 \uC704\uD55C \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0",
        tags: ["Spring", "Oracle"],
        category: "Admin",
        images: [rassiAdmin2, rassiAdmin1],
        descriptions: [
          "<strong>\uC6B4\uC601 \uD6A8\uC728 \uC99D\uB300:</strong> \uD68C\uC6D0 \uB9AC\uC2A4\uD2B8 \uC870\uD68C \uBC0F \uC11C\uBE44\uC2A4 \uAD00\uB9AC\uB97C \uD6A8\uC728\uC801\uC73C\uB85C \uC218\uD589\uD560 \uC218 \uC788\uB3C4\uB85D \uAE30\uB2A5 \uAC1C\uC120, \uC6B4\uC601\uD300 \uC5C5\uBB34 \uD6A8\uC728 \uD5A5\uC0C1"
        ]
      },
      {
        title: "\uC53D\uD06C\uD480 \uAE30\uC5C5 \uC18C\uAC1C \uD398\uC774\uC9C0",
        subtitle: "\uD68C\uC0AC \uC18C\uAC1C \uC6F9 \uBC0F \uBAA8\uBC14\uC77C \uD398\uC774\uC9C0 \uAC1C\uBC1C \uBC0F \uC720\uC9C0\uBCF4\uC218",
        tags: ["Vue.js", "Spring"],
        category: "Web Service",
        images: [companyIntro5, companyIntro2, companyIntro3, companyIntro4, companyIntro1],
        descriptions: [
          "<strong>\uD06C\uB85C\uC2A4 \uD50C\uB7AB\uD3FC \uB300\uC751:</strong> \uC6F9 \uBC0F \uBAA8\uBC14\uC77C \uD658\uACBD\uC5D0\uC11C \uC77C\uAD00\uC131 \uC788\uACE0 \uBC18\uC751\uC131\uC774 \uB6F0\uC5B4\uB09C UI/UX \uAD6C\uD604"
        ]
      },
      {
        title: "\uC53D\uD06C\uD480 \uB0B4\uBD80 \uAD00\uB9AC\uC790 \uC2DC\uC2A4\uD15C",
        subtitle: "\uB0B4\uBD80 \uC2DC\uC2A4\uD15C \uC6B4\uC601\uC744 \uC704\uD55C \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0",
        tags: ["Spring", "Oracle"],
        category: "Admin",
        images: [internalAdmin3, internalAdmin1, internalAdmin2],
        descriptions: [
          "<strong>\uC2DC\uC2A4\uD15C \uC548\uC815\uC131 \uAE30\uC5EC:</strong> \uB0B4\uBD80 \uD234\uC758 \uC548\uC815\uC801\uC778 \uC6B4\uC601\uC744 \uC704\uD55C \uBC31\uC5D4\uB4DC \uB85C\uC9C1 \uC218\uC815 \uBC0F \uC624\uB958 \uCC98\uB9AC \uB2F4\uB2F9"
        ]
      }
    ];
    const activeProject = computed(() => {
      return projects[activeProjectIndex.value];
    });
    const selectProject = (index) => {
      activeProjectIndex.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "section"
      }, _attrs))}><div class="container"><h2 class="section-title">Projects</h2><div class="category-tabs">`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": "auto",
        "space-between": 12,
        "free-mode": true,
        class: "category-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(projects, (project, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: project.title,
                class: ["category-slide", { active: activeProjectIndex.value === index }],
                onClick: ($event) => selectProject(index)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(project.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(project.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(projects, (project, index) => {
                return createVNode(unref(SwiperSlide), {
                  key: project.title,
                  class: ["category-slide", { active: activeProjectIndex.value === index }],
                  onClick: ($event) => selectProject(index)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(project.title), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (activeProject.value) {
        _push(`<div class="projects-display"><article class="project-card fade-in">`);
        if (activeProject.value.images && activeProject.value.images.length) {
          _push(`<div class="project-image-area"><div class="project-img-gallery"><!--[-->`);
          ssrRenderList(activeProject.value.images, (img, index) => {
            _push(`<div class="img-wrapper"><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", activeProject.value.title + " screenshot " + (index + 1))}></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<div class="project-image-placeholder"><div class="placeholder-content"><span>${ssrInterpolate(activeProject.value.title)} Image</span></div></div>`);
        }
        _push(`<header class="project-header"><h3 class="project-title">${ssrInterpolate(activeProject.value.title)}</h3><span class="project-subtitle">${ssrInterpolate(activeProject.value.subtitle)}</span><div class="tech-stack"><!--[-->`);
        ssrRenderList(activeProject.value.tags, (tag) => {
          _push(`<span class="tech-tag">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></header><div class="project-details"><ul><!--[-->`);
        ssrRenderList(activeProject.value.descriptions, (desc, index) => {
          _push(`<li>${desc != null ? desc : ""}</li>`);
        });
        _push(`<!--]--></ul></div></article></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedImage.value) {
        _push(`<div class="image-modal"><div class="modal-content"><img${ssrRenderAttr("src", selectedImage.value)} alt="Expanded project image"><button class="close-btn">\xD7</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "section"
  }, _attrs))} data-v-915aaf65><div class="container" data-v-915aaf65><h2 class="section-title" data-v-915aaf65>Contact</h2><div class="contact-info" data-v-915aaf65><p class="contact-text" data-v-915aaf65>\uC0C8\uB85C\uC6B4 \uAE30\uD68C\uC5D0 \uB300\uD574 \uC774\uC57C\uAE30 \uB098\uB204\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.</p><div class="contact-item" data-v-915aaf65><span class="label" data-v-915aaf65>Email</span><a href="mailto:vkfkd420@naver.com" class="email-link" data-v-915aaf65>vkfkd420@naver.com</a></div><div class="contact-item" data-v-915aaf65><span class="label" data-v-915aaf65>Phone</span><a href="tel:010-2982-9609" class="phone-link" data-v-915aaf65>010-2982-9609</a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-915aaf65"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      _push(ssrRenderComponent(SkillsSection, null, null, _parent));
      _push(ssrRenderComponent(ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BMVuEzQ2.mjs.map
