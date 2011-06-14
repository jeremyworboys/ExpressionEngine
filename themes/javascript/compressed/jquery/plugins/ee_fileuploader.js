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

(function(a){var d,c,f,h=!0;a.ee_fileuploader=function(b){c=a.extend({},{},b);a.ee_filebrowser.endpoint_request("setup_upload",function(b){d=a(b.uploader).appendTo(document.body);d.removeClass().addClass("before_upload");c.type=="filemanager"?d.find(".button_bar .filebrowser").remove():c.type=="filebrowser"&&d.find(".button_bar .filemanager").remove();a(document).ready(function(){a.ee_fileuploader.build_dialog()});typeof c.load=="function"&&c.load.call(this,d)})};a.ee_fileuploader.build_dialog=function(){d.dialog({width:600,
height:370,resizable:!1,position:["center","center"],modal:!0,draggable:!0,title:EE.fileuploader.window_title,autoOpen:!1,zIndex:99999,open:function(){g("before_upload");f={};a("#file_uploader .button_bar .loading").addClass("visualEscapism");a("#file_uploader .button_bar #upload_file").unbind().addClass("disabled-btn").removeClass("submit");typeof c.open=="function"&&c.open.call(this,d);i()},close:function(){typeof window.upload_iframe.file!="undefined"&&(h&&a.ajax({url:EE.BASE+"&"+EE.fileuploader.delete_url,
type:"POST",dataType:"json",data:{file:f.file_id,XID:EE.XID},error:function(a,e){console.log(e)}}),typeof c.close=="function"&&c.close.call(this,d,f))}});a(c.trigger).live("click",function(a){a.preventDefault();d.dialog("open")})};var i=function(){a("#file_uploader .button_bar #rename_file").click(function(b){b.preventDefault();a("#file_uploader iframe").contents().find("form").submit()});a("#file_uploader .button_bar .cancel").live("click",function(a){a.preventDefault();d.dialog("close")})};a.ee_fileuploader.enable_upload=
function(){a("#file_uploader .button_bar #upload_file").addClass("submit").removeClass("disabled-btn").click(function(b){b.preventDefault();a("#file_uploader .button_bar .loading").removeClass("visualEscapism");a("#file_uploader iframe").contents().find("form").submit()})};a.ee_fileuploader.set_directory_id=function(b){if(!isNaN(parseInt(b,10))){var e=d.find("iframe").attr("src"),c=e.search("&directory_id="),f=a.ee_filebrowser.get_current_settings();c>0&&(e=e.substring(0,c));e=e+"&directory_id="+
b;a("#dir_choice_form:visible").size()<=0&&(e+="&restrict_directory=true");f.content_type=="image"&&(e+="&restrict_image=true");d.find("iframe").attr("src",e);return b}return!1};a.ee_fileuploader.file_exists=function(b){a.ee_fileuploader.update_file(b);g("file_exists")};a.ee_fileuploader.after_upload=function(b){a.ee_fileuploader.update_file(b);h=!1;typeof c.after_upload=="function"&&c.after_upload.call(this,d,f);g("after_upload");c.type=="filemanager"?b.is_image?a("#file_uploader .button_bar #edit_file").unbind().show().click(function(){var b=
a(".mainTable tr.new:first td:has(img) a[href*=edit_image]").attr("href");a(this).attr("href",b)}):a("#file_uploader .button_bar #edit_file").hide():c.type=="filebrowser"&&(a("#file_uploader .button_bar #choose_file").unbind().one("click",function(b){b.preventDefault();d.dialog("close");a.ee_filebrowser.clean_up(f,"")}),a("#file_uploader .button_bar #edit_file_modal").unbind().show().one("click",function(b){b.preventDefault();a("#file_uploader iframe").contents().find("form#resize_rotate").submit();
a(this).hide()}))};a.ee_fileuploader.update_file=function(a){f=a};var g=function(b){a("#file_uploader").removeClass("before_upload after_upload file_exists").addClass(b)}})(jQuery);
