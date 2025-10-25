import {
  Component,
  TestBed,
  init_core,
  init_testing
} from "./chunk-TRU2MZOM.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/home.component/home.component.html
var home_component_default;
var init_home_component = __esm({
  "angular:jit:template:src/app/home.component/home.component.html"() {
    home_component_default = "<p>home.component works!</p>\n";
  }
});

// angular:jit:style:src/app/home.component/home.component.scss
var home_component_default2;
var init_home_component2 = __esm({
  "angular:jit:style:src/app/home.component/home.component.scss"() {
    home_component_default2 = "/* src/app/home.component/home.component.scss */\n/*# sourceMappingURL=home.component.css.map */\n";
  }
});

// src/app/home.component/home.component.ts
var __decorate, HomeComponent;
var init_home_component3 = __esm({
  "src/app/home.component/home.component.ts"() {
    "use strict";
    init_home_component();
    init_home_component2();
    init_core();
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    HomeComponent = class HomeComponent2 {
    };
    HomeComponent = __decorate([
      Component({
        selector: "app-home.component",
        imports: [],
        template: home_component_default,
        styles: [home_component_default2]
      })
    ], HomeComponent);
  }
});

// src/app/home.component/home.component.spec.ts
var require_home_component_spec = __commonJS({
  "src/app/home.component/home.component.spec.ts"(exports) {
    init_testing();
    init_home_component3();
    describe("HomeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_component_spec();
//# sourceMappingURL=spec-app-home.component-home.component.spec.js.map
