import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
      const results = await conn.query("SELECT * FROM product WHERE id = ?",[
          params.id,
      ]);
      

      if (results.length === 0){
          return NextResponse.json(
              {
              message: "Producto no encontrado"
              },
              {
                  status: 404,
              }
              
          );
         
      }
      return NextResponse.json(results[0]);
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
        
      );
    }
  }

export async function DELETE(request, { params }) {
    const result = await conn.query("DELETE FROM product WHERE id = ?",[
    params.id,
    ]);
    console.log(result);
    return NextResponse.json('eliminando  producto')
}

export function PUT() {
    return NextResponse.json('actualizando  producto')
}