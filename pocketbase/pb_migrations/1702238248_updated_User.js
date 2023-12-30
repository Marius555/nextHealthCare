/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cby6av1m",
    "name": "KontaktinioAsmensVardas",
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
  collection.schema.removeField("cby6av1m")

  return dao.saveCollection(collection)
})
