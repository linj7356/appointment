import React from 'react';
import {Form, Input} from 'antd';

const FormItem = Form.Item;

class AppointmentForm extends React.Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <Form layout="vertical">
                <FormItem
                    {...formItemLayout}
                    label="Name"
                >
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: 'Please input a message.'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Phone Number"
                >
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input a phone number.'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
            </Form>
        );
    }
}

export const WrappedAppointmentForm = Form.create()(AppointmentForm);