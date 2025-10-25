import {
  HttpTestingController,
  UserAPIService,
  init_testing as init_testing2,
  init_user_api_service
} from "./chunk-7QHRSG2P.js";
import {
  HttpClient,
  init_http
} from "./chunk-NFWN3KKD.js";
import {
  CommonModule,
  init_common
} from "./chunk-S4226L6O.js";
import "./chunk-IWXHUCHX.js";
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

// angular:jit:template:src/app/users.component/users.component.html
var users_component_default;
var init_users_component = __esm({
  "angular:jit:template:src/app/users.component/users.component.html"() {
    users_component_default = '<h2>Users</h2>\n@if (loading) {\n<p>Loading\u2026</p>\n}\n<table>\n  <!--\n  <li *ngFor="let u of users()">\n    {{ u.name }} <small>({{ u.email }})</small>\n  </li>\n  -->\n  @for (user of users; track user.name) {\n  <tr>\n    <td> Name : {{ user.name }} </td>\n    <td> - </td>\n    <td><small>(Email : {{ user.email }})</small></td>\n  </tr>\n  } @empty {\n  <tr>\n    <td>There are no items.</td>\n  </tr>\n  }\n</table>';
  }
});

// angular:jit:style:src/app/users.component/users.component.scss
var users_component_default2;
var init_users_component2 = __esm({
  "angular:jit:style:src/app/users.component/users.component.scss"() {
    users_component_default2 = "/* src/app/users.component/users.component.scss */\n/*# sourceMappingURL=users.component.css.map */\n";
  }
});

// src/app/users.component/users.component.ts
var __decorate, __metadata, _a, UsersComponent;
var init_users_component3 = __esm({
  "src/app/users.component/users.component.ts"() {
    "use strict";
    init_users_component();
    init_users_component2();
    init_common();
    init_core();
    init_user_api_service();
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __metadata = function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    UsersComponent = (_a = class {
      constructor(userAPIService) {
        this.userAPIService = userAPIService;
        this.users = [];
        this.loading = true;
      }
      ngOnChanges(changes) {
        this.userAPIService.getAll().subscribe({
          next: (list) => {
            this.users = list;
            console.log("UsersComponent: users = ", this.users);
          },
          error: (err) => console.error(err),
          complete: () => this.loading = false
        });
      }
    }, _a.ctorParameters = () => [
      { type: UserAPIService }
    ], _a);
    UsersComponent = __decorate([
      Component({
        selector: "app-users.component",
        imports: [CommonModule],
        template: users_component_default,
        styles: [users_component_default2]
      }),
      __metadata("design:paramtypes", [UserAPIService])
    ], UsersComponent);
  }
});

// src/app/users.component/users.component.spec.ts
var require_users_component_spec = __commonJS({
  "src/app/users.component/users.component.spec.ts"(exports) {
    init_testing();
    init_http();
    init_testing2();
    init_user_api_service();
    init_users_component3();
    describe("UsersComponent", () => {
      let component;
      let fixture;
      let httpClient;
      let httpTestingController;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UsersComponent],
          providers: [UserAPIService]
        }).compileComponents();
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_users_component_spec();
//# sourceMappingURL=spec-app-users.component-users.component.spec.js.map
