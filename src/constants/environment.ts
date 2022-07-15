export default class Environment {
    static isDevMode() {
        const env = process.env.NODE_ENV || "development";
        return env === "development";
    }

    static port() {
        if (this.isDevMode()) return 3000;
        return process.env.PORT;
    }
}