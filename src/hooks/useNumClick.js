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
            data?.statistics?.linksStats[
              'https://steack-pasteque.nosgestesclimat.fr/'
            ] || 0
        )
        .then((numClick) => numClick + 173)
        .catch((err) => 173),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  )
}
