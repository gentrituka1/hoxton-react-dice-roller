import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";


type Props = {
    face: "dice-one" | "dice-two" | "dice-three" | "dice-four" | "dice-five" | "dice-six";
}

export function Die({ face }: Props) {
    return (
        <img src={`/images/${face}.svg`} alt={face} />
    )
}