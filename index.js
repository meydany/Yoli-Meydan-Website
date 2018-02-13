const imageHeight = $("#image-container").height();
const imageWidth = $("#image-container").width();
const imageUrl = `https://source.unsplash.com/${imageWidth}x${imageHeight}/?programming,technology,website,computer,tech`
$("#image-container > #image").css("background-image", `url(${imageUrl})`);

// $("#image-container #background-photo").attr("src", imageUrl);
//
// $("#image-container").css("height", imageHeight + "px");
