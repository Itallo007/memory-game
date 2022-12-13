// import { promises as fs } from 'fs';
// import * as path from 'path';

let imageList = [
  'alligator.png',     'ant.png',            'antenna.png',
  'axe.png',           'badge.png',          'bag.png',
  'balance.png',       'ball_of_wool.png',   'ballon.png',
  'bamboo.png',        'bandage.png',        'banjo.png',
  'baseball.png',      'basket.png',         'basketball.png',
  'bat.png',           'bathtub.png',        'battery.png',
  'bear.png',          'bed.png',            'bee.png',
  'bell.png',          'bikini.png',         'billar.png',
  'blood.png',         'blue_book.png',      'books.png',
  'boomerang.png',     'boot.png',           'bow_and_arrow.png',
  'bowling.png',       'box.png',            'boxing_glove.png',
  'bracelet.png',      'bronze_medal.png',   'broom.png',
  'bucket.png',        'bull.png',           'butterfly.png',
  'cabinet.png',       'camera.png',         'candle.png',
  'cap.png',           'cat.png',            'cd.png',
  'cd_cover.png',      'chain.png',          'chains.png',
  'chair.png',         'chess_piece.png',    'christmas_tree.png',
  'cigarette.png',    'clapperboard.png',   'clipboard.png',
  'closed_folder.png', 'clubs.png',          'coat.png',
  'cockroach.png',     'coffin.png',         'coin.png',
  'concertina.png',    'copybook.png',       'couch.png',
  'cow.png',           'crayons.png',        'credit_card.png',
  'crown.png',         'crystal_ball.png',   'diamond.png',
  'diary.png',         'dice.png',           'diskette.png',
  'dna.png',           'dog.png',            'door.png',
  'dress.png',         'duck.png',           'dvd.png',
  'dynamite.png',      'earphone.png',       'elephant.png',
  'entrance.png',      'envelope.png',       'equalizer.png',
  'faucet.png',        'fax.png',            'fire_extinguisher.png',
  'fish.png',          'fishing_rod.png',    'flashlight.png',
  'flying_money.png',  'folder_box.png',     'folders.png',
  'football.png',      'garbage_basket.png', 'gear.png',
  'gift.png',          'giraffe.png',        'glasses.png','gloves.png',             'goal.png',
  'gold_medal.png',         'graph_going_down.png',
  'graph_going_up.png',     'graphic.png',
  'green_baseball.png',     'green_book.png',
  'guitar.png',             'hammer.png',
  'hammer_and_spanner.png', 'hammers.png',
  'handbag.png',            'hat.png',
  'hearts.png',             'high_heels.png',
  'hockey.png',             'hook.png',
  'horse.png',              'lizard.png',
  'monkey.png',             'octopus.png',
  'owl.png',                'pig.png',
  'rabbit.png',             'scorpion.png',
  'shark.png',              'snake.png',
  'spider.png',             'squirrel.png',
  'tiger.png',              'turtle.png',
  'whale.png',              'zebra.png'
]


function getImagesName(numberOfPars) {
  // let allCads = await fs.readdir(path.resolve('./') + '/images_repository');
  let imagesUnsorted = imageList.sort(() => Math.random() - 0.5).slice(0, numberOfPars)
  return [... imagesUnsorted, ... imagesUnsorted].sort(() => Math.random() - 0.5);
}


export {getImagesName}
