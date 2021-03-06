// /* remove tags, change uppercase keywords to tags */

const fs = require("fs");
const jp = require("jsonpath");

let rawdata = fs.readFileSync("centros.json");
let colegios = JSON.parse(rawdata);

const colegiosFiltered = colegios.map(colegio => ({ name: colegio.nombre_centro, url: '', cp: colegio.nombre_cp }))

fs.writeFile("./colegios.json", JSON.stringify(colegiosFiltered), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});