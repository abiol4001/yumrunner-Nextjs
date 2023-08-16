import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

//FETCH all Orders
export const GET = async (req) => {
  const session = await getAuthSession();
  console.log(session)
  console.log("Session is " + session == undefined);
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {
      console.log("the orders not found");
      return new NextResponse(JSON.stringify({ msg: "Something went wrong" }), {
        status: 500,
      });
    }
  } else {
    return new NextResponse(
      JSON.stringify({ msg: "You are not authenticated!" }),
      {
        status: 401,
      }
    );
  }
};


//CREATE ORDER
export const POST = async (req) => {
  const session = await getAuthSession();
  
  if (session) {
    try {
        const body = await req.json()
      if (session.user) {
        const order = await prisma.order.create( {
            data: body
        });
        return new NextResponse(JSON.stringify(order), { status: 201 });
      }
    } catch (error) {
      console.log("the orders not found");
      return new NextResponse(JSON.stringify({ msg: "Something went wrong" }), {
        status: 500,
      });
    }
  } else {
    return new NextResponse(
      JSON.stringify({ msg: "You are not authenticated!" }),
      {
        status: 401,
      }
    );
  }
};