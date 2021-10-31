import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToFeedPage } from "../Routes/coordinator";

export const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToFeedPage(history)
        }
    }, [history])
}