var nameOfDish = ["Pierogi", "Wiener Schnitzel", "Fatteh"];
var i = 0;
for (var _i = 0, nameOfDish_1 = nameOfDish; _i < nameOfDish_1.length; _i++) {
    var value = nameOfDish_1[_i];
    $("ul").append("<li><a href=\"#" + (i + 1) + "\"><p>" + value + "</p></a></li>");
    i++;
}
;
var dish = JSON.parse(data);
for (var i_1 in dish) {
    $(".images").append("\n\t\t<div class=\"row pb-4 m-y-auto\">\n\t\t\t<img src=\"" + dish[i_1].src + "\" alt=\"" + dish[i_1].name + "\" class=\"foto img-thumbnail col-6\" id=\"" + dish[i_1].id + "\">\n\t\t\t<div class=\"col-6 comments\">\n\t\t\t\t<h1>" + dish[i_1].name + "</h1>\n\t\t\t\t<p class=\"mb-0\">" + dish[i_1].desc + "</p>\n\t\t\t\t<span><a href=\"" + dish[i_1].href + "\">See more</a></span>\n\t\t\t\t<p>Price: " + dish[i_1].price + " \u20AC</p>\n\t\t\t\t<p class=\"ourRating\">Rating: " + dish[i_1].rating + "</p>\n\t\t\t\t<button class=\"thumbUp\"><i class=\"fas fa-thumbs-up\"></i></button>\n\t\t\t\t<button class=\"thumbDown\"><i class=\"fas fa-thumbs-down\"></i></button>\n\t\t\t\t<p>Your comment:</p>\n\t\t\t\t<input type=\"text\" name=\"text\">\n\t\t\t\t<button type=\"submit\" class=\"sendText\">Send</button>\n\t\t\t</div>\n\t\t</div>\n\t");
}
var inputs = $("input");
var buttons = $(".sendText");
var thumbUp = $(".thumbUp");
var thumbDown = $(".thumbDown");
var ourRating = $(".ourRating");
var _loop_1 = function (i_2) {
    buttons[i_2].addEventListener("click", function () {
        $(".comments:eq(" + i_2 + ")").append("\n\t\t\t<p>" + inputs[i_2].value + "</p>\n\t\t\t");
        inputs[i_2].value = "";
    });
    thumbUp.addEventListener("click", function () {
        console.log("click");
        ourRating.value++;
    });
    thumbDown.addEventListener("click", function () {
        ourRating.value--;
    });
};
for (var i_2 = 0; i_2 < buttons.length; i_2++) {
    _loop_1(i_2);
}
