import { client, Line, errorMessage } from '../line.config'
import { makeReplyMessages } from '../lib/line'

export const error = async (event: Line.WebhookEvent): Promise<void> => {
  const { userId } = event.source
  await client.pushMessage(userId as string, makeReplyMessages(errorMessage))
}
