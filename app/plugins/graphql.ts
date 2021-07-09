import { Context } from "@nuxt/types"

import VuexORM from "@vuex-orm/core"
import VuexORMGraphQL from "@vuex-orm/plugin-graphql"

import { HttpLink } from "apollo-link-http"
import fetch from "node-fetch"

import orm from "~/orm"

export default function ({ app, env: { url } }: Context) {
  const apolloClient = app?.apolloProvider?.defaultClient

  VuexORM.use(VuexORMGraphQL, {
    database: orm,
    url,
    apolloClient,
    link: new HttpLink({ uri: url, fetch: fetch as any }),
    debug: process.env.NODE_ENV !== "production",
  })
}
