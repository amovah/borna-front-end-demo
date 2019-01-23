import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import {
  Field,
  reduxForm,
  reset,
  change,
} from 'redux-form';
import store from 'Root/store';
import renderMultiSelectField from 'Root/shared/components/form/MultiSelect';
import InputNumber from 'Root/shared/components/mine/InputNumber';
import DateMask from 'Root/shared/components/mine/DateMask';
import ImageField from 'Root/shared/components/mine/ImageField';
import { enToFa } from 'Root/mapper';
import RefreshIcon from 'mdi-react/RefreshIcon';
import { connect } from 'react-redux';
import QRImage from 'Root/shared/img/qr.png';
import DefaultUser from 'Root/shared/img/defaultUser.png';
import openModal from 'Root/redux/actions/modal/open';
import closeModal from 'Root/redux/actions/modal/close';
import generateQR from 'Root/redux/actions/userOrgD/generateQR';
import startPolling from 'Root/redux/actions/userOrgD/startPolling';
import stopPolling from 'Root/redux/actions/userOrgD/stopPolling';
import moment from 'Root/moment';
import config from 'Root/config';
import fetch from 'Root/fetch';

const refresh = () => {
  const shit = store.getState().form.SingupUserFormB;
  const confirm = () => {
    store.dispatch(reset('SingupUserFormB'));
    generateQR(() => startPolling((data) => {
      global.fuckState({
        disabled: false,
      });

      store.dispatch(change('SingupUserFormB', 'avatar', data.imageBase64));
      store.dispatch(change('SingupUserFormB', 'firstname', data.firstname));
      store.dispatch(change('SingupUserFormB', 'lastname', data.lastname));
      store.dispatch(change('SingupUserFormB', 'nationalId', enToFa(data.nationalId)));
      store.dispatch(change('SingupUserFormB', 'mobileNumber', enToFa(data.mobileNumber)));
      store.dispatch(change('SingupUserFormB', 'birthDate', enToFa(moment(parseInt(data.birthDate, 10)).format('jYYYY/jM/jD HH:mm')))); // eslint-disable-line

      global.fuckData = data;
    }));
    closeModal();
  };

  if (Object.keys(shit.values).length > 1) {
    openModal({
      color: 'warning',
      title: 'اخطار',
      message: 'آیا مطمین هستید که میخواهید فرم را تازه کنید؟',
      buttons: [
        <Button onClick={closeModal}>خیر</Button>,
        <Button color="warning" onClick={confirm}>بله</Button>,
      ],
      close() {
        closeModal();
      },
    });
  } else {
    confirm();
  }
};

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends Component {
  state = {
    disabled: true,
  }

  componentDidMount() {
    const { setState } = this;
    global.fuckStateB = setState.bind(this);
    generateQR(() => startPolling((data) => {
      global.fuckStateB({
        disabled: false,
      });

      store.dispatch(change('SingupUserFormB', 'avatar', data.imageBase64));
      store.dispatch(change('SingupUserFormB', 'firstname', data.firstname));
      store.dispatch(change('SingupUserFormB', 'lastname', data.lastname));
      store.dispatch(change('SingupUserFormB', 'nationalId', enToFa(data.nationalId)));
      store.dispatch(change('SingupUserFormB', 'mobileNumber', enToFa(data.mobileNumber)));
      store.dispatch(change('SingupUserFormB', 'birthDate', enToFa(moment(parseInt(data.birthDate, 10)).format('jYYYY/jM/jD HH:mm')))); // eslint-disable-line

      global.fuckDataB = data;
    }));
  }

  componentWillUnmount() {
    stopPolling();
  }

  clearFields = () => {
    store.dispatch(reset('SingupUserFormB'));
  }

  fuckloo = async (e) => {
    e.preventDefault();
    store.dispatch(reset('SingupUserFormB'));

    const token = store.getState().userOrgC.token;
    await fetch({
      url: `${config.server}/orgB/${global.fuckDataB.issuerId}/clientControl/${global.fuckDataB.id}`,
      options: {
        method: 'PUT',
      },
      query: {
        operation: 'rejected',
      },
    });

    const { setState } = this;
    global.fuckStateB = setState.bind(this);
    generateQR(() => startPolling((data) => {
      global.fuckStateB({
        disabled: false,
      });

      store.dispatch(change('SingupUserFormB', 'avatar', data.imageBase64));
      store.dispatch(change('SingupUserFormB', 'firstname', data.firstname));
      store.dispatch(change('SingupUserFormB', 'lastname', data.lastname));
      store.dispatch(change('SingupUserFormB', 'nationalId', enToFa(data.nationalId)));
      store.dispatch(change('SingupUserFormB', 'mobileNumber', enToFa(data.mobileNumber)));
      store.dispatch(change('SingupUserFormB', 'birthDate', enToFa(moment(parseInt(data.birthDate, 10)).format('jYYYY/jM/jD HH:mm')))); // eslint-disable-line

      global.fuckDataB = data;
    }));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <div className="alireza-header">
            <Row>
              <Col xs="11">
                <h3 className="filterTitle bold-text">
                  بخش ثبت‌نام
                </h3>
              </Col>
              <Col xs="1">
                <RefreshIcon className="genrefreshbut" onClick={refresh} />
              </Col>
            </Row>
          </div>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="10">
                <Row>
                  <Col xs="2">
                    <div className="avatarOfKarbar">
                      <Field
                        name="avatar"
                        component={ImageField}
                        alt="عکس کاربر"
                        sample={DefaultUser}
                      />
                    </div>
                  </Col>
                  <Col xs="5">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Row>
                          <Col xs="3">
                            <span className="form__form-group-label headFilterBreak">
                              نام:
                            </span>
                          </Col>
                          <Col xs="9">
                            <Field
                              name="firstname"
                              component="input"
                              type="text"
                              disabled
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Row>
                          <Col xs="3">
                            <span className="form__form-group-label headFilterBreak">
                              کد ملی:
                            </span>
                          </Col>
                          <Col xs="9">
                            <Field
                              name="nationalId"
                              component={InputNumber}
                              disabled
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Row>
                          <Col xs="3">
                            <span className="form__form-group-label headFilterBreak">
                              شماره موبایل:
                            </span>
                          </Col>
                          <Col xs="9">
                            <Field
                              name="mobileNumber"
                              component={InputNumber}
                              disabled
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs="5">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Row>
                          <Col xs="3">
                            <span className="form__form-group-label headFilterBreak">
                              نام خانوادگی:
                            </span>
                          </Col>
                          <Col xs="9">
                            <Field
                              name="lastname"
                              component="input"
                              type="text"
                              disabled
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Row>
                          <Col xs="3">
                            <span className="form__form-group-label headFilterBreak">
                              تاریخ تولد:
                            </span>
                          </Col>
                          <Col xs="9">
                            <Field
                              name="birthDate"
                              component="input"
                              type="text"
                              disabled
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Row>
                          <Col xs="3">
                            <span className="form__form-group-label headFilterBreak">
                              تاریخ الان:
                            </span>
                          </Col>
                          <Col xs="9">
                            <Field
                              name="birthdayDate"
                              component="input"
                              type="text"
                              disabled
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs="2">
                <div className="centerQR">
                  <Field
                    name="QRCode"
                    component={ImageField}
                    alt="کیو آر کد"
                    sample={QRImage}
                  />
                  <p>
                    وضعیت
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="liButtonGroup">
                <Button color="success" disabled={this.state.disabled}>
                  تایید مشتری
                </Button>
                <Button color="danger" disabled={this.state.disabled} onClick={this.fuckloo}>
                  رد مشتری
                </Button>
              </div>
            </Row>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default connect(state => ({
  users: state.usersOrgC,
}))(reduxForm({
  form: 'SingupUserFormB',
})(Form));
