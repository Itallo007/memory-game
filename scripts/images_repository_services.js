// import { promises as fs } from 'fs';
// import * as path from 'path';

const imageList = [
  'image_1108.png', 'image_1097.png',
  'image_1107.png', 'image_1111.png',
  'image_1096.png', 'image_1109.png',
  'image_1101.png', 'image_1106.png',
  'image_1110.png', 'image_1098.png',
  'image_1095.png', 'image_1104.png',
  'image_1105.png', 'image_1094.png',
  'image_1102.png', 'image_1103.png',
  'image_1099.png', 'image_1112.png',
  'image_1100.png', 'image_1113.png'
]

function getImagesName(numberOfPars) {
  // let allCads = await fs.readdir(path.resolve('./') + '/images_repository');
  let imagesUnsorted = imageList.sort(() => Math.random() - 0.5).slice(0, numberOfPars)
  return [... imagesUnsorted, ... imagesUnsorted].sort(() => Math.random() - 0.5);
}


export {getImagesName}
