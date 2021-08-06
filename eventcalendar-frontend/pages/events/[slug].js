import {useRouter} from 'next/router'
import Layout from '@/components/Layout'

export default function EventPage() {

    const router =useRouter()
    console.log(router);
    return (
        <div>
           <h2>Slug page</h2>   
           <h3>{router.query.slug}</h3>
           <button onClick={() => router.push('/')}>ClickMe</button>
        </div>
    )
}
