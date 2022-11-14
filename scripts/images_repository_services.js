// import { promises as fs } from 'fs';
// import * as path from 'path';

const imageList = [
  'image_1094.png', 'image_1095.png', 'image_1096.png',
  'image_1097.png', 'image_1098.png', 'image_1099.png',
  'image_1100.png', 'image_1101.png', 'image_1102.png',
  'image_1103.png', 'image_1104.png', 'image_1105.png',
  'image_1106.png', 'image_1107.png', 'image_1108.png',
  'image_1109.png', 'image_1110.png', 'image_1111.png',
  'image_1112.png', 'image_1113.png', 'image_1114.png',
  'image_1115.png', 'image_1116.png', 'image_1117.png',
  'image_1118.png', 'image_1119.png', 'image_1120.png',
  'image_1121.png', 'image_1122.png', 'image_1123.png',
  'image_1124.png', 'image_1125.png', 'image_1126.png',
  'image_1127.png', 'image_1128.png', 'image_1129.png',
  'image_1130.png', 'image_1131.png', 'image_1132.png',
  'image_1133.png', 'image_1134.png', 'image_1135.png',
  'image_1136.png', 'image_1137.png', 'image_1138.png',
  'image_1139.png', 'image_1140.png', 'image_1141.png',
  'image_1142.png'
]

function getImagesName(numberOfPars) {
  // let allCads = await fs.readdir(path.resolve('./') + '/images_repository');
  let imagesUnsorted = imageList.sort(() => Math.random() - 0.5).slice(0, numberOfPars)
  return [... imagesUnsorted, ... imagesUnsorted].sort(() => Math.random() - 0.5);
}


export {getImagesName}
