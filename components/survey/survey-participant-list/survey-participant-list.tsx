import {Button, Form, Select} from "antd";

const {Option} = Select;

interface User {
    id: number;
    email: string;
    username: string;
}

interface Props {
    users: User[];
    defaultValue: User[];
    placeholder: string;
}

export default function SurveyParticipantList({
                                                  users,
                                                  defaultValue,
                                                  placeholder,
                                              }: Props) {
    return (
        <Form layout="vertical">
            <Form.Item
                label="Participants"
                name="participants"
                rules={[
                    {required: true, message: "Survey participants are required"},
                ]}
            >
                <Select
                    mode="multiple"
                    allowClear
                    className="w-full"
                    placeholder={placeholder}
                    defaultValue={defaultValue.map((e) => {
                        return e.id;
                    })}
                >
                    {users.map((e) => {
                        return <Option key={e.id}>{e.email}</Option>;
                    })}
                </Select>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Send Invitation
                </Button>
            </Form.Item>
        </Form>
    );
}
