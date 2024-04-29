import { redirect } from "next/navigation";
import { auth } from "../../auth";
import Analytics from "../../components/Analytics";

export default async function AnalyticsPage(){
    const session = await auth();
    if(!session){
        redirect('/api/auth/signin')
    }
    return <Analytics/>

}