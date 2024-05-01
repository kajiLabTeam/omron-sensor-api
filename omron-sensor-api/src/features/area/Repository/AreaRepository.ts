import { AreaDBApi } from '../API/AreaDBApi';
import { AreaModel, emptyAreaModel } from '../entity/AreaModel';

export class AreaRepository {
    AreaDBApi: AreaDBApi = new AreaDBApi();

    async getAreaModel(id: number = 0): Promise<AreaModel> {
        return await this.AreaDBApi.getAreaModel(id) ?? emptyAreaModel();
    }

    async getAllAreaModel(): Promise<AreaModel[]> {
        return await this.AreaDBApi.getAllAreaModel();
    }

    async setAreaModel(areaName:string): Promise<AreaModel> {
        const data: AreaModel = {
            id: 0,
            area: areaName,
            created_at: new Date(),
            updated_at: new Date()
        }
        return await this.AreaDBApi.setAreaModel(data);
    }
}