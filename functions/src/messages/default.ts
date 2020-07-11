import { Types } from '../line.config'

export const init: Types.TextMessage = {
  type: 'text',
  text: '友達登録ありがとうございます。',
}

export const outsideReciptHour: Types.TextMessage = {
  type: 'text',
  text:
    '予約受け付け時間外です。\n\n受付時間：午前9:00 ~ 12:00\n休み　　：お盆・正月',
}
