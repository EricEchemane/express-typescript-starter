class Environment {
    isDevMode: boolean;
    port: number | string;

    constructor() {
        const env = process.env.NODE_ENV || "development";
        this.isDevMode = env === "development";
        this.port = this.isDevMode ? 2900 : process.env.PORT;
    }
}

const environment = new Environment();

export default environment;