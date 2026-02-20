import Image from "next/image";
import { logoLine } from "../../public/imgassets/assets-img";

const Logo = () => {
return (
    <div className="flex gap-2.25 items-center">
        <Image src={logoLine} alt="Logo-line" width={24} height={0} />
        <span className="text-primary-200 text-xl font-bold">Edwin Anderson.</span>
    </div>
)
}

export default Logo;