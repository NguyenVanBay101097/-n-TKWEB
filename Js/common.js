﻿//preventdefault
$(".pre").click(function (event) {
	event.preventDefault();
});
//// slider
var dichvuindex = 0;
slide('img-slide');
function slide(classname) {
	var x = document.getElementsByClassName(classname);
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	if (dichvuindex>=x.length) {
		dichvuindex = 0;
	}
	if (dichvuindex<0) {
		dichvuindex = x.length-1;
	}
	x[dichvuindex].style.display = 'block';
}
function transferimg(x) {
	dichvuindex += x;
	slide('img-slide');
}
//end slider 
//start slider dịch vụ
var dv = 0;
slide_dichvu();
function slide_dichvu() {
	var x = document.getElementsByClassName('li-dichvu');
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	if (dv >= x.length) {
		dv = 0;
	}
	if (dv < 0) {
		dv = x.length - 1;
	}
	x[dv].style.display = 'block';
	dv++;
	setTimeout(slide_dichvu,2000);
}
//start slider san pham ban chay
slide_sp();
function slide_sp() {
	var x = document.getElementsByClassName('ul-bc');
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[0].style.display = 'block';
	var x = document.getElementsByClassName('ul-km');
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[0].style.display = 'block';
}
function nextslide(classname) {
	
	var x = document.getElementsByClassName(classname);
	for (var i = 0; i < x.length; i++) {
		if (x[i].style.display =="block") {
			x[i].style.display = 'none';
			i = i + 1;
			if (i>=x.length) {
				i = 0;
			}
			x[i].style.display = 'block';
			break;
		}
	}
}
//start alert gio hang
function gio() {
	var x = document.getElementById('gio').innerText;
	x = parseInt(x);
	x += 1;
	document.getElementById('gio').innerText = x.toString();
	$('.alert').show().delay(2000).slideUp(function () {
		$(this).hide();
	});
	$('#alert-noidung').text('sản phẩm đã được thêm vào giỏ !!!');
}
//close alert gio
function dong() {
  $('.alert').hide();
}
//start to up
window.onscroll = function ()  {
	scroll();
}
function scroll() {
	var head = document.getElementsByClassName('header-top');
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		var a=document.getElementsByClassName('to-up');
		a[0].style.display = 'block';
	}
	else {
		var a = document.getElementsByClassName('to-up');

		a[0].style.display = 'none';

	}
}
function up() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
//start
