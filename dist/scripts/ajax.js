"use strict";function ajax(e){var n={type:"get",jsonCallback:"callback"};if(Object.assign(n,e),"jsonp"==n.type){var t=document.createElement("script"),s="$jsonp_"+(new Date).getTime()+Math.round(1e7*Math.random());window[s]=function(e){n.success(e),t.remove(),delete window[s]},n.url.includes("?")?t.src=n.url+"&"+n.jsonCallback+"="+s:t.src=n.url+"?"+n.jsonCallback+"="+s,document.body.appendChild(t)}else{var a=null;(a=Window.VBArray?new AxtiveXObject("Msxml2.XMLHTTP"):new XMLHttpRequest).open(n.type,n.url),a.onload=function(){n.success&&n.success("json"==n.datatype?JSON.parse(a.response):a.response)},"get"==n.type&&a.send(),"post"==n.type&&(a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(n.data))}}