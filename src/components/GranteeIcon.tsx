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
                    className={`aspect-square w-40 object-contain lg:w-48 ${props.padding}`}
                />
            </div>

            <h1 className="text-xlfont-semibold w-60 text-wrap text-center lg:text-xl">
                {props.name}
            </h1>
        </div>
    )
}
