/* * mikan.js JavaScript Web Library *  JavaScript Module * * Copyright (C) 2008-15 K.Sonohara * Code released under [Mozilla Public License, version 2.0](https://github.com/ksonohara/mikan_js/blob/master/LICENSE) * * https://github.com/ksonohara/mikan_js/ * http://www.expertsoftware-i.com/ * *//* --------------------------------------------------------------------------------------------- *  Import Section * --------------------------------------------------------------------------------------------- *//* --------------------------------------------------------------------------------------------- *  Constant Section * --------------------------------------------------------------------------------------------- *//* --------------------------------------------------------------------------------------------- *  Variable Section * --------------------------------------------------------------------------------------------- */mikan.report = {};mikan.report.bill = {};/* --------------------------------------------------------------------------------------------- *  Function Section * --------------------------------------------------------------------------------------------- */mikan.report.bill.desc = function (id, _items, target) {	var h = "";	for (i in target) {		var d = target[i];		h += '<tr>';		h += '<th class="text-right" style="white-space: nowrap;">';		if (d.title != undefined) {			h += d.title + ":";		} else {			h += " ";		}		h += '</th>';		h += '<td>';		if (d.text != undefined) {			h += d.text;		} else {			h += " ";		}		h += '</td>';		h += '</tr>';	}	$("#" + id).html(h);};mikan.report.bill.total = function (_items) {	var h = "";	for (i in items.total) {		var d = _items.total[i];		h += '<tr>';		if (d.bold) {			var t = 'th';		} else {			var t = 'td';		}		h += '<' + t + ' class="text-right">';		if (d.title != undefined) {			h += d.title + ":";		} else {			h += " ";		}		h += '</' + t + '>';		h += '<' + t + ' class="text-right">';		h += '<span> ';		if (d.text != undefined) {			h += d.text;		} else {			h += " ";		}		h += ' </span>';		h += '<span>' + _items.base.yen + '</span>';		h += '</' + t + '>';		h += '</tr>';	}	$("#bill_total").html(h);};mikan.report.bill.to_from = function (id, _items, target, tag) {	var h = "<" + tag + ' style="white-space: nowrap;">' + target.title + "</" + tag + ">";	h += '<div class="container">';	for (i in target.text) {		h += '<p>';		h += target.text[i];		h += '</p>';	}	h += '</div>';	$("#" + id).html(h);};mikan.report.bill.title = function (_items) {	$("#bill_title").html(_items.base.title);};mikan.report.bill.price = function (_items) {	var h = "";	for (i in items.total) {		var d = _items.total[i];		h = d.text;	}	$("#bill_pirce").html(h + ' ' + items.base.yen);};mikan.report.bill.items = function (_items) {	var h = "";	for (i in items.total) {		var d = _items.items[i];		h += '<tr>';		if (d.bold) {			var t = 'th';		} else {			var t = 'td';		}		h += '<' + t + ' class="text-center">';		if (d.title != undefined) {			h += d.title;		} else {			h += " ";		}		h += '</' + t + '>';		h += '<' + t + ' class="text-left">';		if (d.text != undefined) {			h += d.text;		} else {			h += " ";		}		h += '</' + t + '>';		h += '<' + t + ' class="text-right">';		h += '<span> ';		if (d.price != undefined) {			h += d.price;		} else {			h += " ";		}		h += ' </span>';		h += '</' + t + '>';		h += '<' + t + ' class="text-right">';		h += '<span> ';		if (d.quantity != undefined) {			h += d.quantity;		} else {			h += " ";		}		h += ' </span>';		h += '</' + t + '>';		h += '<' + t + ' class="text-right">';		h += '<span> ';		if (d.total != undefined) {			h += d.total;		} else {			h += " ";		}		h += ' </span>';		h += '</' + t + '>';		h += '</tr>';	}	$("#bill_items").html(h);};mikan.report.bill.show = function (url) {	var _items = mikan.json.load(url);	mikan.report.bill.title(_items);	mikan.report.bill.to_from("bill_to", _items, _items.to, "h3");	mikan.report.bill.to_from("bill_from", _items, _items.from, "h4");	mikan.report.bill.desc("bill_summary", _items, _items.summary);	mikan.report.bill.price(_items);	mikan.report.bill.items(_items);	mikan.report.bill.total(_items);	mikan.report.bill.desc("bill_desc", _items, _items.desc);	return _items;};/* --------------------------------------------------------------------------------------------- *  Class Section * --------------------------------------------------------------------------------------------- *//* --------------------------------------------------------------------------------------------- *  Main Section * --------------------------------------------------------------------------------------------- */