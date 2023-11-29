import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Card from '../components/cardnetflix'
import TempCard from '../components/tempcard/tempcard'

export default function NetflixSearch() {
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
            headers: {
              'X-RapidAPI-Key':
                '0c8a07a601msh98c3e115aa4289bp1f084ejsnefd431378921',
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
    nav(`/netflixdetail/${item.id}`, { state: { itemData: item } })
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
      {query === '' ? (
        <TempCard data={data} onClick={handleClick} />
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
