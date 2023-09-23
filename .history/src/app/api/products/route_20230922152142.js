import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM product");
    return NextResponse.json(results);
  } catch (error) {
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

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get("image")

    if(!data.get("name")){
      return NextResponse.json(
        {
          message: "Name is required",
        },
        {
          status 400,
        }
      );
    }
  
    if(!image){
      return NextResponse.json(
        {
          message: "Image is required",
        },
        {
          status:400,
        }
      );
    }
    const bytes = await image.arrayBuffer()
    Buffer.from(bytes)

   const result = await conn.query("INSERT INTO product SET ?", {
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
    });
    return NextResponse.json({
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
      id: result.insertId,
    });
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
