const ratingStars = [...document.getElementsByClassName("rating__star")];
function executeRating(stars) {
   const starClassActive = "lni-star-filled";
   const starClassInactive = "lni-star";
   const starsLength = stars.length;
   let i;
   
	stars.map((star) => {
	  star.onclick = () => {
		 i = stars.indexOf(star);

		 if (star.className===starClassInactive) {        
			for (i; i >= 0; --i) stars[i].className = starClassActive;
		 } else {
			for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
		 }
	  };
   });
   
   }
   executeRating(ratingStars);

