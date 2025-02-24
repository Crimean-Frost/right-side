import * as mailController from '../controller/mail'


const router = createRouter()

router.post('/mailer', defineEventHandler(mailController.sendMail))


export default useBase('/api', router.handler)