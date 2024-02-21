const {ObjectType} = require("../enum/objectType");
const Polyanet = require("../model/polyanet");
const Soloon = require("../model/soloon");
const {ObjectColor} = require("../enum/objectColor");
const Cometh = require("../model/cometh");
const {ObjectDirection} = require("../enum/objectDirection");

class MegaverseObjectMapper {
    static megaverseObjectMapper(item, row, column) {
        switch (item) {
            default:
                return null;
            case ObjectType.Polyanet:
                return new Polyanet(row, column, false);
            case ObjectType.BlueSoloon:
                return new Soloon(row, column, ObjectColor.Blue, false);
            case ObjectType.RedSoloon:
                return new Soloon(row, column, ObjectColor.Red, false);
            case ObjectType.WhiteSoloon:
                return new Soloon(row, column, ObjectColor.White, false);
            case ObjectType.PurpleSoloon:
                return new Soloon(row, column, ObjectColor.Purple, false);
            case ObjectType.UpCometh:
                return new Cometh(row, column, ObjectDirection.Up, false);
            case ObjectType.DownCometh:
                return new Cometh(row, column, ObjectDirection.Down, false);
            case ObjectType.LeftCometh:
                return new Cometh(row, column, ObjectDirection.Left, false);
            case ObjectType.RightCometh:
                return new Cometh(row, column, ObjectDirection.Right, false);
        }
    }

    static megaverseObjectRemoveMapper(item, row, column) {
        if(item!= null && item.type !== undefined && item.type !== null && typeof item == "object" ) {
            switch (item.type) {
                default:
                    return null;
                case 0:
                    return new Polyanet(row, column, true);
                case 1:
                    return new Soloon(row, column, item.type.color, true);
                case 2:
                    return new Cometh(row, column, item.type.direction, true);
            }
        }
        return null;
    }
}

module.exports = MegaverseObjectMapper;