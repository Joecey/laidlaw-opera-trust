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
            <div id="image-wrapper" className="rounded-full bg-white">
                <img
                    src={props.imageSrc}
                    alt={props.alt}
                    className={`aspect-square w-36 object-contain lg:w-48 ${props.padding}`}
                />
            </div>

            <p className="text-wrap text-sm lg:text-xl">{props.name}</p>
        </div>
    )
}
