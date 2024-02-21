const {crossMintCandidateId} = require("../config/env-config");

class SpaceObject {
    constructor(row, column, toBeDeleted = false) {
        this.row = row;
        this.column = column;
        this.toBeDeleted = toBeDeleted;
        this.URL = "";
        this.data = {
            candidateId: crossMintCandidateId,
            row: row,
            column: column,
        };
    }
}

module.exports = SpaceObject;