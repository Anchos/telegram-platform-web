import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Header = styled.div`
  height: 200px;
  background: #3c444c;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  width: 1192px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0 0;
  flex-direction: column;
`;
const HeaderLogo = styled.a`
  width: 130px;
  height: 40px;
  display: block;
  background: url(${require('data/img/home/logo.svg')});
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 43px 0 0;
`;

const HeaderMenuItem = styled.a`
  font-size: 10px;
  height: 29px;
  line-height: 29px;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#fff' : '#cbcfd4')};
  margin: 0 11px;
  position: relative;

  ${props =>
    props.isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
        background: linear-gradient(90deg, #f37a55 0%, #c866a8 100%);
        border-radius: 2px;
      }
    `};
`;

const HeaderContact = styled.div`
  width: 249px;
  padding: 62px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const HeaderContactList = styled.div`
  display: flex;
`;

const contactIcons = {
  twitter: require('data/img/home/twitter.svg'),
  facebook: require('data/img/home/facebook.svg'),
  dribbble: require('data/img/home/dribbble.svg'),
  github: require('data/img/home/github.svg'),
  google: require('data/img/home/google.svg'),
};

const HeaderContactListItem = styled.a`
  width: 24px;
  height: 24px;
  margin: 0 0 0 24px;

  ${props =>
    contactIcons[props.icon] &&
    css`
      background: url(${contactIcons[props.icon]}) no-repeat 50% 50%;
    `};
`;

const HeaderContactControls = styled.div`
  display: flex;
  margin: 44px 0 0;
`;

const HeaderContactControlsLogin = styled.a`
  border: 1px solid #ffffff;
  border-radius: 20px;
  font-weight: 700;
  font-size: 10px;
  width: 62px;
  text-align: center;
  line-height: 28px;
  height: 30px;
  text-transform: uppercase;
  color: #fff;
`;

const HeaderContactControlsRegister = styled.a`
  width: 81px;
  height: 30px;
  background: linear-gradient(90deg, #f27a54 0%, #a154f2 186.42%);
  border-radius: 20px;
  font-weight: 700;
  text-align: center;
  line-height: 28px;
  font-size: 10px;
  margin: 0 0 0 10px;
  text-transform: uppercase;
  color: #fff;
`;

const HeaderCategory = styled.div`
  width: 249px;
  height: 220px;
  background: #3c444d;
  box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  align-self: flex-end;
  position: relative;
  bottom: -103px;
`;
const HeaderCategoryTitle = styled.div`
  height: 117px;
  line-height: 28px;
  font-size: 18px;
  text-transform: uppercase;
  background: url(${require('data/img/home/category.png')});
  padding: 34px 0 0 28px;
  color: #ffffff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`;
const HeaderCategoryLabel = styled.div`
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  color: #f27a54;
`;
const HeaderCategoryButton = styled.a`
  width: 180px;
  height: 40px;
  background: url(${require('data/img/home/arrow-right.svg')}) no-repeat
      calc(100% - 20px) 50%,
    linear-gradient(90deg, #f27a54 0%, #a154f2 100%);
  border-radius: 20px;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  margin: 22px 0 0;
  line-height: 40px;
  text-align: center;
  padding: 0 15px 0 0;
  color: #fff;
`;

const Controls = styled.div`
  display: flex;
  margin: 49px 0 0;
  justify-content: center;
`;

const ControlsButton = styled.a`
  padding: 0 31px;
  height: 40px;
  background: url(${require('data/img/home/arrow-right.svg')}) no-repeat
      calc(100% - 15px) 50%,
    linear-gradient(90deg, #f27a54 0%, #a154f2 100%);
  border-radius: 20px;
  font-weight: 700;
  font-size: 10px;
  line-height: 40px;
  text-align: center;
  margin: 0 14px;
  text-transform: uppercase;
  color: #ffffff;
`;

const ControlsButtonBlank = styled.a`
  width: 131px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  font-weight: 700;
  font-size: 10px;
  line-height: 38px;
  margin: 0 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header>
          <HeaderContainer>
            <HeaderCategory>
              <HeaderCategoryTitle>
                Very long name of category #7
              </HeaderCategoryTitle>
              <HeaderCategoryContent>
                <HeaderCategoryLabel>1023 channels</HeaderCategoryLabel>
                <HeaderCategoryButton>Change category</HeaderCategoryButton>
              </HeaderCategoryContent>
            </HeaderCategory>
            <HeaderContent>
              <HeaderLogo />
              <HeaderMenu>
                <HeaderMenuItem isActive>Channels</HeaderMenuItem>
                <HeaderMenuItem>Supergroups</HeaderMenuItem>
                <HeaderMenuItem>Bots</HeaderMenuItem>
                <HeaderMenuItem>Sticker sets</HeaderMenuItem>
              </HeaderMenu>
            </HeaderContent>
            <HeaderContact>
              <HeaderContactList>
                <HeaderContactListItem icon="twitter" />
                <HeaderContactListItem icon="facebook" />
                <HeaderContactListItem icon="dribbble" />
                <HeaderContactListItem icon="github" />
                <HeaderContactListItem icon="google" />
              </HeaderContactList>
              <HeaderContactControls>
                <HeaderContactControlsLogin>Login</HeaderContactControlsLogin>
                <HeaderContactControlsRegister>
                  Register
                </HeaderContactControlsRegister>
              </HeaderContactControls>
            </HeaderContact>
          </HeaderContainer>
        </Header>
        <Controls>
          <ControlsButton>Add any existing channel</ControlsButton>
          <ControlsButton>Verify ownership</ControlsButton>
          <ControlsButtonBlank>FAQ</ControlsButtonBlank>
        </Controls>
      </div>
    );
  }
}

export default HomePage;
