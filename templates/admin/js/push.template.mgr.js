/**
	var push_mgr_editor;
	$('#contentType').bind('change', function() {
		if ($(this).val() == 'html')
		{
			push_mgr_editor = KindEditor.create('#content');
			push_mgr_editor.focus();
		}
		else
		{
			KindEditor.remove('#content');
		}
	});
	$('#content').css('width', '500px').css('height', '120px');
});