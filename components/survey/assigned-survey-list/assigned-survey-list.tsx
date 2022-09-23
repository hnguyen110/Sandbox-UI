import { FileDoneOutlined } from "@ant-design/icons";
import { List } from "antd";
import { Survey } from "../../../utilities/interfaces/survey";

interface Props {
  data: Survey[];
  itemLayout: "horizontal" | "vertical";
  onItemClickHandler: any;
}

export default function AssignedSurveyList({
  itemLayout,
  data,
  onItemClickHandler,
}: Props) {
  return (
    <List
      itemLayout={itemLayout}
      dataSource={data}
      renderItem={(item) => (
        <List.Item onClick={onItemClickHandler} className="cursor-pointer">
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
