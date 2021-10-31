import React from 'react'
import { useHistory} from 'react-router'
import { Header } from '../../components/Header/Header'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { goToFeedPage } from '../../Routes/coordinator'

export const PostDetails = () => {
    useProtectedPage()
    
    const history = useHistory()

    return(
        <div>
            <Header goTo={() => goToFeedPage(history)} title={'Logout'}/>
        </div>
    )
}