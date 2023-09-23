import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json('listando productos')
}

export async function POST(request){
    const data = await request.json();
    console.log(data);
    
    return NextResponse.json('creando producto')
}