import { useState } from 'react'
import plusIcon from '../assets/plus_icon.svg'

interface TrusteeItem {
    altText: string
    imageSrc: string
    name: string
    title: string
    bio: Array<string>
    moreInfo: Array<string>
}

export default function TrusteeItem(props: TrusteeItem) {
    const [moreInfoOpen, setMoreInfoOpen] = useState(false)

    const handleMoreInfoToggle = () => {
        setMoreInfoOpen(!moreInfoOpen)
    }

    return (
        <div
            id="trusteeContainer"
            className=" flex flex-col items-center gap-8 p-8 md:flex-row md:items-start lg:w-3/5"
        >
            <img
                alt={props.altText}
                src={props.imageSrc}
                className={'aspect-square w-72 object-contain '}
            />
            <div id="trustee_text_content" className="flex flex-col">
                <div id="name_and_title">
                    <h1 className="text-4xl font-bold text-laidlawTeal">
                        {props.name}
                    </h1>
                    <h2 className="text-xl font-semibold text-laidlawGrey">
                        {props.title}
                    </h2>
                </div>

                <div id="bio">
                    {props.bio.map((paragraph: string) => {
                        return (
                            <p className="mt-4 text-xl text-laidlawGrey">
                                {paragraph}
                            </p>
                        )
                    })}
                    <button
                        id="moreInfo"
                        type="button"
                        className="mt-6 flex flex-row items-center justify-center gap-2 rounded-sm bg-laidlawTeal p-2 pl-4 pr-4  transition-colors hover:bg-[#156b62]"
                        onClick={handleMoreInfoToggle}
                    >
                        <h3 className="text-xl">More Info</h3>
                        <img
                            alt="plus_icon"
                            src={plusIcon.src}
                            className={`w-6 ${moreInfoOpen ? 'rotate-45' : 'rotate-0'} transition-all duration-300 ease-in-out`}
                        />
                    </button>
                    <div
                        className={`${moreInfoOpen ? 'max-h-[400rem]' : 'max-h-0'} overflow-hidden transition-all duration-300  ease-in-out`}
                    >
                        {props.moreInfo.map((paragraph: string) => {
                            return (
                                <p className="mt-4 text-xl text-laidlawGrey">
                                    {paragraph}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
