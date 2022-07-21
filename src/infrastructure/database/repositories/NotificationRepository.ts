import { injectable } from "tsyringe";
import NotificationSchema from "../../schemas/NotificationSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class NotificationRepository {

    constructor(){
    }

    async addNotification(payload: any){
        const Notification = await createData(NotificationSchema, payload);
        return Notification;
    }

    async getNotifications(payload: any){
        const Notifications = await readData(NotificationSchema, payload);
        return Notifications;
    }

    async getNotification(payload: any){
        const Notification = await readsingleData(NotificationSchema, payload);
        return Notification;
    }

    async updateNotification(keyword: any, data: any){
        const Notification = await updateData(NotificationSchema, keyword, data);
        return Notification;
    }

    async deleteNotification(id: string){
        const Notification = await deleteData(NotificationSchema, {_id: id});
        return Notification;
    }

}