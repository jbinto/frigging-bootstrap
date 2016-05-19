/* global describe, it, beforeEach */

import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { expect } from 'chai'
import td from 'testdouble'

import Frig, {
  Form,
  FormErrorList,
  Input,
  Submit,
} from 'frig'
import FriggingBootstrap from '../../src/js/index'

describe('Basic form', () => {
  Frig.defaultTheme(FriggingBootstrap)

  const data = {
    name: 'Randy',
    city: 'Sunnyvale',
  }
  const errors = {
    password: ['must not be the same as last time'],
  }
  const onChange = td.function()
  const onSubmit = td.function()

  const App = (
    <Form
      data={data}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    >
      <FormErrorList />
      <Input name="name" />
      <Input name="city" />
      <Input name="catchphrase" />
      <Input name="password" />
      <Submit title="Register" />
    </Form>
  )

  const wrapper = mount(App)

  const getFrigInput = (name) => wrapper.findWhere((input) => input.prop('name') === name)
  const getInput = (frigInput) => frigInput.find('input')
  const getInputByName = (name) => getInput(getFrigInput(name))
  const getValue = (input) => input.prop('value')
  const getDOMNode = (c) => ReactDOM.findDOMNode(c.get(0))

  it('should set the inputs values from data', () => {
    const name = getInputByName('name')
    const city = getInputByName('city')

    expect(getValue(name)).to.equal('Randy')
    expect(getValue(city)).to.equal('Sunnyvale')
  })

  it('should render password as a password field', () => {
    const password = getInputByName('password')
    expect(password.prop('type')).to.equal('password')
  })

  it('should call form onChange when any field changes', () => {
    const city = getInputByName('city')
    const node = getDOMNode(city)

    node.value = 'Toronto'
    city.simulate('change')

    td.verify(onChange({
      name: 'Randy',
      city: 'Toronto',
    }))
  })

  it('should call form onSubmit when submit is clicked')
})
