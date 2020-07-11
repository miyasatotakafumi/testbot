import { client, Line } from '../line.config'
import { datastoreInsert, datastoreUpdate } from '../lib/gcloud/datastore'
import { defaultMsg } from '../messages'
import { dsKindUser } from '../models'
import { initData, initUserData, User } from '../models/user'

const isDateObon = (month: number, date: number): boolean => {
  if (month === 8) {
    if (date === 13 || date === 14 || date === 15) {
      return true
    }
  }
  return false
}

const isDateNewYear = (month: number, date: number): boolean => {
  if (month === 12) {
    if (date === 29 || date === 30 || date === 31) {
      return true
    }
  } else if (month === 1) {
    if (date === 1 || date === 2 || date === 3) {
      return true
    }
  }
  return false
}

// 営業時間をチェック
const startHours = 9
const endHours = 12
export const isBusinessHours = (): boolean => {
  // 時間
  const jpDateTime = new Date().toLocaleString('ja')
  const nowHours = new Date(jpDateTime).getHours()
  if (nowHours >= startHours && nowHours <= endHours) {
    return true
  }

  // 日付
  const nowDate = new Date(jpDateTime).getDate()
  const nowMonth = new Date(jpDateTime).getMonth() + 1
  if (isDateObon(nowMonth, nowDate)) {
    return true
  } else if (isDateNewYear(nowMonth, nowDate)) {
    return true
  }

  return false
}

export const initUser = async (
  event: Line.FollowEvent | Line.MessageEvent,
  user?: User
): Promise<void> => {
  if (user) {
    await datastoreUpdate(dsKindUser, initUserData(user))
  } else {
    await datastoreInsert(dsKindUser, initData(event.source.userId as string))
  }

  await client.replyMessage(event.replyToken, defaultMsg.init)
}
