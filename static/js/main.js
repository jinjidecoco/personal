
(function( $ ){
  $.fn.maxHeight = function() {
    var max = 0;
    this.each(function() {
      max = Math.max( max, $(this).height() );
    });
    alert (max);
  };
})( jQuery );

(function( $, window, document, undefined) {
    $.fn.plugins=function(option){
		 var defaults = { background:"green",width:"120px"};
	   	 var setting= $.extend( defaults, option);
	   	 this.css("background",setting.background).css("width",setting.width);
	   	 return this;
	}
})(jQuery,window,document);
 // 实现对齐
(function( $ ){
   $.fn.autoWidth=function(option){
   	  var defaults={
           limmit:false
   	  }
   	  if(option){
   	  	$.extend(defaults,option);
   	  }
   	  var setting=$.extend(defaults,option);
   	  var maxWidth=0;
   	    this.each(function(){
          if($(this).width()>maxWidth){
          	  maxWidth = $(this).width();
          }
   	  });
   	   this.width(maxWidth);   	
   }
    /*$.fn.autoWidth = function(options) {
                var settings = {
                    limitWidth: false
                }
                
                if(options) {
                    $.extend(settings,options);
                }

                var maxWidth = 0;
                this.each(function(){
                    if($(this).width() > maxWidth) {
                        if(settings.limitWidth && maxWidth >= settings.limitWidth){
                            maxWidth = settings.limitWidth;
                        } else {
                            maxWidth = $(this).width();
                        }
                    }
                }); 
                this.width(maxWidth);
            }       */
})(jQuery);

(function($,window,document,undefined){
    $.fn.tab=function(option){
       	var defaults={
       		index:0,
       		evtype:"mouseover",
       		contentcls: "content",
       		navcls: "nav",
       		curcls: "cur",
       		effect:""
       	};
       	var setting=$.extend(defaults,option);
        return this.each(function(){
          var $this=$(this),  
       	      method={},
       	      $triggers=$this.find("." + setting.navcls +">"+ "li"),
       	      $content=$this.find("."+ setting.contentcls);
       	      $len=$content.length;
       	      $triggers.each(function(){
                  $(this).on(setting.evtype,function(e){
                  	  var i=$(this).index();
                  	  if(setting.effect==""){
                      $content.eq(i).addClass(setting.curcls).siblings().removeClass(setting.curcls);
       	            }else{
       	            	$content.hide().eq(i).show();
       	            }
       	          })
       	      })
        })
    }
})(jQuery,window,document)

