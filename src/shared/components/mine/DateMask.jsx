import React, { PureComponent } from 'react';
import { enToFa, faToEn } from 'Root/mapper';
import MaskedInput from 'react-text-mask';

const regex = [/[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, '/',  /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/] // eslint-disable-line

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
        placeholder="____/__/__"
        type={type}
        mask={regex}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        className="ltronly"
      />
    );
  }
}
