import React, { PureComponent } from 'react';
import { enToFa, faToEn } from 'Root/mapper';
import MaskedInput from 'react-text-mask';

export default class extends PureComponent {
  handleChange = (event) => {
    this.props.input.onChange(enToFa(event.target.value));
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
        value={input.value}
        placeholder={placeholder}
        type={type}
        mask={mask}
        onChange={this.handleChange}
        disabled={this.props.disabled}
      />
    );
  }
}
