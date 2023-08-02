import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-getting-started-ed12b-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json().then((data) => {
        // transform the data from an object to an array
        const meetups = []
        for (const key in data) {
          // the key is from firebase. The crazy hashed name of contents
          const meetup = {
            id: key,
            // spread operator here copies all of the key/value pairs of nested object
            ...data[key]
          }
          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage
