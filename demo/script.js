// On page load, initialize the plugin for section.sticky

$(function(){
  $('section.sticky').stickyPageHeadings({
    stickyClass     : 'sticky',
    headingSelector : 'h2'
  });  
});



/*!
 * Sticky Page Headings
 *
 * By Nate Walton
 * Adapted from polarblau's Sticky Section Headers plugin
 * http://polarblau.github.com/stickySectionHeaders/
 *
 */
(function(e){e.fn.stickyPageHeadings=function(t){var n=e.extend({stickyClass:"sticky",headingSelector:"h2"},t),r=e(this),i=r.offset().top,s=r.find(n.headingSelector),o=[],u=r.find(n.headingSelector+":first-child");clone=u.clone().addClass("sticky hidden").css("width",u.width()).html(" &nbsp;"),prevNum=null,r.prepend(clone),s.each(function(){var t={};t.el=e(this),t.height=t.el.outerHeight(),o.push(t)}),e(window).scroll(function(){var t=e(window).scrollTop(),n,r,i,s;for(var u=0;u<o.length;u++){var a=o[u];a.top=a.el.offset().top;if(!(t>a.top))break;n=u}if(n===undefined){clone.hasClass("hidden")||(clone.html("&nbsp;").addClass("hidden"),prevNum=null);return}clone.removeClass("hidden"),r=o[n],i=o[n+1];if(i!==undefined)if(t>i.top-r.height){var f=r.height+t-i.top-1;clone.css("top","-"+f+"px")}else clone.css("top","0px");else clone.css("top","0px");n!==prevNum&&(prevNum=n,clone.html(r.el.html()))})}})(jQuery);