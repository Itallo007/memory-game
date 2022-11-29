import Level from './level.js'

const levels = []

levels.push(new Level(1, 20, null, null))
levels.push(new Level(2, 20, 150, 600))
levels.push(new Level(3, 20, 100, 450))
levels.push(new Level(4, 30, 150, 900))
levels.push(new Level(5, 30, 100, 600))

levels[0].next = levels[1]
levels[1].next = levels[2]
levels[2].next = levels[3]
levels[3].next = levels[4]
levels[4].next = levels[0]

export default levels