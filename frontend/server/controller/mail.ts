import { H3Event } from 'h3'
import * as mailModel from '../model/mail'

export const sendMail = async (evt: H3Event) => {
    try {
        const body = await readBody(evt)

        const info: {messageId: number} = await mailModel.sendMail(body)

        return {
            data: info.messageId
        }
    } catch (error) {
        console.log(error)
        return {
            data: false
        }
    }
}