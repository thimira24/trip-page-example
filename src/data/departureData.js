export const departures = [
    {
        id: 1,
        date: 'Wednesday 4 May 2025',
        shortDate: 'Wed, 4 May 2025',
        parsedDate: new Date(2025, 4, 4),
        statusText: 'Available',
        statusColor: 'gray',
        tag: null,
        price: 2929,
        priceDisplay: '2,929',
        currency: 'AUD',
        action: 'Reserve your spot',
        isPrimaryAction: true
    },
    {
        id: 2,
        date: 'Thursday 15 May 2025',
        shortDate: 'Thu, 15 May 2025',
        parsedDate: new Date(2025, 4, 15),
        statusText: 'Available',
        statusColor: 'gray',
        tag: null,
        price: 3129,
        priceDisplay: '3,129',
        currency: 'AUD',
        action: 'Reserve your spot',
        isPrimaryAction: true
    },
    {
        id: 3,
        date: 'Monday 2 June 2025',
        shortDate: 'Mon, 2 Jun 2025',
        parsedDate: new Date(2025, 5, 2),
        statusText: '1 Space left - on request',
        statusColor: 'red',
        tag: { text: 'Sale', type: 'tag-sale' },
        price: 2499,
        priceDisplay: '2,499',
        currency: 'AUD',
        action: 'Reserve your spot',
        isPrimaryAction: true
    },
    {
        id: 4,
        date: 'Wednesday 18 June 2025',
        shortDate: 'Wed, 18 Jun 2025',
        parsedDate: new Date(2025, 5, 18),
        statusText: 'On request',
        statusColor: 'red',
        tag: { text: 'Fully booked', type: 'tag-booked' },
        price: 3329,
        priceDisplay: '3,329',
        currency: 'AUD',
        action: 'Contact our agent',
        isPrimaryAction: false
    }
];
