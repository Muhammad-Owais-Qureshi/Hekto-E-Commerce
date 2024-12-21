import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {

    const requestData = await req.json()
    console.log(requestData)

    const email = requestData.email;
    const password = requestData.password
    const cookieStore = await cookies()
    cookieStore.set("email" , "owais@gmail.com")
    cookieStore.set("password" , "1234")
    // cookieStore.get(email)
    

    if(!email){
        return NextResponse.json({"Alert" : "please give email"})
    }
  

    // Dummy authentication logic
    return NextResponse.json ({"Message" : "Thanks for logged In"})
};
