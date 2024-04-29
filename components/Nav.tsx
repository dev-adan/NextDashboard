'use server'
import { auth } from "../auth";
import Navbar from "./Navbar";

export default async function Nav() {

    const session = await auth();
    console.log(session)
    return <Navbar user={session?.user}/>
    
}    