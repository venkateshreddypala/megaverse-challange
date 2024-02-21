const MetaverseService = require("./service/megaverse-service");
const {megaverseObjectMapper, megaverseObjectRemoveMapper} = require("./utils/megaverse-object-mapper");
const {setTimeoutInterval} = require("./config/env-config");
const {ObjectType} = require("./enum/objectType");

class App {
    constructor() {
        this.goal = [];
        this.megaverseService = new MetaverseService();
        this.spaceObjectCount = 0;
        this.polyanetObjectCount = 0;
        this.soloonObjectCount = 0;
        this.comethObjectCount = 0;
    }

    async main(clearMegaverse = false) {
        try {
            console.log("Starting App...");

            if (clearMegaverse) {
                console.log("Clearing Megaverse | Getting Existing map...");
                this.goal = await this.megaverseService.getExistingMap();
            } else {
                console.log("Loading Megaverse map...");
                this.goal = await this.megaverseService.getGoal();
            }
            if (this.goal == null) {
                console.log("Error: Could not load goal map");
                return;
            }
            console.log("Megaverse map loaded");

            for (const [rowId, row] of this.goal.entries()) {
                for (const [columnId, item] of row.entries()) {
                    //console.log(`Object ${item} at row ${rowId}, column ${columnId}`);

                    /* Check if universe clear has been issued */
                    if (clearMegaverse) {
                        const spaceObject = megaverseObjectRemoveMapper(item, rowId, columnId);
                        if (spaceObject != null) {
                            await this.megaverseService.removeObject(spaceObject);
                            //wait for sometime to avoid rate limiting
                            await new Promise((resolve) => setTimeout(resolve, setTimeoutInterval));
                        }
                    } else {
                        this.countSpaceObjects(item);
                        const spaceObject = megaverseObjectMapper(item, rowId, columnId);
                        if (spaceObject != null) {
                            await this.megaverseService.placeObject(spaceObject);
                            //wait for sometime to avoid rate limiting
                            await new Promise((resolve) => setTimeout(resolve, setTimeoutInterval));
                        }
                    }
                }

            }
            /* Just for logging purpose */
            if (clearMegaverse) {
                console.log("Megaverse cleared.");
            } else {
                console.log("Megaverse created with below Objects.");
                console.log(`SpaceObject Count: ${this.spaceObjectCount}`);
                console.log(`PolyanetObject Count: ${this.polyanetObjectCount}`);
                console.log(`SoloonObject Count: ${this.soloonObjectCount}`);
                console.log(`CometObject Count: ${this.comethObjectCount}`);
            }
        } catch (error) {
            console.error(`Error creating Megaverse : ${error}`);
        } finally {
            console.log("Stopping App...");
        }
    }

    countSpaceObjects(item) {
        if (item === ObjectType.Space) {
            this.spaceObjectCount++;
        } else if (item === ObjectType.Polyanet) {
            this.polyanetObjectCount++;
        } else if (item === ObjectType.BlueSoloon || item === ObjectType.RedSoloon || item === ObjectType.WhiteSoloon || item === ObjectType.PurpleSoloon) {
            this.soloonObjectCount++;
        } else if (item === ObjectType.UpCometh || item === ObjectType.DownCometh || item === ObjectType.LeftCometh || item === ObjectType.RightCometh) {
            this.comethObjectCount++;
        }
    }
}

module.exports = App;