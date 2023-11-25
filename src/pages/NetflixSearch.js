import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Card from '../components/cardnetflix'

export default function NetflixSearch() {
  const [data, setData] = useState(null)
  const [isLoaded, setisLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('zombie')
  const nav = useNavigate()

  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          'https://streaming-availability.p.rapidapi.com/search/filters',
          {
            params: {
              services: 'netflix',
              country: 'us',
              keyword: query,
              output_language: 'en',
              order_by: 'original_title',
              genres_relation: 'and',
              show_type: 'all',
            },
            heers: {
              'X-RapidAPI-Key':
                '9e59e045d3mshee807d04193d9d1p17fce4jsn51a1fd8734eb',
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
            },
          }
        )
        if (response.status === 200) {
          setData(response.data)
          setisLoaded(true)
          setIsLoading(false)
        }
      } catch (err) {
        console.log(err)
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
      <h3 className="title">Netflix Availability</h3>
      <h3 className="title">Search : {query}</h3>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.result.map((item, index) => {
            return (
              <Card data={item} key={index} onClick={() => handleClick(item)} />
            )
          })}
        </div>
      )}
    </main>
  )
}
