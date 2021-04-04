import csvtojson from 'csvtojson'
import { body2latlong } from 'keplerjs'

import '../src/config'
import { connect } from '../src/utils'
import { Asteroid } from '../src/resources/asteroid/asteroid.model'
import { Customer } from '../src/resources/customer/customer.model'
;(async () => {
  try {
    let asteroids = await csvtojson().fromFile(`${__dirname}/data.csv`)
    let customers = await csvtojson().fromFile(
      `${__dirname}/List_Of_Clients.csv`
    )

    asteroids = asteroids.map((e) => {
      const { lat, long } = body2latlong(e)

      return {
        ...e,
        loc: [long, lat],
      }
    })

    customers = customers.map((e) => ({
      ...e,
      Name: e.Name?.replace('ÿ', ''),
      loc: {
        coordinates: [e.Longitude, e.Latitude],
      },
    }))

    await connect()
    await Asteroid.deleteMany()
    await Customer.deleteMany()
    console.log('Loading data...')
    const resAsteroids = await Asteroid.insertMany(asteroids)
    const resCustomers = await Customer.create(customers)

    console.log(
      `Data successfully loaded!. ${resCustomers.length} customers and ${resAsteroids.length} asteroids have been created.`
    )

    process.exit()
  } catch (err) {
    console.log(`There was an error!: ${err}`)
    process.exit(1)
  }
})()
