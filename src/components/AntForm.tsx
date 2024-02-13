import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { countries } from '@/data/countries'

export const AntForm = () => {
  const [form] = Form.useForm()
  const [ data, setData ] = useState()
  const formWidth = '180'

	const formItemLayout = { labelCol: { span: formWidth }, wrapperCol: { span: formWidth } }
	const buttonItemLayout = { wrapperCol: { span: formWidth, offset: 0 } }

	const onFinish = (values: any) => {
    setData(values)
		console.log('Success:', data)
    console.log('Success:', values)
	}
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}


	return (
		<Form
			{...formItemLayout}
			layout='vertical'
			form={form}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			style={{ maxWidth: 800 }}>
			<Form.Item
				label='Email'
				name='email'
				rules={[{ required: false }]}>
				<Input
					prefix={<UserOutlined className='site-form-item-icon' />}
					placeholder='simone.grillo@hrm.group'
				/>
			</Form.Item>
			<Form.Item
				label='Name'
				name='name'
        >
				<Input placeholder='Simone' />
			</Form.Item>
			<Form.Item
				label='Surname'
				name='surname'
        >
				<Input placeholder='Grillo' />
			</Form.Item>
      <Form.Item label='Select the default market'
				name='market'>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input: string, option?: { label: string; value: string }) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
          options={countries.map(country => ({
            value: country.toLowerCase(),
            label: country,
          }))} />
      </Form.Item>
			<Form.Item
				label='Title'
				name='title'>
				<Input placeholder='placeholder' />
			</Form.Item>
			<Form.Item
				label='Position'
				name='position'>
				<Input placeholder='placeholder' />
			</Form.Item>
			<Form.Item
				label='Telephone'
				name='telephone'>
				<Input placeholder='placeholder' />
			</Form.Item>
			<Form.Item
				label='Mobile Phone'
				name='mobile'>
				<Input placeholder='placeholder' />
			</Form.Item>
			<Form.Item
				label='Address'
				name='address'>
				<Input placeholder='placeholder' />
			</Form.Item>
			<Form.Item {...buttonItemLayout}>
      <Button
			type='primary'
			htmlType='submit'
			className='bg-red-500 float-right'>
			Update
		</Button>
			</Form.Item>
		</Form>
	)
}
