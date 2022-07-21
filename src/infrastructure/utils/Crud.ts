import CrudInterface from "../interfaces/Crud";
import UploadInterface from "../interfaces/Upload";

export default class Crud implements CrudInterface {
    constructor(private service: any) {
        this.service = new service()
    }
    create(payload: {}): void {
        this.service.create(payload)
        
    }
    getAll(): void {
        this.service.getAll()
    }
    getOne(id: string): void {
        this.service.getOne(id)
    }
    delete(id: string): void {
        this.service.delete(id)
    }
    update(id: string, payload: {}): void {
       this.service.update(id, payload)
    }
}