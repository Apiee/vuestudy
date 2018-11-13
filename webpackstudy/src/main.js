
import $ from 'jquery';

import './css/index.css';
import './css/index.scss'

const $ = require("jquery");

$(function(){
	$('li:odd').css('backgroundColor', 'red');
	$('li:even').css('backgroundColor', function() {
		return '#' + '958B38';
	});
})
