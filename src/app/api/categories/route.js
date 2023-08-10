import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

//FETCH all Categories
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(categories), {status: 200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({msg: "Something went wrong"}), {status: 500})
    }
}