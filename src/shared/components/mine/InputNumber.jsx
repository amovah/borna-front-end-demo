import React, { PureComponent } from 'react';
import { enToFa, faToEn } from 'Root/mapper';

export default class extends PureComponent {
  handleKey = (event) => {
    const shit = event.target.value.split('').filter(i => (/\d/).test(faToEn(i))).join('');
    this.props.input.onChange(enToFa(shit));
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
