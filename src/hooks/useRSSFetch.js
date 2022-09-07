import { useState, useCallback } from 'react'

const useRSSFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  //const rssURL = channel.url
  const rssURL = `${process.env.REACT_APP_RSS_API}?url=${url}`

  const fetchRSSChannel = useCallback(async () => {
    setIsLoading(true)
    setData(null)
    setError(null)

    try {
      const response = await fetch(rssURL, {
        headers: new Headers({
          'api-key': process.env.REACT_APP_RSS_PUBLIC_KEY,
        }),
      })
      if (!response.ok) {
        setError('Network error status ', response.status)
      } else {
        const responseJson = await response.json()
        setData(responseJson.data)
      }
    } catch (error) {
      setError('Network error')
    }

    setIsLoading(false)
  }, [rssURL])

  return { fetchRSSChannel, isLoading, error, data }
}

export default useRSSFetch
