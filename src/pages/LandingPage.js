import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Card from '../components/card'
import TempCard from '../components/tempcard/tempcard'

export default function LandingPage() {
  const [data, setData] = useState(null)
  const [isLoaded, setisLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const nav = useNavigate()

  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          'https://streaming-availability.p.rapidapi.com/search/title',
          {
            params: {
              title: query,
              country: 'us',
              show_type: 'all',
              output_language: 'en',
            },
            headers: {
              'X-RapidAPI-Key':
                '9e59e045d3mshee807d04193d9d1p17fce4jsn51a1fd8734eb',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            },
          }
        )
        if (response.status === 200) {
          setData(response.data)
          setisLoaded(true)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    if (!isLoaded) {
      fetchData(query)
    }
  }, [isLoaded, query])

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      setisLoaded(false)
      setQuery(e.target.value)
    }
  }

  const handleClick = (item) => {
    navToDetail(item)
  }

  const navToDetail = (item) => {
    nav(`/detail/${item.id}`, { state: { itemData: item } })
  }

  return (
    <main>
      <input
        type="text"
        placeholder="Search film by name"
        onKeyDown={(e) => onSearch(e)}
      />
      <h3 className="title">All Movie</h3>
      <h3 className="title">Search : {query}</h3>
      {query === '' ? (
        <TempCard data={data} onClick={handleClick} />
      ) : (
        <div className="card-container">
          {data?.result.map((item, index) => (
            <Card data={item} key={index} onClick={() => handleClick(item)} />
          ))}
        </div>
      )}
    </main>
  )
}
