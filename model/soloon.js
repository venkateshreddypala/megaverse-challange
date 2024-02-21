const SpaceObject = require("./spaceObject");
const {megaverseSoloonURL} = require("../config/env-config");

class Soloon extends SpaceObject {
    constructor(row, column, color, toBeDeleted = false) {
        super(row, column, toBeDeleted);
        this.URL = megaverseSoloonURL;
        this.data.color = color;
    }
}

module.exports = Soloon;