import { NextResponse } from "next/server"
import { addOrder } from "../../../../utils/shopify"

export async function POST(request,res) {
    const data = await request.formData();

    const order_id = data.get('order_id')
    const detail = data.get('detail')

    console.log(detail)
    const createOrder = await addOrder(detail);
    console.log(createOrder);

    return NextResponse.json({
        createOrder
    })
}