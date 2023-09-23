import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export function GET() {
    return NextResponse.json('listando productos')
}

export async function POST(request){
    const {name, description, price} = await request.json();
   
await conn.query("INSERT INTO product SET ?", {
    name,
    description,
    price
});
    return NextResponse.json('creando producto')
}