import React, { PureComponent } from 'react';
import { enToFa, faToEn } from 'Root/mapper';

export default class extends PureComponent {
  handleKey = (event) => {
    this.props.input.onChange(enToFa(event.target.value));
  }

  render() {
    const {
      input: { value, onChange },
    } = this.props;
    return (
      <input
        type="text"
        onChange={this.handleKey}
        value={value}
      />
    );
  }
}
