import {Button, Card, Col, DatePicker, Form, Input, Row, Select,} from "antd";

const {Option} = Select;

export default function Profile() {
    return (
        <Card title="Profile Information" bordered={false} className="w-full">
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            rules={[{required: true, message: "First name is required"}]}
                        >
                            <Input placeholder="Please enter your first name"/>
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="last_name"
                            rules={[{required: true, message: "Last name is required"}]}
                        >
                            <Input placeholder="Please enter your last name"/>
                        </Form.Item>

                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{required: true, message: "Gender is required"}]}
                        >
                            <Select
                                className="w-full"
                                placeholder="Please select your gender"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Date of Birth"
                            name="date_of_birth"
                            rules={[{required: true, message: "Date of birth is required"}]}
                        >
                            <DatePicker
                                placeholder="Please select your date of birth"
                                className="w-full"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                        <Form.Item
                            label="Race"
                            name="race"
                            rules={[
                                {required: true, message: "Race and ethnicity is required"},
                            ]}
                        >
                            <Select
                                className="w-full"
                                placeholder="Please select your race and ethnicity"
                            >
                                <Option value="white">White</Option>
                                <Option value="hispanic_or_latino_or_spanish_origin_of_any_race">
                                    Hispanic or Latino or Spanish Origin of any race
                                </Option>
                                <Option value="black_african_american">
                                    Black or African American
                                </Option>
                                <Option value="american_indian_and_alaska_native">
                                    American Indian and Alaska Native
                                </Option>
                                <Option value="asian">Asian</Option>
                                <Option value="native_hawaiian_or_other_pacific_islander">
                                    Native Hawaiian or Other Pacific Islander
                                </Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Sexual Orientation"
                            name="sexual_orientation"
                            rules={[
                                {
                                    required: true,
                                    message: "Sexual orientation and ethnicity is required",
                                },
                            ]}
                        >
                            <Select
                                className="w-full"
                                placeholder="Please select your sexual orientation"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="trans_male">Trans Male/Trans Man</Option>
                                <Option value="trans_female">Trans Female/Trans Woman</Option>
                                <Option value="gender_non­_conforming">
                                    Gender Non­Conforming
                                </Option>
                                <Option value="different_identity">Different Identity</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Do you have any disabilities?"
                            name="disability"
                            rules={[
                                {
                                    required: true,
                                    message: "Disability status is required",
                                },
                            ]}
                        >
                            <Select className="w-full">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Do you consider yourself as a veteran?"
                            name="veteran"
                            rules={[
                                {
                                    required: true,
                                    message: "Veteran status is required",
                                },
                            ]}
                        >
                            <Select className="w-full">
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button className="float-right" type="primary" htmlType="submit">
                                Save Profile Information
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
}
