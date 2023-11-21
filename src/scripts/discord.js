const endPoint = 'https://api.lanyard.rest/v1/users/771148579356016650'

export const getDiscordStatus = async () => {
    try {
        const response = await fetch(endPoint)
        const data = await response.json()
        return data.data
    } catch (error) {
        throw error
    }
}
