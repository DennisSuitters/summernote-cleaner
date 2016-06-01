(function(factory){
    if(typeof define==='function'&&define.amd){
        define(['jquery'],factory)
    }else if(typeof module==='object'&&module.exports){
        module.exports=factory(require('jquery'));
    }else{
        factory(window.jQuery)
    }
}
(function($){
    $.extend(true,$.summernote.lang,{
        'en-US':{
            cleaner:{
                tooltip:'Cleaner',
                notification:'Text has been Cleaned!'
            }
        }
    });
    $.extend($.summernote.options,{
        element:'.summernote',
        time:1200,
        action:'both',
        cleaner:{
            icon:'<i class="note-icon"><svg xmlns="http://www.w3.org/2000/svg" id="libre-paintbrush" viewBox="0 0 14 14"><path d="m 11.821425,1 q 0.46875,0 0.82031,0.311384 0.35157,0.311384 0.35157,0.780134 0,0.421875 -0.30134,1.01116 -2.22322,4.212054 -3.11384,5.035715 -0.64956,0.609375 -1.45982,0.609375 -0.84375,0 -1.44978,-0.61942 -0.60603,-0.61942 -0.60603,-1.469866 0,-0.857143 0.61608,-1.419643 l 4.27232,-3.877232 Q 11.345985,1 11.821425,1 z m -6.08705,6.924107 q 0.26116,0.508928 0.71317,0.870536 0.45201,0.361607 1.00781,0.508928 l 0.007,0.475447 q 0.0268,1.426339 -0.86719,2.32366 Q 5.700895,13 4.261155,13 q -0.82366,0 -1.45982,-0.311384 -0.63616,-0.311384 -1.0212,-0.853795 -0.38505,-0.54241 -0.57924,-1.225446 -0.1942,-0.683036 -0.1942,-1.473214 0.0469,0.03348 0.27455,0.200893 0.22768,0.16741 0.41518,0.29799 0.1875,0.130581 0.39509,0.24442 0.20759,0.113839 0.30804,0.113839 0.27455,0 0.3683,-0.247767 0.16741,-0.441965 0.38505,-0.753349 0.21763,-0.311383 0.4654,-0.508928 0.24776,-0.197545 0.58928,-0.31808 0.34152,-0.120536 0.68974,-0.170759 0.34821,-0.05022 0.83705,-0.07031 z"/></svg></i>'
      }
    });
    $.extend($.summernote.plugins,{
        'cleaner':function(context){
            var self=this;
            var ui=$.summernote.ui;
            var $note=context.layoutInfo.note;
            var $editor=context.layoutInfo.editor;
            var $editable=context.layoutInfo.editable;
            var options=context.options;
            var lang=options.langInfo;
            var cleanText=function(clntxt){
                var stringStripper=/(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
                var output=clntxt.replace(stringStripper,' ');
                var commentStripper=new RegExp('<!--(.*?)-->','gi');
                output=output.replace(commentStripper,'');
                var tagStripper=new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>','gi');
                output=output.replace(tagStripper,'');
                var badTags=['style','script','applet','embed','noframes','noscript'];
                for(var i=0;i<badTags.length;i++){
                    tagStripper=new RegExp('<'+badTags[i]+'.*?'+badTags[i]+'(.*?)>','gi');
                    output=output.replace(tagStripper,'');
                }
                var badAttributes=['style','start'];
                for(var ii=0;ii<badAttributes.length;ii++){
                    var attributeStripper=new RegExp(' '+badAttributes[i]+'="(.*?)"','gi');
                    output=output.replace(attributeStripper,'');
                }
                return output;
            };
            $('.note-statusbar').css({'position':'relative'});
            if(options.action=='both'||options.action=='button'){
                context.memo('button.cleaner',function(){
                    var button=ui.button({
                        contents:options.cleaner.icon,
                        tooltip:lang.cleaner.tooltip,
                        click:function(){
                            unsaved=true;
                            var text=cleanText($(options.element).text());
                            $(options.element).summernote("code",text);
                            $('.note-resizebar').append('<div id="cleanerAlert" style="position:absolute;bottom:0;left:2px;font-size:10px;">'+lang.cleaner.notification+'</div>');
                            setTimeout(function(){$('#cleanerAlert').remove();},options.time);
                        }
                    });
                    return button.render();
                });
            }
            this.events={
                'summernote.paste':function(we,e){
                    if(options.action=='both'||options.action=='paste'){
                        e.preventDefault();
                        var ua = window.navigator.userAgent;
                        var msie = ua.indexOf("MSIE ");
                        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  { // If Internet Explorer, return version number
                            var text=window.clipboardData.getData("Text");
                            
                        } else { // If another browser, return 0
                            var text=e.originalEvent.clipboardData.getData('text/plain');
                        }
                        var text=cleanText(text);
                        var $dom=$('<div class="pasted"/>').html(text);
                        $note.summernote('insertNode',$dom[0]);
                        $('.note-resizebar').append('<div class="cleanerAlert" style="position:absolute;bottom:0;left:2px;font-size:10px;">'+lang.cleaner.notification+'</div>');
                        setTimeout(function(){$('.cleanerAlert').remove();},options.time);
                    }
                }
            }
        }
    });
}));
