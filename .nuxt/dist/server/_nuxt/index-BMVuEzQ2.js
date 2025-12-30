import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ref, computed, mergeProps, useSSRContext, unref, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/workspace/portfolio/node_modules/hookable/dist/index.mjs";
import "C:/workspace/portfolio/node_modules/unctx/dist/index.mjs";
import "C:/workspace/portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/workspace/portfolio/node_modules/radix3/dist/index.mjs";
import "C:/workspace/portfolio/node_modules/defu/dist/defu.mjs";
import "C:/workspace/portfolio/node_modules/ufo/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("hero-avatar.CPLXj3ac.jpg");
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
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}><div class="container hero-content"><div class="hero-text"><span class="subtitle">${ssrInterpolate(displayedSubtitle.value)}<span class="typing-cursor"></span></span><h1 class="title">Clean Code,<br>Clear Experience.</h1><p class="description"> 더 나은 협업과 유지보수를 위해 정돈된 코드를 만들고자 끊임없이 노력하는,<br><span class="highlight-year">${ssrInterpolate(careersYear.value)}년차</span> 프론트엔드 개발자 강현민입니다. </p><a href="#contact" class="btn">Get in Touch</a></div><div class="hero-image"><img${ssrRenderAttr("src", _imports_0)} alt="Developer Avatar" class="avatar-shimmer"></div></div></header>`);
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
  }, _attrs))} data-v-240443df><div class="container" data-v-240443df><h2 class="section-title" data-v-240443df>About Me &amp; Growth Process</h2><div class="about-content" data-v-240443df><p data-v-240443df><strong data-v-240443df>&quot;문제 해결을 위한 집요함과 꼼꼼함&quot;</strong><br data-v-240443df> 어린 시절 컴퓨터 분해와 조립 경험을 통해 IT 분야에 관심을 가지게 되었고, 이때 체득한 집요함과 탐구심은 현재까지도 새로운 기술을 학습하는 원동력이 되고 있습니다. 꼼꼼한 성격으로 인해 시간이 더 소요되기도 하지만, 계획적인 업무 관리로 이를 보완하며 오히려 완성도 높은 서비스를 만드는 강점으로 활용하고 있습니다. </p><p data-v-240443df><strong data-v-240443df>&quot;소통과 협업을 통한 성장&quot;</strong><br data-v-240443df> 동료들과 긍정적인 태도로 관계를 유지하며, 갈등 없이 소통하는 것을 중요하게 생각합니다. 앞으로도 빠른 학습 능력과 적극적인 자세를 바탕으로 변화하는 IT 환경 속에서 지속적으로 성장하며, 안정적이고 효율적인 서비스를 개발하는 개발자가 되겠습니다. </p></div></div></section>`);
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
  }, _attrs))}><div class="container"><h2 class="section-title">Experience</h2><div class="timeline"><div class="timeline-item"><span class="date">2022.01.03 - 재직중</span><div class="content"><h3>책임 (Senior Researcher)</h3><span class="company">씽크풀 (ThinkPool)</span><p> Vue, Nuxt, Spring, Oracle 등을 활용한 프로젝트 참여.<br> 마스터클래스, 키우미, 투자의비책, 노쇼노 등 다수의 웹/앱 서비스 개발 및 유지보수. </p></div></div><div class="timeline-item"><span class="date">2018.03 - 2021.02</span><div class="content"><h3>서일대학교</h3><span class="company">정보통신학과 졸업</span></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ExperienceSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const kiumi1 = "" + __buildAssetsURL("kiumi-1.Cfz32nsV.png");
