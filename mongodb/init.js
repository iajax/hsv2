import fs from 'fs'

import '../src/config'
import { connect } from '../src/utils'
import { Asteroid } from '../src/resources/asteroid/asteroid.model'

const csvParser = (csv) => {
  let lines = csv.split('\n')
  const header = lines.shift().split(',')
  lines.pop()

  return lines.map((line) => {
    const bits = line.split(',')
    let obj = {}
    header.forEach((h, i) => {
      let key = h?.trim()
      let value = bits[i]?.trim()
      if (key === 'full_name') key = 'name'
      else value = parseFloat(value)

      return (obj[key] = value)
    })

    return obj
  })
}

;(async () => {
  const file = fs.readFileSync(`${__dirname}/data.csv`, 'utf-8')
  const asteroids = csvParser(file)

  await connect()

  Asteroid.deleteMany()
  Asteroid.insertMany(asteroids)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
})()
