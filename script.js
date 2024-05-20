function changeText() {
	const head1 = document.getElementById("myHead");
	head1.textContent = "Hello JavaScript InnerHTML!";
	head1.classList.toggle("text-pink-400");
}
changeH1();

function showHidden() {
	const text = document.getElementById("hidden-text");
	text.classList.toggle("hidden");
}
showHidden();
