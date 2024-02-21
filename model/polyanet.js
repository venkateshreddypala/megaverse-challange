const SpaceObject = require("./spaceObject");
const {megaversePolyanetURL} = require("../config/env-config");

class Polyanet extends SpaceObject {
    constructor(row, column, toBeDeleted = false) {
        super(row, column, toBeDeleted);
        this.URL = megaversePolyanetURL;
    }
}

module.exports = Polyanet;