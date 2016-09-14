describe("testRunner",function(){var t,e,n={};before(function(i){e=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}),define("Modernizr",[],function(){return n}),define("tests",[],function(){return[{name:"fakeFn",fn:function(){return!0}},{name:"fakeBool",fn:!1},{name:"newFakeDetect",fn:function(){return 10},options:{aliases:["fakeDetect"]}},{name:"fake",fn:!0},{name:"fake.detect",fn:99},{name:"fakeBoolDeep",fn:new Boolean(!0)},{name:"fakeBoolDeep.detect",fn:!1},{fn:function(){return!0}}]}),e(["testRunner","cleanup"],function(e,n){e(),t=n,i()})}),it("returns true if fn returns true",function(){expect("fakefn"in n).to.be(!0)}),it("returns true if fn is a bool",function(){expect(n.fakebool).to.be(!1)}),it("assigns aliased values",function(){expect(n.newfakedetect).to.equal(n.fakedetect)}),it("deep assignments are valid",function(){expect(n.fake.detect).to.equal(99)}),it("deep assignments are true with bool base",function(){expect(n.fakebooldeep instanceof Boolean).to.be(!0),expect(n.fakebooldeep.detect).to.equal(!1)}),afterEach(function(){e.undef("testRunner"),e.undef("Modernizr")}),after(function(){t()})});