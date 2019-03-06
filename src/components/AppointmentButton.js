import React from 'react';
import {Button, Modal} from 'antd';
import {WrappedAppointmentForm} from './AppointmentForm';

export class AppointmentButton extends React.Component {

    state = {
        ModalText: 'Content of the modal',
        visible: false,
    }

    showModal = (evt) => {
        let evtId = evt.target.getAttribute('id')
        console.log(evtId);
        this.setState({
            visible: true,
            pre: evtId,
        });

    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        this.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    visible: false,
                }, function () {
                    this.addColor()
                });
            }
        });
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        }, function () {
            this.removeColor()
        });
        this.form.resetFields();
    }

    addColor = () => {
        console.log(document.getElementById(this.state.pre));
        document.getElementById(this.state.pre).setAttribute("class", "ant-btn appointed-btn ant-btn-primary");
    }


    removeColor = () => {
        document.getElementById(this.state.pre).setAttribute("class", "ant-btn btn ant-btn-primary");
    }

    saveFormRef = (form) => {
        this.form = form;
    }


    render() {
        const {visible} = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal} className='btn'
                        id={this.props.children}>{this.props.children}</Button>

                <Modal
                    title="Make an Appointment"
                    visible={visible}
                    onOk={this.handleOk}
                    okText='Submit'
                    onCancel={this.handleCancel}
                    cancelText='Cancel'
                    maskClosable={false}
                    closable={false}
                >
                    <WrappedAppointmentForm ref={this.saveFormRef}/>
                </Modal>
            </div>
        );
    }
}
