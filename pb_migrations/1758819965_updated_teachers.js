/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("743x1hijt9924v2")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "obn6gm7it6ezufs",
    "hidden": false,
    "id": "relation604103800",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "skola",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("743x1hijt9924v2")

  // remove field
  collection.fields.removeById("relation604103800")

  return app.save(collection)
})
