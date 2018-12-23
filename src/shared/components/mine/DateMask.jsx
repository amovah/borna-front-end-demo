import React, { PureComponent } from 'react';
import { enToFa, faToEn } from 'Root/mapper';
import MaskedInput from 'react-text-mask';

export default class extends PureComponent {
  state = {
    value: '',
  }

  handleKey = (event) => {
    const pressed = enToFa(event.key);
    this.setState(prev => ({
      value: prev.value + pressed,
    }));
  }

  handleChange = (event) => {
    this.props.input.onChange(event.target.value);
  }

  render() {
    const {
      input,
      mask,
      type,
      placeholder,
    } = this.props;
    return (
      <MaskedInput
        value={this.state.value}
        placeholder={placeholder}
        type={type}
        mask={mask}
        onKeyPress={this.handleKey}
        onChange={this.handleChange}
      />
    );
  }
}
