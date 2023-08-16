import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"


export const PUT = async ({params}) => {
    const {intentId} = params

    try {
        
        await prisma.order.update({
            where: {
                intent_id: intentId
            },
            data: {status: "Being prepared!"}
        })
        return new NextResponse(JSON.stringify({msg: "Order has been updated"}), {status: 200})
    } catch (error) {
        console.log(error)
        return new NextResponse(
          JSON.stringify({ msg: "Something went wrong!" }),
          { status: 500 }
        );
    }
}