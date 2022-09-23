import { Form, FormInstance, Input, Modal } from "antd";

interface Props {
  title: string;
  open: boolean;
  onOkHandler: any;
  onCancelHandler: any;
  form: FormInstance<any>;
}

export default function SurveyFormModal({
  title,
  open,
  onOkHandler,
  onCancelHandler,
  form,
}: Props) {
  return (
    <Modal
      className="top-5"
      title={title}
      open={open}
      onOk={onOkHandler}
      onCancel={onCancelHandler}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Survey name is required" }]}
        >
          <Input placeholder="Please enter the survey name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Survey description is required" },
          ]}
        >
          <Input.TextArea
            placeholder="Please enter the survey description"
            rows={5}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
