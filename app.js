const i1 = prompt("Url for image 1");
const i2 = prompt("Url for image 2");
const i3 = prompt("Url for image 3");
const i4 = prompt("Url for image 4");
const i = [i1, i2, i3, i4];

console.log(i);
const images = document.querySelectorAll("img");
images.forEach((a, index) => {
	a.setAttribute("src", i[index]);
});
