import React, { PureComponent } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import {
  Field,
  reduxForm,
} from 'redux-form';
import renderMultiSelectField from 'Root/shared/components/form/MultiSelect';
// import renderSelectField from 'Root/shared/components/form/Select';
// import renderCheckBoxField from 'Root/shared/components/form/CheckBox';

class Form extends PureComponent {
  handleSubmit = () => {
    console.log('a');
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      وضعیت:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Field
                      name="multi_select"
                      component={renderMultiSelectField}
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <button>
              sb
            </button>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'suggestionOrgA',
})(Form);
