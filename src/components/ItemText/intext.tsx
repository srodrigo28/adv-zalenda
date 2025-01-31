import { Clock2 } from "lucide-react"

interface ItemTextProps {
    className?: string
    conteudo: string
    iconColor?: string
}

export function ItemText( { className, conteudo, iconColor } : ItemTextProps){
    return(

        <div className="flex flex-col gap-2 text-white m-10 text-3xl/tight mt-20">
            <div className="flex gap-2">
                
                <div className="w-10">
                    <Clock2 color={iconColor} size={30} className="" />
                </div>

                <p className={` ${className} `} > {conteudo} </p>

            </div>
        </div>

    )
}