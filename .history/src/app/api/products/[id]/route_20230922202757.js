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
    try {
      const result = await conn.query("DELETE FROM product WHERE id = ?",[
        params.id,
        ]);
    
        if (result.affectedRows === 0){
          return NextResponse.json({
            message: "Productono encontrado",
          },
          {
    
            status:404,
          }
          )
        }
    
        return new Response(null, {  
          status: 204
         }
         );
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );

    }
}

export async function PUT(request, { params }) {
    try {
      const data = await request.formData();

      if (!data.get("name")){
        return NextResponse.json(
          {
            message: "Name is required",
          },
          {
            status: 400,
          }
        );
      }

      if (!data.get("image")){
        return NextResponse.json({
          message:"file is required"
        }, {
          status :  400
        })
      }
    const result = await conn.query('UPDATE product SET ? WHERE id = ?', [
      {
        name: data.get("name"), 
        price: data.get("price"),
        description: data.get("description"),
      },
      params.id,
    ]);

      if (result.affectedRows === 0){
        return NextResponse.json(
          {
          message: "Productono encontrado",
        },
        {
  
          status:404,
        }
        );

      }
      const updateProduct = await conn.query("SELECT * FROM product WHERE id = ? ",
      [params.id]);

      return NextResponse.json(updateProduct[0]);
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
        
      );
    }
}