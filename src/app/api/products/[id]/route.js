import { getAuthSession } from "@/utils/auth";
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

//DELETE a single product
export const DELETE = async (req, {params}) => {
    const { id } = params
    const session = await getAuthSession()

    if(session.user.isAdmin) {
      try {
        await prisma.product.delete({
          where: {
            id: id,
          },
        });
        return new NextResponse(JSON.stringify("Product has been deleted successfully"), { status: 200 });
      } catch (error) {
        return new NextResponse(
          JSON.stringify({ msg: "Something went wrong" }),
          {
            status: 500,
          }
        );
      }
    }else {
      return new NextResponse(JSON.stringify({ msg: "Not Authorized to perform operation" }), {
        status: 403,
      });
    }
};
