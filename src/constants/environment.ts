export default class Environment {
    static isDevMode(): boolean {
        const env = process.env.NODE_ENV || "development";
        return env === "development";
    }

    static port(): any {
        if (this.isDevMode()) return 3000;
        return process.env.PORT;
    }
}