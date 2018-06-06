import { schema } from "normalizr";

export const KEY = "channels";

export default new schema.Entity(KEY, {}, { idAttribute: "username" });
