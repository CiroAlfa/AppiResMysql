import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import {writeFile,unlink} from 'fs/promises'
import path from 'path'
import {v2 as cloudinary} from 'cloudinary';

          
cloudinary.config({ 
  cloud_name: 'dtlzxodgf', 
  api_key: '639997158484824', 
  api_secret: 'QATMLmfnflX9QUtYYpk30nvwaHU' 
});

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
          status: 400,
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
    const buffer = Buffer.from(bytes)

    const filePath = path.join(process.cwd(), 'public', image.name)
    await writeFile(filePath, buffer)

    const res = await cloudinary.uploader.upload(filePath);
    console.log(res);
    if (res){
      await unlink(filePath);
    }

   const result = await conn.query("INSERT INTO product SET ?", {
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
      image: res.secure_url,
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
