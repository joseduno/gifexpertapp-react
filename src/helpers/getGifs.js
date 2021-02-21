const getGifs = async(category) => {

    try {
        const apiKey = '2dHBJ2S3iltXsrTR2ofwoAohnhOpCNW7'
        // encodeURI cambia espacios por guiones, %20 para poder usarlos en urls
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${10}`
        const resp = await fetch(url)
        const {data} = await resp.json()
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gifs
    } catch (err) {
        console.log(err)
    }
}


export default getGifs