import '../../blocks/header/header';
import { myChartJs } from '../../blocks/prc-charts/pie-charts';
import '../../favicons/favicons';

var html = require('./keldim.pug');
const css = require('./keldim.styl');

(function() {
  const keldimItems = [...document.querySelectorAll('.storage-item__number_all')];
  const keldimItemsCurrent = [...document.querySelectorAll('.storage-item__number_current')];

  const keldimItemsValue = keldimItems.map(item => item.value);
  const keldimItemsValueCurrent = keldimItemsCurrent.map(item => item.value);

  myChartJs('myChartAll', keldimItemsValue);
  myChartJs('myChartCurrent', keldimItemsValueCurrent);
}());
