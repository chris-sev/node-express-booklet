var markdownpdf = require("markdown-pdf");

markdownpdf({
	cssPath: 'css/style.css',
	paperBorder: '1in'
}).from("booklet.md").to("booklet.pdf", function () {
  console.log("Done")
});