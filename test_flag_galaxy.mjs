import { Flagsmith } from "flagsmith-nodejs";
const flagsmith = new Flagsmith({ environmentKey: process.env.FLAGSMITH_API_KEY || 'KE5KthrJtg8eQTTa2sBcta' });
const flags = await flagsmith.getEnvironmentFlags();
console.log("Galaxy lab2_feature enabled:", flags.isFeatureEnabled("lab2_feature"));
