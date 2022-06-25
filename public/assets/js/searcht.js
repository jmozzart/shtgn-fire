function searchValue() {
  let srchString = ''
  var searchField = $('#search').val().toLowerCase().trim();
  let srchVal = basicproductdata.filter(val => val.name.includes(searchField))
  srchVal.slice(-20).forEach((item) => {
    srchString += `<div class=\"col-lg-3 col-md-6 col-sm-8\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#resultDiv').empty().append(srchString)
}

$("#search").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#searchbutton").click();
    }
});


let DiningCatString = ''

  let DiningCatVal = basicproductdata.filter(val => val.category.includes("Dinnerware"))
  DiningCatVal.slice(0,6).forEach((item) => {
    DiningCatString += `<div class=\"col-md-4\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#DinnerwareTab').empty().append(DiningCatString)
  
  

let FashionCatString = ''

  let FashionCatVal = basicproductdata.filter(val => val.category.includes("Fashion"))
  FashionCatVal.slice(0,6).forEach((item) => {
    FashionCatString += `<div class=\"col-md-4\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#FashionTab').empty().append(FashionCatString)
  


let HomeCatString = ''
  let HomeCatVal = basicproductdata.filter(val => val.category.includes("Home"))
  HomeCatVal.slice(0,6).forEach((item) => {
    HomeCatString += `<div class=\"col-md-4\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#HomeTab').empty().append(HomeCatString)


let OfficeCatString = ''
  let OfficeCatVal = basicproductdata.filter(val => val.category.includes("Office"))
  OfficeCatVal.slice(0,6).forEach((item) => {
    OfficeCatString += `<div class=\"col-md-4\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#OfficeTab').empty().append(OfficeCatString)


let PCMobCatString = ''
  let PCMobCatVal = basicproductdata.filter(val => val.category.includes("Computer and Mobile Accessories"))
  PCMobCatVal.slice(0,6).forEach((item) => {
    PCMobCatString += `<div class=\"col-md-4\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#MobilePCTab').empty().append(PCMobCatString)


let KitchenCatString = ''
  let KitchenCatVal = basicproductdata.filter(val => val.category.includes("Kitchen"))
  KitchenCatVal.slice(0,6).forEach((item) => {
    KitchenCatString += `<div class=\"col-md-4\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#KitchenTab').empty().append(KitchenCatString)

  
 
/*  FEATURED PRODUCTS */
let slstart = Math.floor(Math.random() * 109);
let slend = slstart + 40;
let ramdomlistString = ''
  /*let ramdomlistVal = basicproductdata.filter(val => val.collection.includes("feature"))*/
  basicproductdata.slice(slstart,slend).forEach((item) => {
    ramdomlistString += `<div class=\"col-lg-3 col-md-6 col-sm-8\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"d-none product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#resultDiv').empty().append(ramdomlistString)


/*  FEATURED PRODUCTS */

let featuredString = ''
  let featuredVal = basicproductdata.filter(val => val.collection.includes("feature"))
  featuredVal.slice(0,8).sort(function(a, b){return 0.5 - Math.random()}).forEach((item) => {
    featuredString += `<div class=\"col-lg-3 col-md-6 col-sm-8\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#FeaturedTab').empty().append(featuredString)

/*  UNIQUE GIFT SECTION */

let uniqgftString = ''
  let uniqgftVal = basicproductdata.filter(val => val.collection.includes("unique gift"))
  uniqgftVal.slice(0,8).sort(function(a, b){return 0.5 - Math.random()}).forEach((item) => {
    uniqgftString += `<div class=\"col-lg-3 col-md-6 col-sm-8\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"\/products\/${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"${item.displaydiscountind} product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#uniqgftTab').empty().append(uniqgftString)
 
