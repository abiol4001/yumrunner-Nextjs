import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

//GET a single product
export const GET = async (req, {params}) => {
    const { id } = params
  try {

    const product = await prisma.product.findUnique({
        where: {
            id: id
        },
    })
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ msg: "Something went wrong" }), {
      status: 500,
    });
  }
};
