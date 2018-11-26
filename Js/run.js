//navigator click
$('.navigator').click(function () {
		$(' .navigator ul').toggle();
});

//danh muc click
$('.title-list span').click(function () {
		$('.list>ul').toggle();
	});
//scroll bar
window.onscroll = function () {
	scroll();
	
};
//slide san pham
slide_sp();

