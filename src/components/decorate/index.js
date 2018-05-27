/**
 * 2018.5.27
 * 在看index.js in components/decorate
 * 有用到index.less in components/decorate 和 index.less in containers
 * 看到index.less in containers中关于&:after和&:before中的使用表示惊讶和不解
 */

import React from 'react';
import cn from 'classnames';

import { i18n, lan } from '../../unit/const';
import style from './index.less';

export default class Decorate extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className={style.decorate}>
        <div className={style.topBorder}>
          <span className={cn(['l', style.mr])} style={{ width: 40 }} />
          <span className={cn(['l', style.mr])} />
          <span className={cn(['l', style.mr])} />
          <span className={cn(['l', style.mr])} />
          <span className={cn(['l', style.mr])} />
          <span className={cn(['r', style.ml])} style={{ width: 40 }} />
          <span className={cn(['r', style.ml])} />
          <span className={cn(['r', style.ml])} />
          <span className={cn(['r', style.ml])} />
          <span className={cn(['r', style.ml])} />
        </div>
        <h1>{i18n.title[lan]}</h1>
        <div className={style.view}>
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <p />
          <em />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <p />
          <b className="c" />
          <b className="c" />
          <b className="c" />
          <b className="c" />
          <p />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <p />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <p />
          <em />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
        </div>
        <div className={cn([style.view, style.l])}>
          <em />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <p />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <p />
          <b className="c" />
          <b className="c" />
          <b className="c" />
          <b className="c" />
          <p />
          <em />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <p />
          <b className="c" />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <div className="clear" />
          <em />
          <b className="c" />
          <p />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
          <div className="clear" />
          <b className="c" />
        </div>
      </div>
    );
  }
}
