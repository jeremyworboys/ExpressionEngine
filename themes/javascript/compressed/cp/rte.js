
(function(a){function e(b){a.get(b,function(b){$contents=a("#mainContent .contents",b);$contents.size()?(modal_contents=$contents.html(),modal_title=a("#mainContent .edit",b).text()):(modal_contents=b,modal_title=EE.rte.lang.edit_my_toolset);d.find(".contents").html(modal_contents).find("div.heading").remove().end().end().dialog("option","title",modal_title).dialog("open")})}function g(){a("#rte-builder-closer").click(function(a){a.preventDefault();d.dialog("close")});a("#rte-tools-selected, #rte-tools-unused").sortable({connectWith:".rte-tools-connected",
containment:".rte-toolset-builder",placeholder:"rte-tool-placeholder",revert:200,tolerance:"pointer",beforeStop:function(a,c){c.item.replaceWith(c.helper.children().removeClass("rte-tool-active"))},helper:function(b,c){a(".rte-tools-connected").not(a(this)).children().removeClass("rte-tool-active");c.addClass("rte-tool-active");var f=a(".rte-tool-active");f.length||(f=c.addClass("rte-tool-active"));return a("<div/>").attr("id","rte-drag-helper").css("opacity",0.7).width(a(c).outerWidth()).append(f.clone())},
start:function(){a(this).children(".rte-tool-active").hide().addClass("rte-tool-remove");a(this).children(".ui-sortable-placeholder").removeClass("rte-tool-active")},stop:function(){a(".rte-tool-remove").remove();a(".rte-placeholder-fix").remove();a(".rte-tools-connected").append('<li class="rte-placeholder-fix"/>')}});a(".rte-tools-connected").append('<li class="rte-placeholder-fix"/>');d.find("form").submit(function(b){b.preventDefault();var c=[];a("#rte-tools-selected .rte-tool").each(function(){c.push(a(this).data("tool-id"))});
a("#rte-toolset-tools").val(c.join("|"));a.post(a(this).attr("action"),a(this).serialize(),function(b){if(b.error)a("#rte_toolset_editor_modal .notice").text(b.error);else if(a.ee_notice(b.success,{type:"success"}),d.dialog("close"),b.force_refresh)window.location=window.location},"json")})}var d=a('<div id="rte_toolset_editor_modal"><div class="contents"/></div>');d.dialog({width:600,resizable:!1,position:["center","center"],modal:!0,draggable:!0,autoOpen:!1,zIndex:99999,open:function(){g()}});a("body").on("change",
"#rte_toolset_id",function(){var b=a(this).val();b=="0"||b==EE.rte.my_toolset_id?(a("#edit_toolset").show(),b=="0"&&e(EE.rte.url.edit_my_toolset.replace(/&amp;/g,"&"))):a("#edit_toolset").hide()});a("#rte_toolset_id").change();a("#edit_toolset").click(function(){e(EE.rte.url.edit_my_toolset.replace(/&amp;/g,"&"))});a("body").on("click",".edit_toolset",function(b){b.preventDefault();e(a(this).attr("href"))});d.on("click",".rte-tool",function(){a(this).toggleClass("rte-tool-active")})})(jQuery);
