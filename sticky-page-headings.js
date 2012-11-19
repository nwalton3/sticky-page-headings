/*!
 * Sticky Page Headings
 *
 * By Nate Walton
 * Adapted from polarblau's Sticky Section Headers plugin
 * http://polarblau.github.com/stickySectionHeaders/
 *
 * USAGE:
 *
 * $('#container').stickyPageHeadings({
 *   stickyClass      : 'sticky',
 *   headingSelector : 'strong'
 * });
 *
 */

(function($){
  $.fn.stickyPageHeadings = function(options) {

    var settings  = $.extend({
                      stickyClass     : 'sticky',
                      headingSelector: 'h2'
                    }, options),
        container = $(this),
        cTop      = container.offset().top,
        headings  = container.find(settings.headingSelector),
        hlist     = [],
        firstItem = container.find(settings.headingSelector + ":first-child");
        clone     = firstItem.clone().addClass('sticky hidden').css('width', firstItem.width()).html(" &nbsp;");
        prevNum   = null;
    
    // Add the clone to the container
    container.prepend(clone);
    
    // Build a list of the headings and give them 'el' and 'height' attributes  
    headings.each(function(){
      var item = {};
        item.el = $(this);
        item.height = item.el.outerHeight();
      
      hlist.push(item);
    });
    
    // On scroll
    $(window).scroll(function(){
      var $wTop  = $(window).scrollTop(),
          activeNum, active, next, offset;

      // For each heading in the list   
      for (var i = 0; i < hlist.length; i++) {
        var h = hlist[i];
        
        // Add a 'top' attribute  
        h.top = h.el.offset().top;
        
        // If the heading 'top' is above the window scroll, set the active heading number to the current heading number
        if($wTop > h.top) {
          activeNum = i;
        } else {
          break;
        }
      }
      
      // If we're not scrolled far enough to show a heading, hide the sticky header      
      if(activeNum === undefined) {
        if(!clone.hasClass('hidden')) {
          clone.html("&nbsp;").addClass('hidden');
          prevNum = null;
        }
        return;
      } else {
        clone.removeClass('hidden');
      }
            
      // If the top of the next header is within the height of the sticky header, scroll the sticky header up
      // (this creates the bump effect as the headers scroll)
      active = hlist[activeNum];
      next = hlist[activeNum + 1];
      
      if(next !== undefined) {
        if($wTop > next.top - active.height) {
          var headingOffset = active.height + $wTop - next.top - 1;
          clone.css('top', "-" + headingOffset + "px");
        } else {
          clone.css('top', "0px");
        }
      } else {
        clone.css('top', "0px");
      }
      
      // Change the contents of the sticky header to the current header
      if(activeNum !== prevNum) {
        prevNum = activeNum;
        clone.html(active.el.html());
      }
    });
  };


})(jQuery);
