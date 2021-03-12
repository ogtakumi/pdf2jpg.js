import { fromPath } from "pdf2pic";

const options = {
  density: 100,
  saveFilename: "uuid",
  savePath: "E:\\1stAPP\\pdf2jpg\\pdf",
  format: "jpeg",
 
};
const storeAsImage = fromPath("E:\\1stAPP\\pdf2jpg\\pdf\\overdrive.pdf", options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");

  return resolve;
});