
$('#review-items').pagination({
    dataSource: reviewdata,
    pageSize: 5, //give you page size (how many reviews per page)
    autoHidePrevious: true,
    autoHideNext: true,
	pageRange: 1,
	showFirstOnEllipsisShow: false,
    className: 'paginationjs-theme-blue',
    callback: function (data, pagination) {
        let reviewString = '';
        data.forEach((item) => {
            let rvwphotoString = '';
            item.photosurl.forEach((rphoto) => {
                if (rphoto == "") {
                    rvwphotoString += ``;
                } else {
                    rvwphotoString += `<a href=\"..\/assets\/images\/product\/review\/${rphoto}.jpg\"><img src=\"..\/assets\/images\/product\/review\/${rphoto}.webp\" ><\/a>`;
                }
            });

            reviewString += `<li>\n<div class=\"single-review d-sm-flex\">\n<div class=\"review-content media-body\">\n<div class=\"review-name\">\n<h5 class=\"name\">${item.name}<\/h5>\n<span>${item.dateposted}<\/span>\n<ul class=\"review-rating mt-15\">\n<li><i class=\"lni-${item.reviewstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.reviewstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.reviewstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.reviewstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.reviewstars[4]}\"><\/i><\/li>\n<\/ul>\n<\/div>\n<div class=\"\">\n${rvwphotoString}\n<\/div>\n<p class=\"mt-10\">${item.reviewtext}<\/p>\n<\/div>\n<\/div>\n<\/li>\n`;
        });
        var html = reviewString;
        $('#reviewloopDiv').html(html);
    }
});
