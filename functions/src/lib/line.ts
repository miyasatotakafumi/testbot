import { Types } from '../line.config'

// 2000文字以上のテキストを分割してする
const maxTextLength = 2000
const makeReplyMessages = (
  text: string
): Types.TextMessage[] | Types.TextMessage => {
  if (text.length > maxTextLength) {
    const replyMessages = []
    while (text.length > maxTextLength) {
      replyMessages.push({
        type: 'text',
        text: text.substr(0, maxTextLength),
      } as Types.TextMessage)
      text = text.slice(maxTextLength, -1)
    }
    replyMessages.push({
      type: 'text',
      text,
    } as Types.TextMessage)
    return replyMessages
  } else {
    return {
      type: 'text',
      text,
    } as Types.TextMessage
  }
}

// 10000文字以上返信する時に使用する
const maxTextsLength = maxTextLength * 5
const makeTexts = (text: string): string[] => {
  const texts: string[] = []
  if (text.length > maxTextsLength) {
    while (text.length > maxTextsLength) {
      texts.push(text.substr(0, maxTextsLength))
      text = text.slice(maxTextsLength, -1)
    }
    texts.push(text)
  } else {
    texts.push(text)
  }
  return texts
}

export { makeReplyMessages, makeTexts }
