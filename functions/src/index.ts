import * as functions from 'firebase-functions'
import * as express from 'express'
import * as indexRouter from './routers/index'

const app: express.Express = express()

app.use('/', indexRouter)

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.webhook = functions.region('asia-northeast1').https.onRequest(app)
