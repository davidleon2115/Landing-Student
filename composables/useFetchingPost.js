export default async (url, elemento) => {
    const fetching = await fetch(url, elemento)
    const response = fetching.json()
    const data = response.json()
    return {
        data
    }
}
