
import { Database } from "newtondb";
import { MemoryAdapter } from "newtondb/adapters/memory-adapter";
import assetsJson from "../config/assets.json"
import profilesJson from "../config/profiles.json";
import pairsJson from "../config/pairs.json";
import reservesJson from "../config/reserves.json";
import strategiesJson from "../config/strategies.json";
import { ConfigurationDB } from "../model/config";

const jsonDB: ConfigurationDB = {
    assets: assetsJson,
    profiles: profilesJson,
    pairs: pairsJson,
    reserves: reservesJson,
    strategies: strategiesJson
}

const adapter = new MemoryAdapter<ConfigurationDB>(jsonDB);
const configDB = new Database<ConfigurationDB>(adapter, {
    collection: {
        assets: {
            primaryKey: "symbol",
        },
        profiles: {
            primaryKey: "code",
        },
        pairs: {
            primaryKey: "code",
        },
    },
});

export class ConfigUtil {
    private static instance: ConfigUtil;
    public db: Database<ConfigurationDB>;

    private constructor(db: Database<ConfigurationDB>) {
        this.db = db;
    }

    public static async getInstance() {
        if (!ConfigUtil.instance) {
            ConfigUtil.instance = new ConfigUtil(configDB);
            await ConfigUtil.instance.db.read();
        }
        return ConfigUtil.instance;
    }
}