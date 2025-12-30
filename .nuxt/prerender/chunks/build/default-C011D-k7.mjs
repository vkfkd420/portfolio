import { _ as __nuxt_component_0 } from './nuxt-link-CV_40id8.mjs';
import { ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://C:/workspace/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'file://C:/workspace/portfolio/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/workspace/portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/workspace/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/workspace/portfolio/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/workspace/portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/workspace/portfolio/node_modules/hookable/dist/index.mjs';
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

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const isScrolled = ref(false);
    const links = [
      { text: "About", hash: "#about" },
      { text: "Skills", hash: "#skills" },
      { text: "Experience", hash: "#experience" },
      { text: "Projects", hash: "#projects" },
      { text: "Contact", hash: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="${ssrRenderClass([{ scrolled: isScrolled.value }, "navbar"])}"><div class="container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HYUN<span${_scopeId}>MIN.</span>`);
          } else {
            return [
              createTextVNode("HYUN"),
              createVNode("span", null, "MIN.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([{ active: isMenuOpen.value }, "mobile-menu-btn"])}" aria-label="Toggle menu"><span></span><span></span><span></span></button><ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.hash)}>${ssrInterpolate(link.text)}</a></li>`);
      });
      _push(`<!--]--></ul></div></nav><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="footer"><div class="container"><p>\xA9 2025 Kang Hyun-min. All rights reserved.</p></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C011D-k7.mjs.map
