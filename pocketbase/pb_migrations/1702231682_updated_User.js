/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecwb4yc7",
    "name": "UserType",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  // remove
  collection.schema.removeField("ecwb4yc7")

  return dao.saveCollection(collection)
})
