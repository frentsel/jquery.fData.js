$.fn.fData = function (_data) {

	var $form = this;

	if (!_data) {
		return $form.serializeArray().reduce(function (obj, field) {
			obj[field.name] = field.value;
			return obj;
		}, {});
	}

	$.each(_data, function (key, val) {
		$form[0][key].value = val;
	});

	return _data;
};