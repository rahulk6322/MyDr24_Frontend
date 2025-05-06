type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const apiCall = async <T>(
    url: string,
    method: HttpMethod = 'GET',
    body?: Record<string, unknown>
): Promise<T> => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        }

        const response = await fetch(url, {
            method,
            headers,
            body: method !== 'GET' ? JSON.stringify(body) : undefined,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data as T
    } catch (error) {
        console.error('API call error:', error)
        throw error
    }
}
