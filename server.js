var markdownpdf = require("markdown-pdf");

markdownpdf({
	cssPath: 'css/style.css',
	paperBorder: '1in',
	renderDelay: 2000
}).from("booklet.md").to("booklet.pdf", function () {
  console.log("Done")
});