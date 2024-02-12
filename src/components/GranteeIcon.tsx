// TODO: add framer motion
interface GranteeIcon {
    imageSrc?: string
    alt?: string
    name?: string
    padding: string
}

// setting default props
const defaultProps: GranteeIcon = {
    padding: 'p-0',
}

GranteeIcon.defaultProps = defaultProps

export default function GranteeIcon(props: GranteeIcon) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img
                src={props.imageSrc}
                alt={props.alt}
                className={`aspect-square w-48 rounded-full bg-white object-contain ${props.padding}`}
            />
            <p>{props.name}</p>
        </div>
    )
}
