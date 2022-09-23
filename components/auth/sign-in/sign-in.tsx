import {Button, Form, Input, Typography} from "antd";
import Link from "next/link";

const {Title} = Typography;

export default function SignIn() {
    return (
        <div style={{margin: "1rem auto", maxWidth: "30rem"}}>
            <Form
                onFinish={(data) => {
                    console.log(data);
                }}
                autoComplete="off"
                layout="vertical"
            >
                <Title level={3}>Sign In</Title>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: "Username is required"}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: "Password is required"}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Link href="/auth/sign-up">
                        <Button block type="default">
                            Sign Up For A New Account
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}