const kiumi2 = "" + __buildAssetsURL("kiumi-2.DttBxa3f.png");
const kiumi3 = "" + __buildAssetsURL("kiumi-3.YtF4SlFZ.png");
const masterclass1 = "" + __buildAssetsURL("masterclass-1.CtK3n9T_.png");
const masterclass2 = "" + __buildAssetsURL("masterclass-2.BT27foGD.png");
const masterclass3 = "" + __buildAssetsURL("masterclass-3.3UbJyHJW.png");
const investmentSecret1 = "" + __buildAssetsURL("investment-secret-1.DNnn-EgJ.png");
const investmentSecret2 = "" + __buildAssetsURL("investment-secret-2.Cb7iZnYQ.png");
const investmentSecret3 = "" + __buildAssetsURL("investment-secret-3.CNUsjtoN.png");
const noshow1 = "" + __buildAssetsURL("noshow-1.BXx61q4r.png");
const noshow2 = "" + __buildAssetsURL("noshow-2.CpJovSKW.png");
const noshow3 = "" + __buildAssetsURL("noshow-3.CYZ9_08u.png");
const noshow4 = "" + __buildAssetsURL("noshow-4.CPSKrD9I.png");
const noshow5 = "" + __buildAssetsURL("noshow-5.CTI1_q_K.png");
const rassiAdmin1 = "" + __buildAssetsURL("rassi-admin-1.zHIdFbYe.png");
const rassiAdmin2 = "" + __buildAssetsURL("rassi-admin-2.CF-HWsM8.png");
const companyIntro1 = "" + __buildAssetsURL("company-intro-1.DFLv0qe2.png");
const companyIntro2 = "" + __buildAssetsURL("company-intro-2.BDRaKJtc.png");
const companyIntro3 = "" + __buildAssetsURL("company-intro-3.BRsMYObY.png");
const companyIntro4 = "" + __buildAssetsURL("company-intro-4.86rpr96c.png");
const companyIntro5 = "" + __buildAssetsURL("company-intro-5.D28UJRah.png");
const internalAdmin1 = "" + __buildAssetsURL("internal-admin-1.0lJQQSwh.png");
const internalAdmin2 = "" + __buildAssetsURL("internal-admin-2.gwBOSLrp.png");
const internalAdmin3 = "" + __buildAssetsURL("internal-admin-3.DvrLzxif.png");
const _sfc_main$2 = {
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activeProjectIndex = ref(0);
    const selectedImage = ref(null);
    const projects = [
      {
        title: "키우미 (AI 챗봇 자산관리)",
        subtitle: "키움증권 협업 / LLM을 연동한 주식 관련 채팅 프로그램 개발",
        tags: ["Vue.js (집중)", "Spring"],
        category: "Mobile/Hybrid",
        images: [kiumi3, kiumi1, kiumi2],
        descriptions: [
          "<strong>채팅 화면 기능 구현:</strong> Vue.js를 활용하여 LLM 응답을 사용자에게 직관적으로 보여주는 실시간 채팅 인터페이스 기능 구현",
          "<strong>모바일 최적화:</strong> 안드로이드/iOS 대응 및 다양한 디바이스 환경에서 안정적으로 작동하는 모바일 화면 최적화 주도",
          "<strong>성능 개선:</strong> 비동기적으로 들어오는 응답 데이터를 처리하고 화면 렌더링 성능 개선 작업 수행"
        ]
      },
      {
        title: "마스터클래스",
        subtitle: "국책과제 관련 교육 플랫폼 프론트엔드 시스템 구축",
        tags: ["Vue.js", "Spring"],
        category: "Web Service",
        images: [masterclass1, masterclass2, masterclass3],
        descriptions: [
          "<strong>화면 구현 및 개발 전담:</strong> 설계된 화면을 바탕으로 프로젝트 전체 화면 및 기능 구현",
          "<strong>권한 및 기능 제어 로직:</strong> 사용자/관리자 권한에 따른 화면 접근 및 기능 활성화 제어 로직을 REST API 연동 기반으로 정확하게 구현",
          "<strong>반응형 웹 구축:</strong> 다양한 해상도 및 디바이스 환경 대응을 위한 반응형 웹 구현을 통해 모든 환경에서 안정적인 화면 제공"
        ]
      },
      {
        title: "투자의 비책",
        subtitle: "주식 정보 제공 및 시황 관련 페이지 개발 및 운영",
        tags: ["Vue.js", "Spring", "Oracle"],
        category: "Web Service",
        images: [investmentSecret1, investmentSecret2, investmentSecret3],
        descriptions: [
          "<strong>데이터 처리 최적화:</strong> Oracle DB 쿼리 분석 및 최적화를 통해 핵심 데이터 로딩 시간 단축",
          "<strong>신규 기능 구현:</strong> 주식 시세 및 관련 정보 조회 기능 구현, Spring 기반 API 개발로 데이터 제공 안정성 확보"
        ]
      },
      {
        title: "노쇼노",
        subtitle: "보증금 기반의 약속 관리 서비스 페이지 개발",
        tags: ["Vue.js", "Spring", "Oracle"],
        category: "Web Service",
        images: [noshow1, noshow2, noshow3, noshow4, noshow5],
        descriptions: [
          "<strong>프론트엔드 개발:</strong> 약속 생성, 보증금 관리, 진행 현황 등 핵심 사용자 기능 화면 구현",
          "<strong>안정적인 트랜잭션:</strong> 보증금 처리 및 약속 상태 변경에 필요한 백엔드 로직 및 DB 트랜잭션 안정성 확보"
        ]
      },
      {
        title: "라씨 매매비서 (관리자)",
        subtitle: "주식 매매비서 서비스 운영을 위한 관리자 페이지",
        tags: ["Spring", "Oracle"],
        category: "Admin",
        images: [rassiAdmin2, rassiAdmin1],
        descriptions: [
          "<strong>운영 효율 증대:</strong> 회원 리스트 조회 및 서비스 관리를 효율적으로 수행할 수 있도록 기능 개선, 운영팀 업무 효율 향상"
        ]
      },
      {
        title: "씽크풀 기업 소개 페이지",
        subtitle: "회사 소개 웹 및 모바일 페이지 개발 및 유지보수",
        tags: ["Vue.js", "Spring"],
        category: "Web Service",
        images: [companyIntro5, companyIntro2, companyIntro3, companyIntro4, companyIntro1],
        descriptions: [
          "<strong>크로스 플랫폼 대응:</strong> 웹 및 모바일 환경에서 일관성 있고 반응성이 뛰어난 UI/UX 구현"
        ]
      },
      {
        title: "씽크풀 내부 관리자 시스템",
        subtitle: "내부 시스템 운영을 위한 관리자 페이지",
        tags: ["Spring", "Oracle"],
        category: "Admin",
        images: [internalAdmin3, internalAdmin1, internalAdmin2],
        descriptions: [
          "<strong>시스템 안정성 기여:</strong> 내부 툴의 안정적인 운영을 위한 백엔드 로직 수정 및 오류 처리 담당"
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
          _push(`<li>${desc ?? ""}</li>`);
        });
        _push(`<!--]--></ul></div></article></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedImage.value) {
        _push(`<div class="image-modal"><div class="modal-content"><img${ssrRenderAttr("src", selectedImage.value)} alt="Expanded project image"><button class="close-btn">×</button></div></div>`);
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
  }, _attrs))} data-v-915aaf65><div class="container" data-v-915aaf65><h2 class="section-title" data-v-915aaf65>Contact</h2><div class="contact-info" data-v-915aaf65><p class="contact-text" data-v-915aaf65>새로운 기회에 대해 이야기 나누고 싶습니다.</p><div class="contact-item" data-v-915aaf65><span class="label" data-v-915aaf65>Email</span><a href="mailto:vkfkd420@naver.com" class="email-link" data-v-915aaf65>vkfkd420@naver.com</a></div><div class="contact-item" data-v-915aaf65><span class="label" data-v-915aaf65>Phone</span><a href="tel:010-2982-9609" class="phone-link" data-v-915aaf65>010-2982-9609</a></div></div></div></section>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BMVuEzQ2.js.map
