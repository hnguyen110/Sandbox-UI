import {Button, Card, Input, Radio, Space} from "antd";
import {Question} from "../../../utilities/interfaces/question";
import GenericDrawer from "../../utilities/drawer/drawer";

interface Props {
    title: string;
    open: boolean;
    onCloseHandler: any;
    questions: Question[];
}

export default function AssignedSurveyDetails({
                                                  title,
                                                  open,
                                                  onCloseHandler,
                                                  questions,
                                              }: Props) {
    return (
        <GenericDrawer
            title={title}
            placement={"right"}
            onCloseHandler={onCloseHandler}
            open={open}
            width={"80%"}
        >
            <Card
                title="How did the programmer program the program to program a program?"
                size="small"
                bordered={false}
                className="w-full"
            >
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={1}>Using his faith</Radio>
                        <Radio value={2}>There was a time that people communicated in 0 and 1</Radio>
                        <Radio value={3}>Indiana Jones found the answers but maybe he lost it</Radio>
                    </Space>
                </Radio.Group>
            </Card>

            <Card
                title="How to ask for day off the correct way?"
                size="small"
                bordered={false}
                className="w-full"
            >
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={1}>I am busy following a model career, if I failed I will be back on
                            Monday</Radio>
                        <Radio value={2}>John Snow is currently asking me if I can help him deploy his tobacco website
                            on AWS</Radio>
                    </Space>
                </Radio.Group>
            </Card>

            <Card
                title="Rate your productive day at work"
                size="small"
                bordered={false}
                className="w-full"
            >
                <Radio.Group>
                    <Radio value={1}>My code works</Radio>
                    <Radio value={2}>My code does not work</Radio>
                    <Radio value={3}>My code does not work and I do not know why</Radio>
                    <Radio value={4}>My code works and I do not know why</Radio>
                </Radio.Group>
            </Card>

            <Card
                title="How to center a div using CSS?"
                size="small"
                bordered={false}
                className="w-full"
            >
                <Input.TextArea rows={5}/>
            </Card>

            <Button className="float-right" type="primary">Submit</Button>
        </GenericDrawer>
    );
}
