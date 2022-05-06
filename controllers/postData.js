const XLSX = require("xlsx");
const sheetData = require("../models/ExcelData");
const each = require("async-each-series");

exports.postData = (req, res, next) => {
  //Read spreadsheet bytes from a local file and extract data
  const workbook = XLSX.readFile(req.file.path);
  //workbook.SheetNames is an ordered list of the sheets in the workbook
  const sheet_namelist = workbook.SheetNames;

  const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[0]]);
  each(
    xlData,
    function (el, next) {
      sheetData
        .findOne({ Email: el.Email }, (err, result) => {
          if (err) console.log(err);

          if (result === null) {
            sheetData.insertMany(el).then(() => console.log("Added", el.Email));
          } else {
            console.log("matching",el.Email);
          }
        })
        .then(() => next());
    },
    function (err) {
      res.send("Successful....!");
    }
  );
};
