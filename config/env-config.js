class EnvConfig {
    static crossMintCandidateId = "e0f0c67e-bace-483b-9bc4-8f8f9aa4c988";
    static crossMintBaseURL = "https://challenge.crossmint.io/api";
    static crossMintGoalURL = `${this.crossMintBaseURL}/map/${this.crossMintCandidateId}/goal`;
    static crossMintExistingMapURL = `${this.crossMintBaseURL}/map/${this.crossMintCandidateId}`;
    static megaversePolyanetURL = `${this.crossMintBaseURL}/polyanets`;
    static megaverseSoloonURL = `${this.crossMintBaseURL}/soloons`;
    static megaverseComethURL = `${this.crossMintBaseURL}/comeths`;
    static setTimeoutInterval = 500;
}

module.exports = EnvConfig;