let nameOfDish: Array<string> =["Pierogi", "Wiener Schnitzel", "Fatteh"] ;
let i = 0;
for (var value of nameOfDish) {
	$("ul").append(`<li><a href="#${i + 1}"><p>${value}</p></a></li>`);
	i++;
};
let dish = JSON.parse(data);
for(let i in dish){
	$(".images").append(`
		<div class="row pb-4 m-y-auto">
			<img src="${dish[i].src}" alt="${dish[i].name}" class="foto img-thumbnail col-6" id="${dish[i].id}">
			<div class="col-6 comments">
				<h1>${dish[i].name}</h1>
				<p class="mb-0">${dish[i].desc}</p>
				<span><a href="${dish[i].href}">See more</a></span>
				<p>Price: ${dish[i].price} €</p>
				<p class="ourRating">Rating: ${dish[i].rating}</p>
				<button class="thumbUp"><i class="fas fa-thumbs-up"></i></button>
				<button class="thumbDown"><i class="fas fa-thumbs-down"></i></button>
				<p>Your comment:</p>
				<input type="text" name="text">
				<button type="submit" class="sendText">Send</button>
			</div>
		</div>
	`);
}
let inputs = $("input");
let buttons = $(".sendText");
let thumbUp = $(".thumbUp");
let thumbDown = $(".thumbDown");
let ourRating = $(".ourRating");
for(let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(){
		$(".comments:eq("+i+")").append(`
			<p>${(<HTMLInputElement>inputs[i]).value}</p>
			`);
		(<HTMLInputElement>inputs[i]).value = "";
	});
	thumbUp.addEventListener("click", function(){
		console.log("click")
		ourRating.value++;
	})
	thumbDown.addEventListener("click", function(){
		ourRating.value--;
	})

}