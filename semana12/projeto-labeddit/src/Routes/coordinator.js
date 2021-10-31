export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToApplicationPage = (history) => {
    history.push('/application')
}

export const goToFeedPage = (history) => {
    history.push('/feed')
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToPostDetails = (history, id) => {
    history.push(`/post/details/${id}`)
}

export const goToHomePage = (history) => {
    history.push('/')
}
