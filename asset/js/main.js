document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("export_XLX").addEventListener("click", function () {
    const subNumber = document.querySelector("#sub_number").value;
    const XBase = document.querySelector("#X_base").value;
    const YBase = document.querySelector("#Y_base").value;
    const landLength = document.querySelector("#land_length").value;
    // const landWidth = document.querySelector('#land_width').value

    const XZero = parseInt(XBase - parseInt(landLength) / 2);
    const YZero = parseInt(YBase - parseInt(landLength) / 2);
    const XEnd = XZero + parseInt(landLength);

    const numOfEachSide = parseInt(Math.round(Math.sqrt(subNumber)));
    const distanceBWPoint = landLength / numOfEachSide;

    let pointArr = [];
    let newX = XZero;
    let newY = YZero;

    for (let i = 0; i <= subNumber; i++) {
      if (newX < XEnd) {
        newX += distanceBWPoint;
        newY = newY;
      } else {
        newX = XZero;
        newY += distanceBWPoint;
      }

      pointArr = [...pointArr, { x: newX, y: newY }];
    }

    console.log(pointArr);

    // convert object to csv-----------------

    var workbook2 = XLSX.utils.book_new(),
      worksheet = XLSX.utils.json_to_sheet(pointArr);
    workbook2.SheetNames.push("First");
    workbook2.Sheets["First"] = worksheet;

    // download file ----------------------
    XLSX.writeFile(workbook2, "demo.xlsx");
  });
});
