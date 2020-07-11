import { Line } from '../line.config'
import { error } from './error'
import { follow } from './follow'
import { message } from './message'

export default async (
  event: Line.WebhookEvent & Line.ReplyableEvent
): Promise<string> => {
  try {
    switch (event.type) {
      case 'follow': {
        return await follow(event as Line.FollowEvent)
      }
      case 'unfollow': {
        return 'ブロックまたは友達登録を解除されました'
      }
      case 'message': {
        return await message(event as Line.MessageEvent)
      }
      default:
    }
    return ''
  } catch (err) {
    console.log(err)
    await error(event)
    return err
  }
}
