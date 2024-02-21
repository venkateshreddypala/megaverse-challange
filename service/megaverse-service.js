const axios = require("axios");
const {axiosConfig} = require("../config/axios-config");
const {crossMintGoalURL, crossMintExistingMapURL} = require("../config/env-config");

class MegaverseService {
    async getGoal() {
        console.log('Starting getGoal()');
        const maxRetries = 3;
        let retryCount = 0;

        while (retryCount < maxRetries) {
            try {
                if (retryCount > 0) {
                    console.log(`Retrying ${retryCount} time(s)`);
                }
                const response = await axios.get(crossMintGoalURL, axiosConfig);
                return response.data.goal;
            } catch (error) {
                console.error(`Error fetching goal map: ${error.response.data.message}`);
                retryCount++;
            }
        }
        return null;
    }

    async getExistingMap() {
        console.log('Starting getExistingMap()');
        const maxRetries = 3;
        let retryCount = 0;

        while (retryCount < maxRetries) {
            try {
                if (retryCount > 0) {
                    console.log(`Retrying ${retryCount} time(s)`);
                }
                const response = await axios.get(crossMintExistingMapURL, axiosConfig);
                return response.data.map.content;
            } catch (error) {
                console.error(`Error fetching existing map: ${error.response.data.message}`);
                retryCount++;
            }
        }
        return null;
    }

    async placeObject(spaceObject) {
        console.log('Starting placeObject()');
        const maxRetries = 3;
        let retryCount = 0;

        while (retryCount < maxRetries) {
            try {
                if (retryCount > 0) {
                    console.log(`Retrying ${retryCount} time(s)`);
                }
                const data = JSON.stringify(spaceObject.data);
                await axios.post(spaceObject.URL, data, axiosConfig);
                console.log(`Object placed in Megaverse at row ${spaceObject.row}, column ${spaceObject.column}`);
                return true;
            } catch (error) {
                const message = `Error: ${error.response.data.reason}`;
                console.error(message);
            }
        }
        return false;
    }

    async removeObject(spaceObject) {
        console.log('Starting removeObject()');
        const maxRetries = 3;
        let retryCount = 0;

        while (retryCount < maxRetries) {
            try {
                const data = JSON.stringify(spaceObject.data);
                await axios.delete(spaceObject.URL, {
                    headers: axiosConfig.headers, data,
                });
                console.log(`Object removed from Megaverse at row ${spaceObject.row}, column ${spaceObject.column}`);
                return true;
            } catch (error) {
                const message = `Error: ${error.response.data.reason}`;
                console.error(message);
            }
        }
        return false;
    }
}

module.exports = MegaverseService;
