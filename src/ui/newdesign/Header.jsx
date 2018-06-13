import React from 'react';
import { Logo } from "./Logo";
import { Button } from "./Button";

export class Header extends React.Component {

  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 60,
          paddingRight: 60,
          backgroundColor: 'white',
          justifyContent: 'space-between'
        }}
      >
        <Logo/>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button
            text={'Add channel'}
            onClick={() => console.log('hih')}
          />
          <Button
            text={'FAQ'}
            onClick={() => console.log('hih')}
          />
          <Button
            text={'Sign Up'}
            onClick={() => console.log('hih')}
            style={{ backgroundColor: '#2FB96A', color: 'white' }}
          />
          <Button
            text={'en'}
            onClick={() => console.log('hih')}
          />
        </div>
      </div>
    )
  }
}