import { Line } from '../line.config'
import { initUser } from '../lib'
import { datastoreGetFindBy } from '../lib/gcloud/datastore'
import { dsKindUser } from '../models'
import { User } from '../models/user'

export const follow = async (event: Line.FollowEvent): Promise<string> => {
  const user: User | undefined = await datastoreGetFindBy(
    dsKindUser,
    'userId',
    event.source.userId
  )

  await initUser(event, user)

  return '友達登録されました'
}
