import React, { PureComponent } from 'react';
import { enToFa, faToEn } from 'Root/mapper';

export default class extends PureComponent {
  handleChange = (event) => {
    this.props.input.onChange(event.target.src);
  }

  render() {
    const {
      input: { value, onChange },
    } = this.props;
    return (
      <img
        onChange={this.handleChange}
        src={value || this.props.sample}
        alt={this.props.alt}
      />
    );
  }
}
