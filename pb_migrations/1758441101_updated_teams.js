/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1568971955")

  // update collection data
  unmarshal({
    "createRule": "teacher.id = @request.auth.id",
    "listRule": "teacher.id = @request.auth.id",
    "viewRule": "teacher.id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1568971955")

  // update collection data
  unmarshal({
    "createRule": "",
    "listRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
