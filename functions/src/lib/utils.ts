/**
 * @isImageExt    拡張子が画像ファイルかどうか確認
 * @isAudioExt    拡張子が音声ファイルかどうか確認
 * @isVideoExt    拡張子が動画ファイルかどうか確認
 */

const isImageExt = (fileName: string): boolean => {
  fileName = fileName.substring(fileName.lastIndexOf('.'))
  if (fileName.toUpperCase().match(/\.(jpg)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(jpeg)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(png)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(gif)$/i)) {
    return true
  }
  return false
}

const isAudioExt = (fileName: string): boolean => {
  fileName = fileName.substring(fileName.lastIndexOf('.'))
  if (fileName.toUpperCase().match(/\.(wav)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(mp3)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(wma)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(aac)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(m4a)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(flac)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(ogg)$/i)) {
    return true
  }
  return false
}

const isVideoExt = (fileName: string): boolean => {
  fileName = fileName.substring(fileName.lastIndexOf('.'))
  if (fileName.toUpperCase().match(/\.(mp4)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(avi)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(fiv)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(mov)$/i)) {
    return true
  }
  if (fileName.toUpperCase().match(/\.(wmv)$/i)) {
    return true
  }
  return false
}

export { isImageExt, isAudioExt, isVideoExt }
