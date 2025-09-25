/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("743x1hijt9924v2")

  // remove field
  collection.fields.removeById("vophmclz")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("743x1hijt9924v2")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "vophmclz",
    "max": 0,
    "min": 0,
    "name": "school",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
