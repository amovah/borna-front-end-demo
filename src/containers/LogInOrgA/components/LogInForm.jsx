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
import { Row, Col, Card, CardBody } from 'reactstrap';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  showPassword = (e) => {
    e.preventDefault();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="centerTor">
        <Row className="row-seperator">
          <Col xs="4" />
          <Col xs="4">
            <div className="qrCodeSection">
              <Field
                name="qrCode"
                component={ImageField}
                alt="منتظر  QR کد بمانید"
              />
            </div>
          </Col>
          <Col xs="4" />
        </Row>

        <Row className="row-seperator">
          <Col xs="3" />
          <Col xs="6">
            <Card>
              <CardBody>
                <h3>
                  سیستم احراز هویت
                </h3>
                <p className="width-kamter-in-orga">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="3" />
        </Row>

        <Row>
          <Col xs="3" />
          <Col xs="6">
            <Panel xs={12} title="تنظیمات">
              <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered
                had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure
                education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.
              </p>
            </Panel>
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
