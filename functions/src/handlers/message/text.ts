import { Line, client } from '../../line.config'
import { initUser } from '../../lib'
import { datastoreGetFindBy } from '../../lib/gcloud/datastore'
import { dsKindUser } from '../../models'
import { User } from '../../models/user'
import { makeReplyMessages } from '../../lib/line'
// import * as status from '../../status'

export const text = async (event: Line.MessageEvent): Promise<string> => {
  const user: User | undefined = await datastoreGetFindBy(
    dsKindUser,
    'userId',
    event.source.userId
  )

  if (!user) {
    await initUser(event, user)
    return 'ユーザーデータを初期化'
  }

  const { text } = event.message as Line.TextMessage
  await client.replyMessage(event.replyToken, makeReplyMessages(text))

  return 'オウム返し'
}
