describe("testXhrType",function(){var e,t;before(function(n){(t=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(t){e=t,n()})}),it("returns false when XHR is undefined",function(e){var n=XMLHttpRequest;XMLHttpRequest=void 0,t(["testXhrType"],function(t){expect(t("json")).to.equal(!1),XMLHttpRequest=n,e()})}),afterEach(function(){t.undef("testXhrType")}),after(function(){e()})});