import http from 'k6/http'
import { check } from 'k6'
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/locales/nl/faker.nl.min.js'


export const options = {
    // vus: 10,
    // duration: '5s',
}

const url = "https://reqres.in/api/users"

const payload = {
    "name": faker.internet.email(),
    "job": faker.name.jobTitle()
}

const params = {
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
}

export default function () {
    const response = http.post(url, payload, params)
    console.log("*** printing payload ***", payload)
    console.log("*** printing response ***", response.body)

    check(response, {
        'status code validation': (response) => response.status === 201,
        'Response Id Validation': (response) => response.body.includes('id')
    })


}