import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useNumClick() {
  return useQuery(
    ['numclick'],
    () =>
      axios
        .get(`/.netlify/functions/callBrevo`)
        .then(
          ({ data }) =>
            data.statistics.linksStats['https://ecolab.ademe.fr/impactcarbone']
        ),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  )
}
