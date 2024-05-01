export type AreaModel = {
    id: number;
    area: string;
    created_at: Date;
    updated_at: Date;
}

// 空っぽのAreaModelを返す
export function emptyAreaModel(): AreaModel {
    return {
        id: 0,
        area: "",
        created_at: new Date(),
        updated_at: new Date()
    }
}
