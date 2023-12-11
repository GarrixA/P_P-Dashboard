import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";

const images = [
    {
        icon: <MdOutlineReviews className="w-[2.5rem] h-[2.5rem] bg-[#3692EB] p-2 text-white"/>,
        title: "A review from a user",
        description: "5 min ago"
    },{
        icon: <MdOutlineVerifiedUser className="w-[2.5rem] h-[2.5rem] bg-green-600 text-white p-2 "/>,
        title: "Account",
        description: "User signed up"
    },{
        icon: <FaUserLarge className="w-[2.5rem] h-[2.5rem] bg-[#F9B851] p-2 text-white"/>,
        title: "Account",
        description: "Account created"
    }
]

export default images