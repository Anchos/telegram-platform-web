import React from 'react';
import { observer } from 'mobx-react';
import { Row } from "reactstrap";

@observer
export class DevLogs extends React.Component {
  render() {
    return (
      <div style={{ flexDirection: 'column', display: 'flex' }}>
        <p>Сделал кнопку count для выбора количества показываемых каналов на одной странице</p>
        <p>Пейджинг пока не работает</p>
        <p>Логин тоже</p>
        <p>Логаут тоже</p>
        <p>Выпилил везде редакс рамду и прочие реселекты и добавил мобх</p>
        <p>Убрал вебпак и перенес все на парсель</p>
        <p>Кода стало меньше ура</p>
        <p>Сделал страницу канала более-менее</p>
        <p>При клике на лого сайта переходите туда обратно</p>
        <div style={{ color: 'red' }}>
          <Row>{[1,1,1,1,1,1].map(() => <div style={{ width: 0, height: 0, border: '10px solid transparent', borderTopColor: 'red' }} />)}</Row>
          {[1,1,1,1,1,1].map(() => <p>АНЧО КУПИ SSH ДЛЯ ВЫКЛАДКИ ФРОНТА</p>)}
        </div>
        <p>Также нужны иконки поиска и прочей хуйни в цеплине</p>
        <p>Добавил инит с session id</p>
      </div>
    )
  }
}