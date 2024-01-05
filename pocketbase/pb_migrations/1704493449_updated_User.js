/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l8zevn3o",
    "name": "FirstLogin",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  // remove
  collection.schema.removeField("l8zevn3o")

  return dao.saveCollection(collection)
})
