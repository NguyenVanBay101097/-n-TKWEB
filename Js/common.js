//preventdefault

//next sản phấm
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
//chuyển slideer
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
//function next slide
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
	document.getElementById('gio1').innerText = x.toString();
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

function scroll() {
	var head = document.getElementsByClassName('header-top');
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		var a=document.getElementsByClassName('to-up');
		a[0].style.display = 'block';
		if ($(window).width()<650) {
			var b = document.getElementsByClassName('mobile');
			b[0].style.display = 'block';
		}
		
	}
	else {
		var a = document.getElementsByClassName('to-up');

		a[0].style.display = 'none';
		var b = document.getElementsByClassName('mobile');

		b[0].style.display = 'none';

	}
}
function up() {
	$('html,body').animate({
		scrollTop: 0
	}, "slow");
	//document.body.scrollTop = 0;
	//document.documentElement.scrollTop = 0;

}

//start đổi ảnh
function doianh(x) {
	$('.avatar').css("background","url("+$(x).attr('src')+") center");
}
//đọc file
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#anh')
				.attr('src', e.target.result)
				.width(150)
				.height(200);
		};

		reader.readAsDataURL(input.files[0]);
	}
}