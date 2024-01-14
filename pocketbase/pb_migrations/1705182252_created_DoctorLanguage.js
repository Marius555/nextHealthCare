/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "grb2xk01wyws6x1",
    "created": "2024-01-13 21:44:12.392Z",
    "updated": "2024-01-13 21:44:12.392Z",
    "name": "DoctorLanguage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pw7pnp85",
        "name": "LithuanianLanguage",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "vdfamn8f",
        "name": "EnglishLanguage",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "juoeexsa",
        "name": "RussianLanguage",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "fwctd0uf",
        "name": "CanConsultLithuanian",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xx1qfuz1",
        "name": "CanConsultEnglish",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tf1un94e",
        "name": "CanConsultRussian",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("grb2xk01wyws6x1");

  return dao.deleteCollection(collection);
})
