(function () {
  var replacefn=function(e,t){return t?",'"+t+"'":',"'+e+'"'},toXPathStringLiteral=function(e){if(/^"+$/g.test(e))return"'"+e+"'";switch(e.indexOf('"')){case-1:return'"'+e+'"';case 0:return"concat("+e.replace(/("+)|[^"]+/g,replacefn).slice(1)+")";default:return"concat("+e.replace(/("+)|[^"]+/g,replacefn)+")"}},wrap=function(e){var t=e.contextNode.nodeType===e.contextNode?e.contextNode:e.contextNode.ownerDocument,n=t.evaluate("descendant::text()[contains(.,"+toXPathStringLiteral(e.target)+")]",e.contextNode,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),a=t.createDocumentFragment(),o=t.createElement(e.tag);Object.keys(e.attribute).forEach(function(t){o.setAttribute(t,e.attribute[t])}),o.appendChild(t.createTextNode(e.tar));for(var r=0,c=n.snapshotLength,d=void 0,l=void 0,i=void 0;r<c;++r){l=(d=n.snapshotItem(r)).data.split(e.tar),i=a.appendChild(t.createTextNode(l[0]));for(var p=1,u=l.length;p<u;++p)o=o.cloneNode(!0),a.appendChild(o),(i=i.cloneNode(!1)).data=l[p],a.appendChild(i);d.parentNode.replaceChild(a,d)}};wrap({target:"Sexy Zone",tar:"xy",contextNode:document.body,tag:"span",attribute:{style:"color: #ff0000;"}}),wrap({target:"SexyZone",tar:"xy",contextNode:document.body,tag:"span",attribute:{style:"color: #ff0000;"}});
})();