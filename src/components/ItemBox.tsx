import { Clock2 } from "lucide-react";

interface ItemProps {
    IconName?: string;
    conteudoText: string
}

interface ItemBoxProps {
    imageURL: string;
    imageAlt: string;
    title: string
    
    className?: string
}

export function ItemBox( { imageURL, imageAlt, title, className } : ItemBoxProps) { 
    return(
        <div className={ `${className} flex flex-col items-center w-96` }>
            <img src={imageURL} alt={imageAlt} />
            <h3>{title}</h3>
            <ItemInBox conteudoText="#001" />
            <ItemInBox conteudoText="#002" />
            <ItemInBox conteudoText="#003" />
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