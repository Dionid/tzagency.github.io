"use strict";$(document).ready(function(){function t(){$(".contactsList .item").each(function(t){$(this).velocity({top:"0px"},{duration:500,delay:100*t,easing:"easeOutQuart"})})}var e=($(".background"),window.innerHeight);e>620&&e<801&&($(".tel")[0].style.top=e-615+"px"),$(".card").velocity({left:0},{duration:1e3,easing:"easeOutQuart"}),setTimeout(function(){$(".desc").addClass("active")},300),setTimeout(function(){$(".tel img").velocity({translateY:0},{duration:500,complete:t,easing:"easeOutQuart"})},1e3),setTimeout(function(){$(".addBtn").velocity({bottom:"16%"},{duration:500,easing:"easeOutQuart"})},2500)});