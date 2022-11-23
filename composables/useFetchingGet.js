export default async (url) => {
    const fetching = await fetch(url)
    const response = fetching.json()
    const data = response.json()
    return {
        data
    }
}