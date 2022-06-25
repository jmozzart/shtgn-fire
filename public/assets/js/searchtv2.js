$(function() {
  $("#search").on("keyup", function() {
    $(".users").html("");
    var val = $.trim(this.value);
    if (val) {
      val = val.toLowerCase();
      $.each(basicproductdata, function(_,obj) {
       // console.log(val,obj.name.toLowerCase().indexOf(val),obj)
        if (obj.name.toLowerCase().indexOf(val) != -1) {
          $(".users").append('<div class=col-md-4>\n<div class="single-product-items">\n<div class="product-item-image">\n<a href='+obj.targeturl+'><img loading="lazy" src=/assets/images/product/'+obj.targeturl+'_m.webp alt='+obj.producttitle+'><\/a>\n<div class='+obj.displaydiscountind+' product-discount-tag>\n<p>'+obj.discountprct+'<\/p>\n<\/div>\n<\/div>\n<div class=product-item-content>\n<h5 class=product-title><a href=\/products\/'+obj.targeturl+'>'+obj.producttitle+'<\/a><\/h5>\n<ul class=rating>\n<li><i class=lni-'+obj.ratingstars[0]+'><\/i><\/li>\n<li><i class=lni-'+obj.ratingstars[1]+'><\/i><\/li>\n<li><i class=lni-'+obj.ratingstars[2]+'><\/i><\/li>\n<li><i class=lni-'+obj.ratingstars[3]+'><\/i><\/li>\n<li><i class=lni-'+obj.ratingstars[4]+'><\/i><\/li>\n<\/ul>\n<span class="current-price">₱'+obj.skucurrentprice[0]+'<\/span>\n<span class=original-price>₱'+obj.skuprice[0]+'<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n');
        }
      });
    }
    $(".not-found").toggle($(".users").find("img").length==0);
  });
});

