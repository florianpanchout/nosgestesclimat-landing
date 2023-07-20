import React from 'react'
import styled from 'styled-components'

import MagicLink from './MagicLink'

const Wrapper = styled(MagicLink)`
  align-items: center;
  background-color: ${(props) =>
    props.hollow ? 'transparent' : props.theme.colors.main};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors[props.hollow ? 'main' : 'background']};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => (props.small ? '0.875em' : '1em')};
  font-weight: 500;
  gap: ${(props) => (props.small ? '0.375em' : '0.5em')};
  justify-content: center;
  line-height: 1.2;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 1rem;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  text-align: center;
  text-decoration: none;
  transition: all 300ms ease-out;

  path {
    fill: ${(props) =>
      props.theme.colors[props.hollow ? 'main' : 'background']};
    transition: all 300ms ease-out;
  }

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.hollow ? props.theme.colors.main : 'transparent'};
    color: ${(props) =>
      props.theme.colors[props.hollow ? 'background' : 'main']};
    outline: none;

    path {
      fill: ${(props) =>
        props.theme.colors[props.hollow ? 'background' : 'main']};
    }
  }
`
export default function Button(props) {
  return (
    <Wrapper
      to={props.to}
      onClick={props.onClick}
      disabled={props.disabled}
      hollow={props.hollow}
      small={props.small}
      className={props.className}
      type={props.type}
      aria-label={props.children}
      noIcon
    >
      {props.children}
    </Wrapper>
  )
}

Button.Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${(props) =>
    props.left
      ? 'flex-start'
      : props.right
      ? 'flex-end'
      : props.spacebetween
      ? 'space-between'
      : 'center'};
`
