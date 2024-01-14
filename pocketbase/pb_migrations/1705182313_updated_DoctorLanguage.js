/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("grb2xk01wyws6x1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "as1j2inw",
    "name": "UserId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "l56vgo1ehw2asva",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("grb2xk01wyws6x1")

  // remove
  collection.schema.removeField("as1j2inw")

  return dao.saveCollection(collection)
})
