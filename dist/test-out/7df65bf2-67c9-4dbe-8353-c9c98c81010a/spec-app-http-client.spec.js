import {
  HttpClientTestingModule,
  HttpTestingController,
  UserAPIService,
  init_testing as init_testing2,
  init_user_api_service
} from "./chunk-7QHRSG2P.js";
import {
  HttpClient,
  init_http
} from "./chunk-NFWN3KKD.js";
import "./chunk-IWXHUCHX.js";
import {
  TestBed,
  fakeAsync,
  init_testing,
  inject2 as inject,
  tick
} from "./chunk-TRU2MZOM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// src/app/http-client.spec.ts
init_http();
init_testing2();
init_testing();
init_user_api_service();
var testUrl = "/api/users";
describe("HttpClient testing", () => {
  let httpClient;
  let httpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it("can test HttpClient.get", () => {
    const testData = { name: "Test Data" };
    httpClient.get(testUrl).subscribe((data) => (
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    ));
    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual("GET");
    req.flush(testData);
    httpTestingController.verify();
  });
});
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
      // angular testing module that provides mocking for http connections
    ],
    // Add here declaration of your services or components and use inject to get to them in tests
    providers: [UserAPIService]
  });
});
it("should request data from server", fakeAsync(inject([HttpTestingController, UserAPIService], (httpMock, service) => {
  let result = "no one expects spanish inquisition";
  const data = { some: "data", wasMocked: true };
  const expected = __spreadProps(__spreadValues({}, data), { wasMocked: true });
  service.getAll().subscribe((data2) => result = data2);
  httpMock.expectOne(testUrl).flush(data);
  tick();
  expect(result).toEqual(expected);
  httpMock.verify();
})));
//# sourceMappingURL=spec-app-http-client.spec.js.map
