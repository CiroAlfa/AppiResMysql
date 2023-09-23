import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export function GET() {
    return NextResponse.json('listando productos')
}

export async function POST(request){
  try {
    const {name, description, price} = await request.json();
   
    await conn.query("INSERT INTO product SET ?", {
        name,
        description,
        price
    });
    
    console.log(result)
        return NextResponse.json('creando producto')
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
        {
            message: error.message,
        },
        {
            status: 500,
        }
        
    );
    
  }
}