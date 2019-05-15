import * as three from 'three'
import { Application, Cube } from './components'


const cube = Cube.create(three, {
  width: 10,
  height: 10,
  depth: 10
}, 'lego.jpg')

const app = Application.create(three)
app.add(cube)