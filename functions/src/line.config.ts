import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/dist/types'
import * as Config from 'firebase-functions/lib/config'

const accessToken = Config.config().env.access_token as string
const channelSecret = Config.config().env.channel_secret as string

const config = {
  channelAccessToken: accessToken,
  channelSecret: channelSecret,
}
const client = new Line.Client(config)

const errorMessage = 'エラーが発生しました'

export { client, config, errorMessage, Line, Types }
