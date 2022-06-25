window.SnipcartSettings = {
	publicApiKey: 'YzRjMGVmOTItZDY5Yi00NmMyLWIwYzUtZTFjYzhjMTc5OGRhNjM3ODcyNDY5MDY5ODIxMjI0',
	loadStrategy: 'on-user-interaction',
	version: "3.4.0",
	timeoutDuration: 5200,
	modalStyle: "side",
	currency: "php",
templatesUrl: "/snipcart-templates.html"
	
};
 (()=>{var a,d;(d=(a=window.SnipcartSettings).version)!=null||(a.version="3.0");var s,S;(S=(s=window.SnipcartSettings).currency)!=null||(s.currency="usd");var l,p;(p=(l=window.SnipcartSettings).timeoutDuration)!=null||(l.timeoutDuration=2750);var w,u;(u=(w=window.SnipcartSettings).domain)!=null||(w.domain="cdn.snipcart.com");var m,g;(g=(m=window.SnipcartSettings).protocol)!=null||(m.protocol="https");var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var c=!1;function o(){if(c)return;c=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`),n=document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`);e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),h(e),i||(i=document.createElement("script"),i.src=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`,i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`,t.prepend(n)),f.forEach(v=>document.removeEventListener(v,o))}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();


// deferred modifier
document.addEventListener('snipcart.ready', function() {
	Snipcart.api.session.setLanguage('en', {
		"payment": {
			"methods": {
				"deferred_payment": "Checkout with email (GrabPay and other E-wallets available)",
			},
			"form": {
				"deferred_payment_title": "Checkout with email",
				"deferred_payment_instructions": "Payment link will be sent to your email within an hour after checkout."
			}
		}
	});
});



// adding additional payment gateway lv  YzRjMGVmOTItZDY5Yi00NmMyLWIwYzUtZTFjYzhjMTc5OGRhNjM3ODcyNDY5MDY5ODIxMjI0
// pb YjUzMmUxMjktYWM1OS00ZGRjLTgzOTctY2RlOTk0ZTQ3MjhhNjM3ODcyNDY5MDY5ODIxMjI0


