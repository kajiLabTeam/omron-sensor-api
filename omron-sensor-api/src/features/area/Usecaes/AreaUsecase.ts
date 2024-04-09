import { Context } from "hono";
import { AreaRepository } from "../Repository/AreaRepository";


export async function getArea(c: Context) {
    const areaRepository = new AreaRepository();
    const id = parseInt(c.req.query("id") || "-1");
    
    // idが数値が入っているかどうかをチェックする
    if (isNaN(id)) {
        return c.text("id must be a number");
    }

    // idが0以下の場合はエラーを返す
    if (id <= 0) {
        return c.text("id must be greater than 0");
    }

    const result = await areaRepository.getAreaModel(id);
    return c.text(JSON.stringify(result));
}

export async function getAllArea(c: Context) {
    const areaRepository = new AreaRepository();
    const result = await areaRepository.getAllAreaModel();
    return c.text(JSON.stringify(result));
}

export async function setArea(c: Context) {
    const areaRepository = new AreaRepository();
    const name = c.req.query("name") || "";
    if (name === "") {
        return c.text("name is required");
    }
    const result = await areaRepository.setAreaModel(name);
    return c.text(JSON.stringify(result));
}