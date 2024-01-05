/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95txc3utjgcq2mo")

  // remove
  collection.schema.removeField("h2hvnafl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eov09wi8",
    "name": "BirthDay",
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
  const collection = dao.findCollectionByNameOrId("95txc3utjgcq2mo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h2hvnafl",
    "name": "BirthDay",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("eov09wi8")

  return dao.saveCollection(collection)
})
