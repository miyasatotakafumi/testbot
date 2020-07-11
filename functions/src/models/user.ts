import { Entity } from '@google-cloud/datastore/build/src/entity'

export interface User extends Entity {
  userId: string
}

export const initData = (userId: string): User | Entity => {
  return {
    userId,
  }
}

export const initUserData = (user: User): User | Entity => {
  return user
}
