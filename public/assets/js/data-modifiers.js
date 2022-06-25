let sumall = reviewdata.map(item => item.ratingstars).reduce((prev, curr) => prev + curr, 0);
let averev = sumall / Object.keys(reviewdata).length;
let remainderar = sumall % Object.keys(reviewdata).length;
 
let rstarsstrings = " <li><i class=\"lni-star-filled\"><\/i><\/li> ";
let repstars = rstarsstrings.repeat(Math.floor(averev));


if (isNaN(averev.toFixed(1))) {
	averevRO = "";
} else {
	averevRO = averev.toFixed(1);
}


if (remainderar > 2 && remainderar < 8) {
  remstar = " <li><i class=\"lni-star-half\"><\/i><\/li> ";
} else if (remainderar >= 8) {
  remstar = " <li><i class=\"lni-star-filled\"><\/i><\/li> ";
} else {
  remstar = "";
}


document.getElementById("displaystars").innerHTML = '<ul> ' + averevRO + ' ' + repstars + ' ' +  remstar + ' <\/ul><a href=\"#review\"><span class=\"review\"> ' + Object.keys(reviewdata).length + ' Reviews<\/span><\/a>';


document.getElementById("displayprices").innerHTML = '<span id=\"currentprice\" class=\"current-price\">₱' + basicproductdata[psequenceno].skucurrentprice[0] + '<\/span><span class=\"' + basicproductdata[psequenceno].displayoriginalprice[0] + '\">₱' + basicproductdata[psequenceno].skuprice[0] + '<\/span>';

document.getElementById("availability").innerHTML = '<p>Available : <span>' + basicproductdata[psequenceno].availability + '<\/span><\/p>';




const button = document.querySelector('#scbutton')
const quantity = document.querySelector('#quantity')
quantity.addEventListener('change', () => {
  // Sets the default quantity when adding the item
  button.setAttribute('data-item-quantity', quantity.value)
})


var aprice = 0, bprice = 0; 



function hitVariantA1() {
  aprice = Number(basicproductdata[psequenceno].skucurrentprice[0])
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[0])
  document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}

function hitVariantA2() {
  aprice = Number(basicproductdata[psequenceno].skucurrentprice[1])
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[1])
  document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}


function hitVariantA3() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[2])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[2]
}

function hitVariantA4() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[3])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[3]
}

function hitVariantA5() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[4])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[4]
}

function hitVariantA6() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[5])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[5]
}

function hitVariantA7() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[6])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[6]
}

function hitVariantA8() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[7])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[7]
}

function hitVariantA9() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[8])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[8]
}

function hitVariantA10() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[9])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[9]
}


function hitVariantA11() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[10])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[10]
}


function hitVariantA12() {
  button.setAttribute("data-item-custom1-value", basicproductdata[psequenceno].SKUname[11])
  document.getElementById("currentprice").innerHTML = '₱' + basicproductdata[psequenceno].skucurrentprice[11]
}





/*
function clickVariantFirst() {
  document.getElementById("variantvalidator").innerHTML = "Please select variation first.";
}*/


// Button active 1 
$(document).ready(function () {
	$('.variantbtn').click(function () {
		$('.variantbtn').removeClass('btnactive').addClass('btninactive');
		$(this).removeClass('btninactive').addClass('btnactive');
	});
})


// Button active 1 
$(document).ready(function () {
	$('.variantbtn2').click(function () {
		$('.variantbtn2').removeClass('btnactive2').addClass('btninactive2');
		$(this).removeClass('btninactive2').addClass('btnactive2');
	});
})

		



/*  FEATURED PRODUCTS */
let slstart = Math.floor(Math.random() * 109);
let slend = slstart + 10;
let ramdomlistString = ''
  /*let ramdomlistVal = basicproductdata.filter(val => val.collection.includes("feature"))*/
  basicproductdata.slice(slstart,slend).forEach((item) => {
    ramdomlistString += `<div class=\"col-lg-3 col-md-6 col-sm-8\">\n<div class=\"single-product-items\">\n<div class=\"product-item-image\">\n<a href=\"${item.targeturl}\"><img loading=\"lazy\" src=\"\/assets\/images\/product\/${item.targeturl}\_m.webp\" alt=\"${item.producttitle}\"><\/a>\n<div class=\"d-none product-discount-tag\">\n<p>${item.discountprct}<\/p>\n<\/div>\n<\/div>\n<div class=\"product-item-content text-center mt-30\">\n<h5 class=\"product-title\"><a href=\"\/products\/${item.targeturl}\">${item.producttitle}<\/a><\/h5>\n<ul class=\"rating\">\n<li><i class=\"lni-${item.ratingstars[0]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[1]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[2]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[3]}\"><\/i><\/li>\n<li><i class=\"lni-${item.ratingstars[4]}\"><\/i><\/li>\n<\/ul>\n<span class=\"current-price\">₱${item.skucurrentprice[0]}<\/span>\n<span class=\"${item.displayoriginalprice[0]}\">₱${item.skuprice[0]}<\/span>\n<\/div>\n<\/div> \t\t\t\n<\/div>\n`
  })
  $('#productsuggestions').empty().append(ramdomlistString)



// for 2nd variant

function hitVariantB1() {
  bprice = bprice1
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname0)
  document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}

function hitVariantB2() {
  bprice = bprice2
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname1)
 document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}

function hitVariantB3() {
  bprice = bprice3
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname2)
  document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}

function hitVariantB4() {
  bprice = bprice4
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname3)
 document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}

function hitVariantB5() {
  bprice = bprice5
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname4)
 document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}



function hitVariantB6() {
  bprice = bprice6
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname5)
 document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}



function hitVariantB7() {
  bprice = bprice7
  aplusb = aprice + bprice
  button.setAttribute("data-item-custom2-value", CustSKUname6)
 document.getElementById("currentprice").innerHTML = '₱' + aplusb.toFixed(2)
}

