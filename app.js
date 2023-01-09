import { getListElements } from './modules/listApiDataLoader.js';('./listApiDataLoader.js')
import { generateList } from './modules/listGenerator.js';

const apiData = await getListElements();
generateList(apiData);


