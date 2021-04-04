import csvtojson from 'csvtojson'

import '../src/config'
import { connect } from '../src/utils'
import { Asteroid } from '../src/resources/asteroid/asteroid.model'
import { Customer } from '../src/resources/customer/customer.model'

// const csvParser = async (csv) => {
//   let lines = csv.split('\n')
//   const header = lines.shift().split(',')
//   lines.pop()

//   return lines.map((line) => {
//     const bits = line.split(',')
//     let obj = {}
//     header.forEach((h, i) => {
//       let key = h?.trim()
//       let value = bits[i]?.trim()
//       if (key === 'full_name') key = 'name'
//       else value = parseFloat(value)

//       return (obj[key] = value)
//     })

//     return obj
//   })
// }
;(async () => {
  const asteroids = await csvtojson().fromFile(`${__dirname}/data.csv`)
  const customers = await csvtojson().fromFile(
    `${__dirname}/List_Of_Clients.csv`
  )
  try {
    console.log('Emptying database collection...')
    await connect()
    await Asteroid.deleteMany()
    await Customer.deleteMany()
    console.log('Loading data...')
    const resAsteroids = await Asteroid.insertMany(asteroids)
    const resCustomers = await Customer.insertMany(customers)

    console.log(
      `Data successfully loaded!. ${resCustomers.length} customers and ${resAsteroids.length} asteroids have been created.`
    )

    process.exit()
  } catch (err) {
    console.log(`There was an error!: ${err}`)
    process.exit(1)
  }
})()
