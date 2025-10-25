import {
  HttpClient,
  init_http
} from "./chunk-NFWN3KKD.js";
import {
  Injectable,
  init_core
} from "./chunk-TRU2MZOM.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/user-api.service.ts
var __decorate, __metadata, _a, UserAPIService;
var init_user_api_service = __esm({
  "src/app/services/user-api.service.ts"() {
    "use strict";
    init_http();
    init_core();
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __metadata = function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    UserAPIService = (_a = class {
      constructor(http) {
        this.http = http;
        this.baseUrl = "/api/users";
        this.wasProcessed = true;
      }
      getAll() {
        return this.http.get(this.baseUrl).pipe();
      }
      getById(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
      create(payload) {
        return this.http.post(this.baseUrl, payload);
      }
      update(id, payload) {
        return this.http.put(`${this.baseUrl}/${id}`, payload);
      }
      delete(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }
    }, _a.ctorParameters = () => [
      { type: HttpClient }
    ], _a);
    UserAPIService = __decorate([
      Injectable({
        providedIn: "root"
      }),
      __metadata("design:paramtypes", [HttpClient])
    ], UserAPIService);
  }
});

export {
  UserAPIService,
  init_user_api_service
};
//# sourceMappingURL=chunk-5SRBSE23.js.map
