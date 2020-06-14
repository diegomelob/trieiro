'use strict';

const { MongoClient } = require('mongodb');
const Boom = require('boom');

const factory = state => ({
  client() {
    state.mongoDb = MongoClient;
    return MongoClient;
  },
  db() {
    return state.mongoDb;
  },

  save: (msg, config, mongo, collection) => new Promise(resolve => mongo.client().connect(
    config.uri, { useNewUrlParser: true },
    (err, db) => {
      if (err) throw new Error(`Error calling connect save: ${err}`);
      const dbo = db.db(config.base);
      dbo.collection(collection).insertOne(msg, (e) => {
        if (e) throw new Error(`Error calling collection save: ${e}`);
        db.close();
        resolve();
      });
    }
  )),

  find: (config, mongo, collection, conditions = {}) => new Promise(resolve => mongo.client().connect(
    config.uri, { useNewUrlParser: true },
    (err, db) => {
      if (err) throw new Error(`Error calling connect find: ${err}`);
      const dbo = db.db(config.base);
      dbo.collection(collection).find(conditions)
        .toArray((e, data) => {
          if (e) throw new Error(`Error calling collection find: ${e}`);
          db.close();
          resolve(data);
        });
    }
  )),

  search: (config, mongo, collection, conditions = {}) => new Promise((resolve, reject) => mongo.client().connect(
    config.uri, { useNewUrlParser: true },
    (err, db) => {
      if (err) throw new Error(`Error calling connect find: ${err}`);
      const dbo = db.db(config.base);
      dbo.collection(collection).createIndex({point:"2dsphere"});
      dbo.collection(collection).find(conditions)
        .toArray((e, data) => {
          if (e) reject(Boom.badRequest("Bad request").output.payload);
          db.close();
          resolve(data);
        });
    }
  )),
});

module.exports = factory;
