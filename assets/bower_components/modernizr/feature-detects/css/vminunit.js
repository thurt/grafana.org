/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,i){n("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var o=n.childNodes[1],r=n.childNodes[0],d=parseInt((r.offsetWidth-r.clientWidth)/2,10),a=t.clientWidth/100,s=t.clientHeight/100,l=parseInt(50*Math.min(a,s),10),c=parseInt((window.getComputedStyle?getComputedStyle(o,null):o.currentStyle).width,10);e.addTest("cssvminunit",i(l,c)||i(l,c-d))},2)});