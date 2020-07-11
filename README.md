# Firebase Functions + LINE Bot + TypeScript
LINE Botのサーバレス版テンプレートです

## 環境変数の設定
### セット
```
firebase functions:config:set env.access_token=
firebase functions:config:set env.channel_secret=

# cloud storage
firebase functions:config:set env.bucket_name=
```

### 確認
```
firebase functions:config:get
```
