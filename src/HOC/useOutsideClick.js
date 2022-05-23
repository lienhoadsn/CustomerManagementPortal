import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        console.log(e.target.id)
        if (ref.current && !ref.current.contains(e.target) && e.target.id !== "button-dropdown") {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

export default useOutsideClick;