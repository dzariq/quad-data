import { NextResponse } from "next/server"
import data from '../../../../../data.json'

export async function GET(request, context){
    const {params} = context
    const product = data.filter((x) => params.id == x.id.toString())

    return NextResponse.json({product})
}