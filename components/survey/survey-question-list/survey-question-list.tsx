import {
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Button, Col, List, Row } from "antd";
import { useState } from "react";
import SurveySolutionList from "../survey-solution-list/survey-solution-list";

export default function SurveyQuestionList() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SurveySolutionList
        title={"What makes a good survey question?"}
        open={open}
        onCloseHandler={() => {
          setOpen(false);
        }}
      />
      <List
        size="small"
        itemLayout={"horizontal"}
        dataSource={[
          { title: "What makes a good survey question?" },
          { title: "What makes a good survey question?" },
          { title: "What makes a good survey question?" },
        ]}
        renderItem={(item) => (
          <List.Item
            onClick={() => setOpen(true)}
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
    </div>
  );
}
