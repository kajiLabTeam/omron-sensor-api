import { AreaDBApi } from '../API/AreaDBApi';
import { AreaModel } from '../entity/AreaModel';

export class AreaRepository {
    AreaDBApi: AreaDBApi = new AreaDBApi();

    async getAreaModel(id: number = 0): Promise<AreaModel[]> {
        return await this.AreaDBApi.getAreaModel(id);
    }

    async getAllAreaModel(): Promise<AreaModel[]> {
        return await this.AreaDBApi.getAllAreaModel();
    }

    async setAreaModel(areaName:String): Promise<AreaModel> {
        const data: AreaModel = {
            id: 0,
            name: areaName,
            created_at: new Date(),
            updated_at: new Date()
        }
        return await this.AreaDBApi.setAreaModel(data);
    }
}