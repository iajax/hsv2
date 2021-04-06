import csvtojson from 'csvtojson'

import '../src/config'
import { connect } from '../src/utils'
import { Asteroid } from '../src/resources/asteroid/asteroid.model'
import { Customer } from '../src/resources/customer/customer.model'
;(async () => {
  try {
    const asteroids = await csvtojson().fromFile(`${__dirname}/data.csv`)
    let customers = await csvtojson().fromFile(
      `${__dirname}/List_Of_Clients.csv`
    )

    customers = customers.map((e) => ({
      first_name: e.Name?.replace('ÿ', ''),
      last_name: e.Lastname,
      age: e.Age,
      loc: [e.Longitude, e.Latitude],
    }))

    await connect()
    await Asteroid.deleteMany()
    await Customer.deleteMany()
    console.log('Loading data...')
    const resAsteroids = await Asteroid.create(asteroids)
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
