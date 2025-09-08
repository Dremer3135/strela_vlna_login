/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3762977101")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date588356002",
    "max": "",
    "min": "",
    "name": "onSiteStart",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date2487464121",
    "max": "",
    "min": "",
    "name": "onSiteEnd",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3762977101")

  // update field
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

  // update field
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
})
