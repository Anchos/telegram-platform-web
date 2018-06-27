import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NativeLink = ({ className, children, ...props }) => (
  <Link {...props} className={className}>
    {children}
  </Link>
)

export const StyledLink = styled(NativeLink)`
  color: #0075ff;
`

export const StyledCard = styled.div`
  min-height: 270px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(22, 41, 30, 0.1);
  background-color: #ffffff;
  border: solid 1px #e0e0e0;
  font-size: 17px;
  color: #232825;
  padding: 25px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 11px;
`

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: block;
`

export const Stats = styled.div`
  width: calc(100% - 90px);
  font-size: 14px;
  margin-bottom: 18px;
`

export const StatsRow = styled.div`
  margin-bottom: 11px;
`

export const Text = styled.span`
  max-width: 375px;
  text-overflow: ellipsis;
`

export const StrongText = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #232825;
`
