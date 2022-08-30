import './Btn.module.css';
import Link from "next/link";

const Btn = () => {
    return ( 
    <button class="button-30" role="button">
        <Link href="/Profile/">
            <a>Profile</a>
            </Link>
    </button>
    );
}
 
export default Btn;