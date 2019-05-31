function getGridStatus(inputGridArray) {

    const noTokensOnThisRow = inputGridRow => inputGridRow === ".......";
    const emptyGrid = inputGridArray => inputGridArray.every(noTokensOnThisRow);

    const redWentLastOnRow = inputGridRow => inputGridRow.indexOf('R') !== -1;
    const redWentLast = inputGridArray => inputGridArray.some(redWentLastOnRow);

    const redWinsRow = inputGridRow => inputGridRow.toUpperCase().indexOf('RRRR') !== -1;
    const redWinsHorizontally = inputGridArray => inputGridArray.some(redWinsRow);

    if (emptyGrid(inputGridArray)) return "Red plays next";

    if (redWinsHorizontally(inputGridArray)) return "Red wins";

    return redWentLast(inputGridArray)
        ? "Yellow plays next"
        : "Red plays next";
}

module.exports = getGridStatus;