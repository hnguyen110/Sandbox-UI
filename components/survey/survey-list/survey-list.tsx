import {
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Button, Col, List, Row } from "antd";

interface Item {
  title: string;
  description: string;
}

interface Props {
  data: Item[];
  itemLayout: "horizontal" | "vertical";
  onItemClickHandler: any;
}

export default function SurveyList({
  data,
  itemLayout,
  onItemClickHandler,
}: Props) {
  return (
    <List
      itemLayout={itemLayout}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          onClick={onItemClickHandler}
          className="cursor-pointer"
          extra={
            <Row gutter={8}>
              <Col>
                <Button type="primary" icon={<EditOutlined />}>
                  Edit
                </Button>
              </Col>
              <Col>
                <Button danger type="primary" icon={<DeleteOutlined />}>
                  Delete
                </Button>
              </Col>
            </Row>
          }
        >
          <List.Item.Meta
            avatar={<FileDoneOutlined />}
            title={<a>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
