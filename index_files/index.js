                window.onload=function(){
//nav;
	var oIndex_nav=document.getElementById("index_nav");
	var aIndex_li=oIndex_nav.getElementsByTagName("li");
	for(var i=0;i<aIndex_li.length;i++){
	aIndex_li[i].onmouseover=function(){
		
		for(i=0;i<aIndex_li.length;i++){
			if(aIndex_li[i].children[1]){
				aIndex_li[i].children[1].style.display="none";
				};
			};
			if(this.children[1]){
			this.children[1].style.display="block";
			}
		};
	};
	document.onclick=function(){
		for(i=0;i<aIndex_li.length;i++){
			if(aIndex_li[i].children[1]){
				aIndex_li[i].children[1].style.display="none";
				};
			};
		};
				
				
				
					var oLanguage=document.getElementById("language");
					var oL_menu=document.getElementById("language_menu");
                	var oL_list=document.getElementById("language_list");
					oLanguage.onmouseover=function(){
						oL_list.style.display="block";
						};
					oLanguage.onmouseout=function(){
						oL_list.style.display="none";	
					};
//language;

//banner;
if(document.getElementById("banner_top"))
{


				var oBanner_out=document.getElementById("banner_top");
				} 
            	var oBanner_ul=document.getElementById("banner_ul");
				var oBanner_nav=document.getElementById("banner_nav");
				var aBanner_span=oBanner_nav.getElementsByTagName("span")
				var aBanner_li=oBanner_ul.getElementsByTagName("li");
				oBanner_ul.style.width=aBanner_li[0].offsetWidth*aBanner_li.length+"px";
				var iNow_banner=0;
            	for(var i=0;i<aBanner_span.length;i++){
					aBanner_span[i].index=i;
					aBanner_span[i]. onclick=function(){
						iNow_banner=this.index;
						bannerMove();
						};
					}
					var bannerTimer=null;
				clearInterval(bannerTimer);
				bannerTimer=setInterval(function(){
					iNow_banner++;
					if(iNow_banner==aBanner_li.length){
						iNow_banner=0;
						bannerMove();
						}else{
							bannerMove();
							};
					},4000)
					function bannerMove(){
						for(var i=0;i<aBanner_span.length;i++){
							aBanner_span[i].className="";
							}
						startMove(oBanner_ul,{"left":-iNow_banner*aBanner_li[0].offsetWidth});
						aBanner_span[iNow_banner].className="banenr_nav_hover";
						};
						oBanner_out.onmouseover=function(){
							clearInterval(bannerTimer);
							};
						oBanner_out.onmouseout=function(){
				bannerTimer=setInterval(function(){
					iNow_banner++;
					if(iNow_banner==aBanner_li.length){
						iNow_banner=0;
						bannerMove();
						}else{
							bannerMove();
							};
					},4000)
							};


//hezuo_gundong;
                var oHezuo=document.getElementById("hezuo_ul");
                var aHe_li=oHezuo.getElementsByTagName("li");
                oHezuo.style.width=(aHe_li[0].offsetWidth+7)*aHe_li.length+"px";
                var hezuo_timer=null;
                clearInterval(hezuo_timer);
                var sPeed=1;
                hezuo_timer=setInterval(function(){
                    if(oHezuo.offsetLeft==-oHezuo.offsetWidth/2){
                        oHezuo.style.left=0+'px';
                        }else{
                    oHezuo.style.left=oHezuo.offsetLeft-sPeed+'px';
                    };
                    },30)
         //index_lunbo;           
            var lunbo_out=document.getElementById("index_lunbo");
            var lunbo_p=document.getElementById("index_prev");
            var lunbo_n=document.getElementById("index_next");
            var lunBo=document.getElementById("index_lunbo_ul");
            var aLunbo=lunBo.getElementsByTagName("li");
            var iNow_lunbo=0;
            lunBo.style.width=aLunbo.length*(aLunbo[0].offsetWidth+9)+"px";
            var lunbo_timer=null;
            clearInterval(lunbo_timer);
            lunbo_timer=setInterval(function(){
                iNow_lunbo++;
                lunboMove();
                },3000);
                function lunboMove(){
                    if(iNow_lunbo>=aLunbo.length-2){
                        iNow_lunbo=0;
                        startMove(lunBo,{"left":-iNow_lunbo*(aLunbo[0].offsetWidth+9)});	
                        }else if(iNow_lunbo<0){
                            iNow_lunbo=aLunbo.length-3;
                            startMove(lunBo,{"left":-iNow_lunbo*(aLunbo[0].offsetWidth+9)});
                            }else{
                        startMove(lunBo,{"left":-iNow_lunbo*(aLunbo[0].offsetWidth+9)});	
                            };
                    }
                lunbo_p.onclick=function(){
                    iNow_lunbo--;
                    lunboMove();
                    };
                lunbo_n.onclick=function(){
                    iNow_lunbo++;
                    lunboMove();
                    };
                lunbo_out.onmouseover=function(){
                    clearInterval(lunbo_timer);
                    };
                lunbo_out.onmouseout=function(){
                        lunbo_timer=setInterval(function(){
                            lunbo_p.title=lunbo_n.title='';
                            iNow_lunbo++;
                            lunboMove();
                            },5000);
                    };

				};