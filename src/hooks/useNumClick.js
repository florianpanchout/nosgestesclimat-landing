import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useNumClick() {
  return useQuery(
    ['numclick'],
    () =>
      axios
        .get(`/.netlify/functions/callBrevo`)
        .then(
          (res) =>
            res.statistics.linksStats['https://ecolab.ademe.fr/transport']
        ),
    {
      keepPreviousData: true,
    }
  )
}
