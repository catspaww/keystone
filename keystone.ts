import { config, list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text } from "@keystone-6/core/fields";

export default config({
  lists: {
    User: list({
      access: allowAll,
      fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: "unique" })
      }
    })
  },
  db: {
    provider: "postgresql",
    url: "postgres://savvycom:savvycom2023@10.22.4.168:8864/postgres",
    enableLogging: true,
    idField: { kind: "uuid" }
  }
});
