import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import cloudinary from '@/libs/cloudinary'

export async function GET(request, { params }) {
  try {
    const results = await conn.query("SELECT * FROM product WHERE id = ?", [
      params.id,
    ]);


    if (results.length === 0) {
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
    const result = await conn.query("DELETE FROM product WHERE id = ?", [
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json({
        message: "Productono encontrado",
      },
        {

          status: 404,
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
    const image = date.get('image');
    const updateData = {
      name: data.get("name"),
      price: data.get("price"),
      description: data.get("description"),
      image: date.get('image')
    }

  

    if (!data.get("name")) {
      return NextResponse.json(
        {
          message: "Name is required",
        },
        {
          status: 400,
        }
      );
    }

    if (image) {
      const filePath = await processImage(image);
      const res = await cloudinary.uploader.upload(filePath);
      updateData.image = res.secure_url;

      secure_url = res.secure_url
      console.log(res);
      if (res) {
        await unlink(filePath);
      }
    }
  
    const result = await conn.query('UPDATE product SET ? WHERE id = ?', [
     
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Productono encontrado",
        },
        {

          status: 404,
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