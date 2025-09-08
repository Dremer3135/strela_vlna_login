/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3762977101")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date777384463",
    "max": "",
    "min": "",
    "name": "onlineEnd",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date588356002",
    "max": "",
    "min": "",
    "name": "inPersonStart",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date2487464121",
    "max": "",
    "min": "",
    "name": "inPersonEnd",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3762977101")

  // remove field
  collection.fields.removeById("date777384463")

  // remove field
  collection.fields.removeById("date588356002")

  // remove field
  collection.fields.removeById("date2487464121")

  return app.save(collection)
})
