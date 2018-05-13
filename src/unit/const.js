import { List } from 'immutable';
import i18n from '../../i18n.json';

const blockShape = {
  I: [
    [1, 1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
};

const origin = {
  I: [[-1, 1], [1, -1]],
  L: [[0, 0]],
  J: [[0, 0]],
  Z: [[0, 0]],
  S: [[0, 0]],
  O: [[0, 0]],
  T: [[0, 0], [1, 0], [-1, 1], [0, -1]],
};

const blockType = Object.keys(blockShape);

const speeds = [800, 650, 500, 370, 250, 160];

const delays = [50, 60, 70, 80, 90, 100];

const fillLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const blankMatrix = (() => {
  const matrix = [];
  for (let i = 0; i < 20; i++) {
    matrix.push(List(blankLine));
  }
  return List(matrix);
})();

const clearPoints = [100, 300, 700, 1500];

const StorageKey = 'REACT_TETRIS';

const lastRecord = (() => { // 上一把的状态
  let data = localStorage.getItem(StorageKey);
  if (!data) {
    return false;
  }
  try {
    if (window.btoa) {
      data = atob(data);
    }
    data = decodeURIComponent(data);
    data = JSON.parse(data);
  } catch (e) {
    if (window.console || window.console.error) {
      window.console.error('读取记录错误:', e);
    }
    return false;
  }
  return data;
})();

const maxPoint = 999999;

const transform = (function () {
  const trans = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform'];
  const body = document.body;
  return trans.filter((e) => body.style[e] !== undefined)[0];
}());

const eachLines = 20; // 每消除eachLines行, 增加速度

const getParam = (param) => { // 获取浏览器参数
  const r = new RegExp(`\\?(?:.+&)?${param}=(.*?)(?:&.*)?$`);
  const m = window.location.toString().match(r);
  return m ? decodeURI(m[1]) : '';
};

const lan = (() => {
  let l = getParam('lan').toLowerCase();
  l = i18n.lan.indexOf(l) === -1 ? i18n.default : l;
  return l;
})();

document.title = i18n.data.title[lan];

module.exports = {
  blockShape,
  origin,
  blockType,
  speeds,
  delays,
  fillLine,
  blankLine,
  blankMatrix,
  clearPoints,
  StorageKey,
  lastRecord,
  maxPoint,
  eachLines,
  transform,
  lan,
  i18n: i18n.data,
};

/**
 *补充说明各个常量的作用
 *blockShape:形状，对象元素是二元数组
 *oring:
 *blockType:类型
 *speeds:速度
 *delays:
 *fillLine:
 *blankLine:用0表示空，由10个0组成的数组表示一行为空
 *blankMatrix:20行blankLine组成了空白Matrix
 *clearPoints:
 *StorageKey:感觉是在localstorage中存储信息的数据库名
 *lastRecord:从localstorage中获取上一局的数据，函数中进行了解码
 *maxPoint:控制最大分数
 *eachLines:每消除eachLines行便增加速度
 *transform:
 *lan:用来选择显示的语言
 *i18n:页面上显示的内容
 */
