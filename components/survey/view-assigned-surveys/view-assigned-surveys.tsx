import { Card } from "antd";
import { useState } from "react";
import AssignedSurveyDetails from "../assigned-survey-details/assigned-survey-details";
import AssignedSurveyList from "../assigned-survey-list/assigned-survey-list";

export default function ViewAssignedSurveys() {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  return (
    <Card title="View Assigned Surveys" bordered={false} className="w-full">
      <AssignedSurveyDetails
        title={"What make a good survey question"}
        open={drawerVisibility}
        onCloseHandler={() => setDrawerVisibility(false)}
      />
      <AssignedSurveyList
        onItemClickHandler={() => setDrawerVisibility(true)}
        data={[
          {
            title: "What makes a good survey question?",
            description:
              "To make a good survey question, you have to choose the right type of questions to use. Include concise, clear, and appropriate questions with answer choices that won’t confuse the respondent and will clearly provide data on their experience.",
          },
          {
            title: "What makes a good survey question?",
            description:
              "To make a good survey question, you have to choose the right type of questions to use. Include concise, clear, and appropriate questions with answer choices that won’t confuse the respondent and will clearly provide data on their experience.",
          },
          {
            title: "What makes a good survey question?",
            description:
              "To make a good survey question, you have to choose the right type of questions to use. Include concise, clear, and appropriate questions with answer choices that won’t confuse the respondent and will clearly provide data on their experience.",
          },
          {
            title: "What makes a good survey question?",
            description:
              "To make a good survey question, you have to choose the right type of questions to use. Include concise, clear, and appropriate questions with answer choices that won’t confuse the respondent and will clearly provide data on their experience.",
          },
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
