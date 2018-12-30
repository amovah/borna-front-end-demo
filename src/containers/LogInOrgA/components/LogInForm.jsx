/* eslint-disable */
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import PropTypes from 'prop-types';
import titleLogo from 'Root/shared/img/logo/logo.png';
import ImageField from 'Root/shared/components/mine/ImageField';
import Panel from 'Root/shared/components/Panel';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import renderCheckBoxField from 'Root/shared/components/form/CheckBox';
import QRImage from 'Root/shared/img/qr.jpeg';
import fetch from 'Root/fetch';
import config from 'Root/config';
import generateQR from 'Root/redux/actions/userOrgA/generateQR';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    generateQR();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="centerTor">
        <Row>
          <Col xs="3" />
          <Col xs="6">
            <Card>
              <CardBody>
                <div className="qrCodeSection">
                  <Field
                    name="qrCode"
                    component={ImageField}
                    alt="منتظر  QR کد بمانید"
                    sample={QRImage}
                  />
                </div>
                <h3 className="login-orga-title bold-text">
                  سیستم احراز هویت
                </h3>
                <Row>
                  <Col xs="2" />
                  <Col xs="8">
                    <p className="width-kamter-in-orga">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                  </Col>
                  <Col xs="2" />
                </Row>
                <Row>
                  <Col xs="1" />
                  <Col xs="10">
                    <Panel xs={12} title="تنظیمات" color="success">
                      <Row>
                        <Col xs="4">
                          <div className="form__form-group">
                            <div className="form__form-group-field">
                              <Field
                                name="nationalId"
                                component={renderCheckBoxField}
                                label="کد ملی"
                              />

                            </div>
                          </div>
                          <div className="form__form-group">
                            <div className="form__form-group-field">
                              <Field
                                name="mobileNumber"
                                component={renderCheckBoxField}
                                label="شماره موبایل"
                              />
                            </div>
                          </div>
                        </Col>

                        <Col xs="4">
                          <div className="form__form-group">
                            <div className="form__form-group-field">
                              <Field
                                name="lastname"
                                component={renderCheckBoxField}
                                label="نام خانوادگی"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="form__form-group">
                            <div className="form__form-group-field">
                              <Field
                                name="birthDate"
                                component={renderCheckBoxField}
                                label="تاریخ تولد"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div className="form__form-group">
                            <div className="form__form-group-field">
                              <Field
                                name="firstname"
                                component={renderCheckBoxField}
                                label="نام"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="form__form-group">
                            <div className="form__form-group-field">
                              <Field
                                name="imageURL"
                                component={renderCheckBoxField}
                                label="عکس"
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="6">
                          <Button color="primary">
                            تولید کد
                          </Button>
                        </Col>
                        <Col xs="6" />
                      </Row>
                    </Panel>
                  </Col>
                  <Col xs="1" />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3" />
        </Row>
      </form>
    );
  }
}

export default reduxForm({
  form: 'loginOrgA',
})(LogInForm);
