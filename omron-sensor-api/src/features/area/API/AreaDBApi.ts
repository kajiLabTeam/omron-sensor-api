import { PrismaClient } from '@prisma/client'
import { AreaModel } from '../entity/AreaModel';

const prisma = new PrismaClient();

export class AreaDBApi {

    getAllAreaModel(): Promise<AreaModel[]> {
        return new Promise( async (resolve, reject) => {
            try {
                await prisma.area_data.findMany().then((result: AreaModel[]) => { // Specify the type of 'result' as 'AreaModel[]'
                    resolve(result);
                });
            } catch (error) {
                reject(error);
            } finally {
                await prisma.$disconnect();
            }
        });
    }

    getAreaModel(
        id: number = 0
    ): Promise<AreaModel | null> {
        return new Promise( async (resolve, reject) => {
            try {
                await prisma.area_data.findFirst({
                    where: {
                        id: id 
                    }
                }).then((result: AreaModel | null) => {
                    resolve(result);
                });
            } catch (error) {
                reject(error);
            } finally {
                await prisma.$disconnect();
            }
        });
    }

    setAreaModel(data: AreaModel): Promise<AreaModel> {
        return new Promise( async (resolve, reject) => {
            try{
                await prisma.area_data.create({
                    data: {
                        // id is removed here because it should be auto-generated
                        area: data.area,
                        created_at: data.created_at,
                        updated_at: data.updated_at
                    }
                }).then((result: AreaModel) => {
                    resolve(result);
                });
            } catch (error) {
                reject(error);
            } finally {
                await prisma.$disconnect();
            }
        });
    }
}