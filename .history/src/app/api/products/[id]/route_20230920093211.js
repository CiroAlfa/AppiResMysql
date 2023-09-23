import { NextResponse } from "next/server";

export function Get() {
    return NextResponse.json('obteniendo un producto')
}