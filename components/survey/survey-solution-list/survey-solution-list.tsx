import {
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Button, Col, List, Row } from "antd";
import GenericDrawer from "../../utilities/drawer/drawer";

interface Props {
  title: string;
  open: boolean;
  onCloseHandler: any;
}

export default function SurveySolutionList({
  title,
  open,
  onCloseHandler,
}: Props) {
  return (
    <GenericDrawer
      title={title}
      placement={"right"}
      onCloseHandler={onCloseHandler}
      open={open}
      width={"600"}
    >
      <List
        size="small"
        itemLayout={"horizontal"}
        dataSource={[
          { title: "What makes a good survey question?" },
          { title: "What makes a good survey question?" },
          { title: "What makes a good survey question?" },
          { title: "What makes a good survey question?" },
          { title: "What makes a good survey question?" },
        ]}
        renderItem={(item) => (
          <List.Item
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
            />
          </List.Item>
        )}
      />
    </GenericDrawer>
  );
}
