// Small formatting helpers shared across booking screens.

export function formatINR(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount)
}

export function formatDateTime(epochMs: number): string {
    return new Date(epochMs).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export function formatDate(epochMs: number): string {
    return new Date(epochMs).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}

// Generates a readable booking id like MYDR-7F3K2A
export function generateBookingId(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789'
    let code = ''
    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)]
    }
    return `MYDR-${code}`
}
