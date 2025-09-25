/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("743x1hijt9924v2")

  // update collection data
  unmarshal({
    "authRule": "verified=true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("743x1hijt9924v2")

  // update collection data
  unmarshal({
    "authRule": ""
  }, collection)

  return app.save(collection)
})
