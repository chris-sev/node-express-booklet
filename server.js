var markdownpdf = require("markdown-pdf");

markdownpdf({
	paperBorder: '1in'
}).from("booklet.md").to("booklet.pdf", function () {
  console.log("Done")
});