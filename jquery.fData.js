$.fn.fData = function (data) {

	var $form = this;

	if (!data) {
		return $form.serializeArray().reduce((obj, field) => {
			obj[field.name] = field.value;
			return obj;
		}, {});
	}

	$.each(data, (key, val) => {
		$form[0][key].value = val;
	});

	return data;
};
