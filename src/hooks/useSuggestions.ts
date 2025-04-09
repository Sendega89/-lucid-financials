import { useQuery } from '@tanstack/react-query'

export const useSuggestions = (query: string) => {
    return useQuery({
        queryKey: ['suggestions', query],
        queryFn: async () => {
            const res = await fetch(`https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`)
            return await res.json()

        },
        enabled: !!query && query.length >= 2,
    })
}
