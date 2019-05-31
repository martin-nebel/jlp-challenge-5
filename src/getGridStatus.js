function getGridStatus(inputGridArray) {

    const noTokensOnThisRow = inputGridRow => inputGridRow === ".......";
    const emptyGrid = inputGridArray => inputGridArray.every(noTokensOnThisRow);

    if (emptyGrid(inputGridArray)) return "Red plays next";

    return "Who knows?";
}

module.exports = getGridStatus;