import { useState, useEffect, useCallback, useMemo } from 'react'

const useRSSSettings = () => {
  const defaultSettings = useMemo(
    () => ({
      channels: process.env.REACT_APP_RSS_DEFAULT_CHANNELS
        ? process.env.REACT_APP_RSS_DEFAULT_CHANNELS.split(' ').map((e) => ({
            url: e.trim(),
          }))
        : [],
    }),
    []
  )

  

  const [settings, setSettings] = useState({channels: []})
  const [savingSuccess, setSavingSuccess] = useState(false)
  const channels = settings.channels

  const loadSettings = useCallback(() => {
    const _settings =
      localStorage.getItem('rss_settings') !== null
        ? JSON.parse(localStorage.getItem('rss_settings'))
        : defaultSettings
    if (localStorage.getItem('rss_settings') === null) {
      localStorage.setItem('rss_settings', JSON.stringify(_settings))
    }
    
    setSettings(_settings)
  }, [defaultSettings])

  const saveSettings = async () => {
    setSavingSuccess(false)
    await localStorage.setItem('rss_settings', JSON.stringify(settings))
    setSavingSuccess(true)
  }

  const addChannel = (channel) => {
    setSettings((settings) => {
      return { ...settings, channels: [...settings.channels, channel] }
    })
  }

  const deleteChannel = (index) => {
    setSettings((settings) => {
      return {
        ...settings,
        channels: [...settings.channels].filter((ch, idx) => index !== idx),
      }
    })
  }

  const editChannel = (index, channel) => {
    setSettings((settings) => {
      return {
        ...settings,
        channels: [...settings.channels].map((ch, idx) =>
          index !== idx ? ch : channel
        ),
      }
    })
  }

  useEffect(() => {
    loadSettings()
  }, [loadSettings])

  return {
    settings,
    channels,
    savingSuccess,
    setSettings,
    saveSettings,
    addChannel,
    deleteChannel,
    editChannel,
    setSavingSuccess,
  }
}

export default useRSSSettings
