const SpaceObject = require("./spaceObject");
const {megaverseComethURL} = require("../config/env-config");

class Cometh extends SpaceObject {
    constructor(row, column, direction, toBeDeleted = false) {
        super(row, column, toBeDeleted);
        this.URL = megaverseComethURL;
        this.data.direction = direction;
    }
}

module.exports = Cometh;