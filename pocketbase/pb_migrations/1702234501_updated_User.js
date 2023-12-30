/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Rsno2tW` ON `User` (`ImonsKodas`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l56vgo1ehw2asva")

  collection.indexes = []

  return dao.saveCollection(collection)
})
