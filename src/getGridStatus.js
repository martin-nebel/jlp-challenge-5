function getGridStatus(inputGridArray) {

    const noTokensOnThisRow = inputGridRow => inputGridRow === ".......";
    const emptyGrid = inputGridArray => inputGridArray.every(noTokensOnThisRow);
    const redWentLast = inputGridArray => inputGridArray.some(inputGridRow => inputGridRow.indexOf('R') != -1);

    if (emptyGrid(inputGridArray)) return "Red plays next";
    
    return redWentLast(inputGridArray)
        ? "Yellow plays next"
        : "Red plays next";
}

module.exports = getGridStatus;