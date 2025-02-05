import { Clock2 } from "lucide-react";

interface ItemProps {
    IconName?: string;
    conteudoText: string
}

interface ItemBoxProps {
    icon?: React.ReactNode;
    title: string;
    items: ItemProps[];
    className?: string;
}

export function ItemBox( { icon, title, className, items } : ItemBoxProps) { 
    return(
        <div className={ `${className} flex flex-col items-center w-96 hover:scale-105 cursor-pointer duration-200` }>
            {icon}
            <h3 className="text-3xl font-semibold justify-start flex">{title}</h3>
            <div>
                {items.map((item) => (
                    <div key={item.conteudoText} className=" flex gap-2 items-center justify-start m-5">
                        <Clock2  className="animate-bounce"/>
                        <h3>{item.conteudoText}</h3>
                    </div>
                ))}
            </div>
          </div>
    )
}

export function ItemInBox( { conteudoText } : ItemProps) { 
    return(
        <div>
            <Clock2 size={15} />
            <h3>{conteudoText}</h3>
        </div>
    )
}