import { Datastore } from '@google-cloud/datastore'
import { Entity, Entities } from '@google-cloud/datastore/build/src/entity'

export const datastore = new Datastore()
export const transaction = datastore.transaction()

export const datastoreInsert = async (
  kind: string,
  data: Entities
): Promise<void> => {
  data = Array.isArray(data) ? data : [data]
  const key = datastore.key(kind)
  const entities: Entities = []
  for (let i = 0; i < data.length; i++) {
    entities.push({ key, data: data[i] })
  }
  console.log(entities)
  await datastore.save(entities)
}

export const datastoreUpdate = async (
  kind: string,
  data: Entity
): Promise<void> => {
  const id = data[datastore.KEY].id
  const key = datastore.key([kind, parseInt(id, 10)])
  await datastore.save({ key, data })
}

export const datastoreGet = async (kind: string): Promise<Entities> => {
  return await datastoreGetWhere(kind, null, null)
}

export const datastoreGetWhere = async (
  kind: string,
  columnName: string | null,
  data: Entity | null
): Promise<Entities> => {
  let query
  if (columnName) {
    query = datastore.createQuery(kind).filter(columnName, '=', data)
  } else {
    query = datastore.createQuery(kind)
  }

  const [entities] = await datastore.runQuery(query)
  return entities
}

export const datastoreGetFindBy = async (
  kind: string,
  columnName: string | null,
  data: Entity | null
): Promise<Entity> => {
  const entities = await datastoreGetWhere(kind, columnName, data)
  return entities[0]
}

export const datastoreDelete = async (data: Entities): Promise<void> => {
  await datastore.delete(data)
}
