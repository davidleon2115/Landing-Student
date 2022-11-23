const headers = useRequestHeaders(['all'])
const { username, id } = await useFetch('http://localhost:3001/username/')
