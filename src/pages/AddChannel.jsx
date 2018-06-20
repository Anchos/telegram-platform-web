import * as React from "react";
import {
  Container,
} from "reactstrap";

import Input from "../ui/newdesign/Input";
import Checkbox from "../ui/newdesign/Checkbox";
import { Button } from "../ui/newdesign/Button";

const inputs = ['Channel Username', 'Category', 'Email'];

export class AddChannel extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{
            paddingTop: '80px',
            fontSize: '30px',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#3f3f3f'
          }}>Add channel</h1>
          <form style={{ maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            {
              inputs.map((input, i) => 
                <Input
                  key={i}
                  type='text'
                  placeholder={input}
                />)
            }
            <p style={{ 
              fontSize: '16px', 
              marginBottom: '20px' 
            }}>Все поля обазятельны к заполнению!
            </p>
            <div style={{  
              width: "300px",
              height: "80px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
              backgroundColor: "#f3f3f3",
              border: "solid 1px #999999",
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '20px'
            }}>
              <Checkbox id='captcha' label='I don’t sintetic' />
            </div>
            <Button type='submit' text='Send' style={{
              width: "100px",
              height: "40px",
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '108px',
              borderRadius: "3px",
              backgroundColor: "#15ad56",
              textAlign: 'center',
              color: "#fff",
              fontWeight: 300,
              fontSize: 23,
              padding: 0,
              lineHeight: 1.7
            }} />
          </form>
        </Container>
      </div>
    )
  }
}
