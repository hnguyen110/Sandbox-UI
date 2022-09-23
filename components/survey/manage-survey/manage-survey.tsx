import { PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useState } from "react";
import GenericDrawer from "../../utilities/drawer/drawer";
import SurveyFormModal from "../survey-form-modal/survey-form-modal";
import SurveyList from "../survey-list/survey-list";
import SurveyParticipantList from "../survey-participant-list/survey-participant-list";
import SurveyQuestionList from "../survey-question-list/survey-question-list";
import { useForm } from "antd/lib/form/Form";

export default function ManageSurvey() {
  const [surveyForm] = useForm();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Card
      extra={
        <Button
          onClick={() => {
            setModalVisibility(true);
          }}
          type="primary"
          icon={<PlusOutlined />}
        >
          New Survey
        </Button>
      }
      title="Manage Surveys"
      bordered={false}
      className="w-full"
    >
      <SurveyFormModal
        title={"Create Survey"}
        open={modalVisibility}
        onOkHandler={() => {}}
        onCancelHandler={() => {
          setModalVisibility(false);
        }}
        form={surveyForm}
      />
      <GenericDrawer
        title={"What makes a good survey question?"}
        placement={"right"}
        onCloseHandler={() => setOpen(false)}
        open={open}
        width={"600"}
      >
        <SurveyParticipantList
          users={[
            {
              id: 1,
              username: "hacker",
              email: "hacker@sandbox.com",
            },
            {
              id: 2,
              username: "john",
              email: "john@sandbox.com",
            },
            {
              id: 3,
              username: "smith",
              email: "smith@sandbox.com",
            },
          ]}
          defaultValue={[]}
          placeholder="Please select the participants for this survey"
        />
        <SurveyQuestionList />
      </GenericDrawer>
      <SurveyList
        onItemClickHandler={() => setOpen(true)}
        data={[
          {
            title: "What makes a good survey question?",
            description:
              "To make a good survey question, you have to choose the right type of questions to use. Include concise, clear, and appropriate questions with answer choices that won’t confuse the respondent and will clearly provide data on their experience.",
          },
        ]}
        itemLayout={"horizontal"}
      />
    </Card>
  );
}
