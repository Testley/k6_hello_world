import http from 'k6/http'

export const options = {
    stages: [
        { duration: '1m', target: 200 }, // Ramp-up to 200 users over 1 minute
        { duration: '5m', target: 200 }, // Stay at 200 users for 5 minutes
        { duration: '2m30s', target: 0 },   // Ramp-down to 0 users over 2 minutes
    ],
}

export default function(){
    http.get("https://test.k6.io")
    }