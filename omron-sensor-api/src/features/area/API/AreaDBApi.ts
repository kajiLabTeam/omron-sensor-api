import { PrismaClient } from '@prisma/client'
import { AreaModel } from '../entity/AreaModel';

export class AreaDBApi {
    
    private prisma = new PrismaClient();

    getAllAreaModel(): Promise<AreaModel[]> {
        return new Promise((resolve, reject) => {
            this.prisma.area_data.findMany().then((result: AreaModel[]) => { // Specify the type of 'result' as 'AreaModel[]'
                resolve(result);
            });
        });
    }

    getAreaModel(
        id: number = 0
    ): Promise<AreaModel[]> {

        console.log('id: ', id)

        return new Promise((resolve, reject) => {
            this.prisma.area_data.findMany({
                where: {
                    id: id 
                }
            }).then((result: AreaModel[]) => {
                resolve(result);
            });
        });
    }

    setAreaModel(data: AreaModel): Promise<AreaModel> {
        return new Promise((resolve, reject) => {
            this.prisma.area_data.create({
                data: {
                    // id is removed here because it should be auto-generated
                    area: data.name,
                    created_at: data.created_at,
                    updated_at: data.updated_at
                }
            }).then((result: AreaModel) => {
                resolve(result);
            });
        });
    }
}