/*!
 * 
 * jQuery typeMenu
 * 
 * This plugin  is written for Typefolio
 * 
 * Original author: Ye Joo Park
 * Licensed under the MIT license
 *
 */
!function(e){function i(i,s){this.element=i,this.options=e.extend({},n,s),this._defaults=n,this._name=t,this.init()}var t="typeMenu",n={mobileToggle:!0,mobileWrapperId:"menu-mobile-wrapper",mobileMenuId:"menu-mobile",toggleElementId:"toggle-menu",menuOnCollapseText:"Menu",menuOnExpandText:"Close",addFirstLevelArrow:!0,firstLevelArrow:'<span class="arrow">&nbsp;&#x25BE;</span>',addDeeperLevelArrow:!0,deeperLevelArrow:'<span class="arrow">&nbsp;&#x25B8;</span>',breakpoint:768};i.prototype.init=function(){var i=e(this.element),t=e(i).html(),n=this.options.mobileWrapperId,s=this.options.mobileMenuId,o=this.options.toggleElementId,l=this.options.firstLevelArrow,r=this.options.deeperLevelArrow,a=this.options.menuOnCollapseText,p=this.options.menuOnExpandText,d="#"+n,u="#"+s,h="#"+o;this.options.addFirstLevelArrow&&e("> li:has(ul)",i).addClass("hasChild").find("a:first").append(l),this.options.addDeeperLevelArrow&&e("li ul li:has(ul)",i).find("a:first").append(r),e("a",i).focus(function(){e(this).parents("li").addClass("hover")}).blur(function(){e(this).parents("li").removeClass("hover")}),1==this.options.mobileToggle&&(e("body").css({position:"relative"}).prepend("<div id="+n+'><div class="container"><div class="desktop-12 columns"><ul id="menu-mobile"></ul></div></div></div>'),e(u).html(t).before('<div id="'+o+'">'+a+"</div>"),e(h).bind("click",function(){e(u).stop().slideToggle(),e(d).toggleClass("toggle-open"),e(d).hasClass("toggle-open")?e(h).text(p):e(h).text(a)}))},e.fn[t]=function(n){return this.each(function(){e.data(this,"plugin_"+t)||e.data(this,"plugin_"+t,new i(this,n))})}}(jQuery,window,document);