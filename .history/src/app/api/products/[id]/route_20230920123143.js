import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";



export function DELETE() {
    return NextResponse.json('eliminando  producto')
}

export function PUT() {
    return NextResponse.json('actualizando  producto')
}