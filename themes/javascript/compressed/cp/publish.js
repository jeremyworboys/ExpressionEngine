/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		ExpressionEngine Dev Team
 * @copyright	Copyright (c) 2003 - 2011, EllisLab, Inc.
 * @license		http://expressionengine.com/user_guide/license.html
 * @link		http://expressionengine.com
 * @since		Version 2.0
 * @filesource
 */

EE.publish=EE.publish||{};
EE.publish.category_editor=function(){var b=[],c=$("<div />"),h=$('<div id="cat_modal_container" />').appendTo(c),d={},k={},j=EE.BASE+"&C=admin_content&M=category_editor&group_id=",l,i,f,m={};c.dialog({autoOpen:!1,height:450,width:600,modal:!0});$(".edit_categories_link").each(function(){var a=this.href.substr(this.href.lastIndexOf("=")+1);$(this).data("gid",a);b.push(a)});for(f=0;f<b.length;f++)d[b[f]]=$("#cat_group_container_"+[b[f]]),d[b[f]].data("gid",b[f]),k[b[f]]=$("#cat_group_container_"+[b[f]]).find(".cat_action_buttons").remove();
l=function(a){d[a].text("loading...").load(j+a+"&timestamp="+ +new Date+" .pageContents table",function(){i.call(d[a],d[a].html(),!1)})};i=function(a,g){var e=$(this),o=e.data("gid"),a=$.trim(a);e.hasClass("edit_categories_link")&&(e=$("#cat_group_container_"+o));if(a[0]!=="<"&&g)return l(o);e.closest(".cat_group_container").find("#refresh_categories").show();var b=$(a),n,d,f;if(b.find("form").length){h.html(b);b=h.find("input[type=submit]");n=h.find("form");d=n.find("#cat_name");f=n.find("#cat_url_title");
d.keyup(function(){d.ee_url_title(f)});var m=function(a){var g=a||$(this),a=g.serialize(),g=g.attr("action");$.ajax({url:g,type:"POST",data:a,dataType:"html",beforeSend:function(){e.html(EE.lang.loading)},success:function(a){a=$.trim(a);c.dialog("close");a[0]=="<"?(a=$(a).find(".pageContents"),a.find("form").length==0&&e.html(a),a=a.wrap("<div />").parent(),i.call(e,a.html(),!0)):i.call(e,a,!0)},error:function(a){a=$.parseJSON(a.responseText);c.html(a.error)}});return!1};n.submit(m);var j={};j[b.remove().attr("value")]=
function(){m(n)};c.dialog("open");c.dialog("option","buttons",j);c.one("dialogclose",function(){l(o)})}else k[o].clone().appendTo(e).show();return!1};f=function(){$(this).hide();var a=$(this).data("gid"),g=".pageContents";if($(this).hasClass("edit_cat_order_trigger")||$(this).hasClass("edit_categories_link"))g+=" table";a||(a=$(this).closest(".cat_group_container").data("gid"));m[a]=d[a].find("input:checked").map(function(){return this.value}).toArray();d[a].text(EE.lang.loading);$.ajax({url:this.href+
"&timestamp="+ +new Date+g,success:function(e){var b="",e=$.trim(e);e[0]=="<"&&(e=$(e).find(g),b=$("<div />").append(e).html(),e.find("form").length==0&&d[a].html(b));i.call(d[a],b,!0)},error:function(e){e=$.parseJSON(e.responseText);d[a].html(e.error);i.call(d[a],e.error,!0)}});return!1};$(".edit_categories_link").click(f);$(".cat_group_container a:not(.cats_done)").live("click",f);$(".cats_done").live("click",function(){var a=$(this).closest(".cat_group_container"),g=a.data("gid");$(".edit_categories_link").each(function(){$(this).data("gid")==
g&&$(this).show()});a.text("loading...").load(EE.BASE+"&C=content_publish&M=category_actions&group_id="+a.data("gid")+"&timestamp="+ +new Date,function(e){a.html($(e).html());$.each(m[g],function(e,g){a.find("input[value="+g+"]").attr("checked","checked")})});return!1})};Number.prototype.is_integer=String.prototype.is_integer=function(){var b=parseInt(this,10);if(isNaN(b))return!1;return this==b&&this.toString()==b.toString()};
EE.publish.get_percentage_width=function(b){if(b.attr("data-width")&&b.attr("data-width").slice(0,-1).is_integer())return parseInt(b.attr("data-width"),10);return Math.round(b.width()/b.parent().width()*10)*10};
EE.publish.save_layout=function(){var b=0,c={},h={},d=0,k=!1,j=$("#tab_menu_tabs li.current").attr("id");$(".main_tab").show();$("#tab_menu_tabs a:not(.add_tab_link)").each(function(){if($(this).parent("li").attr("id")&&$(this).parent("li").attr("id").substring(0,5)=="menu_"){var f=$(this).parent("li").attr("id").substring(5),a=$(this).parent("li").attr("id").substring(5),g=$(this).parent("li").attr("title");d=0;visible=!0;$(this).parent("li").is(":visible")?(lay_name=f,c[lay_name]={},c[lay_name]._tab_label=
g):(k=!0,visible=!1);$("#"+a).find(".publish_field").each(function(){var a=$(this),g=this.id.replace(/hold_field_/,""),a=EE.publish.get_percentage_width(a),b=$("#sub_hold_field_"+g+" .markItUp ul li:eq(2)");a>100&&(a=100);b=b.html()!=="undefined"&&b.css("display")!=="none"?!0:!1;a={visible:$(this).css("display")==="none"||visible===!1?!1:!0,collapse:$("#sub_hold_field_"+g).css("display")==="none"?!0:!1,htmlbuttons:b,width:a+"%"};visible===!0?(a.index=d,c[lay_name][g]=a,d+=1):h[g]=a});visible===!0&&
b++}});if(k==!0){var l,i,f=0;for(darn in c){i=darn;for(l in c[i])c[i][l].index>f&&(f=c[i][l].index);break}$.each(h,function(){this.index=++f});jQuery.extend(c[i],h)}EE.tab_focus(j.replace(/menu_/,""));b===0?$.ee_notice(EE.publish.lang.tab_count_zero,{type:"error"}):$("#layout_groups_holder input:checked").length===0?$.ee_notice(EE.publish.lang.no_member_groups,{type:"error"}):$.ajax({type:"POST",dataType:"json",url:EE.BASE+"&C=content_publish&M=save_layout",data:"XID="+EE.XID+"&json_tab_layout="+
JSON.stringify(c)+"&"+$("#layout_groups_holder input").serialize()+"&channel_id="+EE.publish.channel_id,success:function(b){b.messageType==="success"?$.ee_notice(b.message,{type:"success"}):b.messageType==="failure"&&$.ee_notice(b.message,{type:"error"})}})};
EE.publish.remove_layout=function(){if($("#layout_groups_holder input:checked").length===0)return $.ee_notice(EE.publish.lang.no_member_groups,{type:"error"});$.ajax({type:"POST",url:EE.BASE+"&C=content_publish&M=save_layout",data:"XID="+EE.XID+"&json_tab_layout={}&"+$("#layout_groups_holder input").serialize()+"&channel_id="+EE.publish.channel_id+"&field_group="+EE.publish.field_group,success:function(){$.ee_notice(EE.publish.lang.layout_removed+' <a href="javascript:location=location">'+EE.publish.lang.refresh_layout+
"</a>",{duration:0,type:"success"});return!0}});return!1};EE.publish.change_preview_link=function(){$select=$("#layout_preview select");$link=$("#layout_group_preview");base=$link.attr("href").split("layout_preview")[0];$link.attr("href",base+"layout_preview="+$select.val());$.ajax({url:EE.BASE+"&C=content_publish&M=preview_layout",type:"POST",dataType:"json",data:{XID:EE.XID,member_group:$select.find("option:selected").text()}})};
EE.date_obj_time=function(){var b=new Date,c=b.getHours(),b=b.getMinutes(),h="";b<10&&(b="0"+b);EE.date.format=="us"&&(h=c<12?" AM":" PM",c!=0&&(c=(c+11)%12+1));return" '"+c+":"+b+h+"'"}();file_manager_context="";
function disable_fields(b){var c=$(".main_tab input, .main_tab textarea, .main_tab select, #submit_button"),h=$("#submit_button"),d=$("#holder").find("a");b?(disabled_fields=c.filter(":disabled"),c.attr("disabled",!0),h.addClass("disabled_field"),d.addClass("admin_mode"),$("#holder div.markItUp, #holder p.spellcheck").each(function(){$(this).before('<div class="cover" style="position:absolute;width:100%;height:50px;z-index:9999;"></div>').css({})})):(c.removeAttr("disabled"),h.removeClass("disabled_field"),
d.removeClass("admin_mode"),$(".cover").remove(),disabled_fields.attr("disabled",!0))}
$(document).ready(function(){function b(a){if(a)return a=a.toString(),a=a.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(a,b){var c=b.split("|!|");return altKey===!0?c[1]!==void 0?c[1]:c[0]:c[1]===void 0?"":c[0]}),a=a.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(a,b){var c=b.split(":!:");if(f===!0)return!1;value=prompt(c[0],c[1]?c[1]:"");value===null&&(f=!0);return value});return""}function c(a,g){var b=$("input[name="+g+"]").closest(".publish_field");a.is_image==!1?b.find(".file_set").show().find(".filename").html('<img src="'+
EE.PATH_CP_GBL_IMG+'default.png" alt="'+EE.PATH_CP_GBL_IMG+'default.png" /><br />'+a.file_name):b.find(".file_set").show().find(".filename").html('<img src="'+a.thumb+'" /><br />'+a.file_name);$("input[name="+g+"_hidden]").val(a.file_name);$("select[name="+g+"_directory]").val(a.directory)}var h,d;$("#layout_group_submit").click(function(){EE.publish.save_layout();return!1});$("#layout_group_remove").click(function(){EE.publish.remove_layout();return!1});$("#layout_preview select").change(function(){EE.publish.change_preview_link()});
$("a.reveal_formatting_buttons").click(function(){$(this).parent().parent().children(".close_container").slideDown();$(this).hide();return!1});$("#write_mode_header .reveal_formatting_buttons").hide();$("a.glossary_link").click(function(){$(this).parent().siblings(".glossary_content").slideToggle("fast");$(this).parent().siblings(".smileyContent .spellcheck_content").hide();return!1});EE.publish.smileys===!0&&($("a.smiley_link").toggle(function(){$(this).parent().siblings(".smileyContent").slideDown("fast",
function(){$(this).css("display","")})},function(){$(this).parent().siblings(".smileyContent").slideUp("fast")}),$(this).parent().siblings(".glossary_content, .spellcheck_content").hide(),$(".glossary_content a").click(function(){var a=$(this).closest(".publish_field"),b=a.attr("id").replace("hold_field_","field_id_");a.find("#"+b).insertAtCursor($(this).attr("title"));return!1}));if(EE.publish.autosave&&EE.publish.autosave.interval){var k=!1;d=function(){k||(k=!0,setTimeout(h,1E3*EE.publish.autosave.interval))};
h=function(){var a;$("#tools:visible").length===1?d():(a=$("#publishForm").serialize(),$.ajax({type:"POST",dataType:"json",url:EE.BASE+"&C=content_publish&M=autosave",data:a,success:function(a){a.error?console.log(a.error):a.success?(a.autosave_entry_id&&$("input[name=autosave_entry_id]").val(a.autosave_entry_id),$("#autosave_notice").text(a.success)):console.log("Autosave Failed");k=!1}}))};var j=$("textarea, input").not(":password,:checkbox,:radio,:submit,:button,:hidden"),l=$("select, :checkbox, :radio, :file");
j.bind("keypress change",d);l.bind("change",d)}if(EE.publish.pages){var j=$("#pages__pages_uri"),i=EE.publish.pages.pagesUri;j.val()||j.val(i);j.focus(function(){this.value===i&&$(this).val("")}).blur(function(){this.value===""&&$(this).val(i)})}EE.publish.markitup.fields!==void 0&&$.each(EE.publish.markitup.fields,function(a){$("#"+a).markItUp(mySettings)});EE.publish.setup_writemode=function(){var a=$("#write_mode_writer"),b=$("#write_mode_textarea"),e,c,d;b.markItUp(myWritemodeSettings);$(window).resize(function(){var b=
$(this).height()-117;a.css("height",b+"px").find("textarea").css("height",b-67-17+"px")}).triggerHandler("resize");$(".write_mode_trigger").overlay({closeOnEsc:!1,closeOnClick:!1,top:"center",target:"#write_mode_container",mask:{color:"#262626",loadSpeed:200,opacity:0.85},onBeforeLoad:function(){var a=this.getTrigger()[0].id;d=a.match(/^id_\d+$/)?$("#field_"+a):$("#"+a.replace(/id_/,""));e=d.getSelectedRange();b.val(d.val())},onLoad:function(){b.focus();b.createSelection(e.start,e.end)},onClose:function(a){a=
$(a.srcElement).closest(".close");a.hasClass("publish_to_field");a.hasClass("publish_to_field")&&(c=b.getSelectedRange(),d.val(b.val()),d.createSelection(c.start,c.end));d.focus()}})};EE.publish.show_write_mode===!0&&EE.publish.setup_writemode();var f=!1;$.ee_filebrowser();$.ee_filebrowser.add_trigger(".btn_img a, .file_manipulate",function(a){var c,e="",d="",f="",h="";textareaId=$(this).closest("#markItUpWrite_mode_textarea").length?"write_mode_textarea":$(this).closest(".publish_field").attr("id").replace("hold_field_",
"field_id_");textareaId!=void 0&&(c=$("#"+textareaId),c.focus());a.is_image?(d=EE.upload_directories[a.directory].properties,f=EE.upload_directories[a.directory].pre_format,h=EE.upload_directories[a.directory].post_format,e=EE.filebrowser.image_tag.replace(/src="(.*)\[!\[Link:!:http:\/\/\]!\](.*)"/,'src="$1{filedir_'+a.directory+"}"+a.name+'$2"'),dimensions="",typeof a.file_hw_original!="undefined"&&a.file_hw_original!=""&&(dimensions=a.file_hw_original.split(" "),dimensions='height="'+dimensions[0]+
'" width="'+dimensions[1]+'"'),e=e.replace(/\/?>$/,dimensions+" "+d+" />"),e=f+e+h):(d=EE.upload_directories[a.directory].file_properties,f=EE.upload_directories[a.directory].file_pre_format,f+='<a href="{filedir_'+a.directory+"}"+a.name+'" '+d+" >",h="</a>",h+=EE.upload_directories[a.directory].file_post_format);c.is("textarea")?(c.is(".markItUpEditor")||(c.markItUp(myNobuttonSettings),c.closest(".markItUpContainer").find(".markItUpHeader").hide(),c.focus()),a.is_image?$.markItUp({replaceWith:e}):
$.markItUp({key:"L",name:"Link",openWith:f,closeWith:h,placeHolder:a.name})):c.val(function(a,c){c+=f+e+h;return b(c)})});$("input[type=file]","#publishForm").each(function(){var a=$(this).closest(".publish_field"),b=a.find(".choose_file"),e=$(this).data("content-type"),d=$(this).data("directory"),e={content_type:e,directory:d};$.ee_filebrowser.add_trigger(b,$(this).attr("name"),e,c);a.find(".remove_file").click(function(){a.find("input[type=hidden]").val("");a.find(".file_set").hide();return!1})});
$(".hide_field span").click(function(){var a=$(this).parent().parent().attr("id").substr(11),b=$("#hold_field_"+a),a=$("#sub_hold_field_"+a);a.css("display")=="block"?(a.slideUp(),b.find(".ui-resizable-handle").hide(),b.find(".field_collapse").attr("src",EE.THEME_URL+"images/field_collapse.png")):(a.slideDown(),b.find(".ui-resizable-handle").show(),b.find(".field_collapse").attr("src",EE.THEME_URL+"images/field_expand.png"));return!1});$(".close_upload_bar").toggle(function(){$(this).parent().children(":not(.close_upload_bar)").hide();
$(this).children("img").attr("src",EE.THEME_URL+"publish_plus.png")},function(){$(this).parent().children().show();$(this).children("img").attr("src",EE.THEME_URL+"publish_minus.gif")});$(".ping_toggle_all").toggle(function(){$("input.ping_toggle").each(function(){this.checked=!1})},function(){$("input.ping_toggle").each(function(){this.checked=!0})});EE.user.can_edit_html_buttons&&($(".markItUp ul").append('<li class="btn_plus"><a title="'+EE.lang.add_new_html_button+'" href="'+EE.BASE+"&C=myaccount&M=html_buttons&id="+
EE.user_id+'">+</a></li>'),$(".btn_plus a").click(function(){return confirm(EE.lang.confirm_exit,"")}));$(".markItUpHeader ul").prepend('<li class="close_formatting_buttons"><a href="#"><img width="10" height="10" src="'+EE.THEME_URL+'images/publish_minus.gif" alt="Close Formatting Buttons"/></a></li>');$(".close_formatting_buttons a").toggle(function(){$(this).parent().parent().children(":not(.close_formatting_buttons)").hide();$(this).parent().parent().css("height","13px");$(this).children("img").attr("src",
EE.THEME_URL+"images/publish_plus.png")},function(){$(this).parent().parent().children().show();$(this).parent().parent().css("height","auto");$(this).children("img").attr("src",EE.THEME_URL+"images/publish_minus.gif")});$(".tab_menu li:first").addClass("current");EE.publish.title_focus==!0&&$("#title").focus();EE.publish.which=="new"&&$("#title").bind("keyup blur",function(){$("#title").ee_url_title($("#url_title"))});EE.publish.versioning_enabled=="n"?$("#revision_button").hide():$("#versioning_enabled").click(function(){$(this).attr("checked")?
$("#revision_button").show():$("#revision_button").hide()});EE.publish.category_editor();if(EE.publish.hidden_fields){EE._hidden_fields=[];var m=$("input");$.each(EE.publish.hidden_fields,function(a){EE._hidden_fields.push(m.filter("[name="+a+"]")[0])});$(EE._hidden_fields).after('<p class="hidden_blurb">This module field only shows in certain circumstances. This is a placeholder to let you define it in your layout.</p>')}});
