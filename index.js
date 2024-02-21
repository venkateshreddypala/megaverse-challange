const App = require("./app");

const app = new App();
let clearMegaverse = false;
const arguments = process.argv;
if(arguments[2] !== undefined && arguments[2].toLowerCase() === 'clearmegaverse=true'){
    clearMegaverse = true;
}

app.main(clearMegaverse).then(r => console.log("App Success")).catch(e => console.log("App Error:", e));