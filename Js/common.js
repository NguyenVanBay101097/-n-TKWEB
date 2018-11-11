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