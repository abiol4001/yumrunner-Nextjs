import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"


//FETCH all Products
export const GET = async (req) => {
    const {searchParams} = new URL(req.url)
    const cat = searchParams.get("cat")
    try {
        const products = await prisma.product.findMany({
            where: {
                ...(cat ? {catSlug: cat} : {isFeatured: true})
            },
        })
        return new NextResponse(JSON.stringify(products), {status: 200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({msg: "Something went wrong"}), {status: 500})
    }
}