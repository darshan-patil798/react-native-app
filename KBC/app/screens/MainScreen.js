import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import QuestionCard from "../components/QuestionCard";
import FourOptionsContainer from "../components/FourOptionsContainer";

export default function MainScreen({ index, handleIndex }) {
  const [correct, setCorrect] = useState(0);
  let questAns = [
    {
      _id: 1,
      question: "What is your name",
      options: ["Jim", "jam", "Darshan", "Kim"],
      correct_answer: "Darshan",
    },
    {
      _id: 2,
      question: "Where do you live",
      options: ["India", "US", "Bandra", "Maharashtra"],
      correct_answer: "Maharashtra",
    },
    {
      _id: 3,
      question: "Did you eat anything",
      options: ["Yes", "No", "Maybe", "Not Sure"],
      correct_answer: "Yes",
    },
    {
      _id: 4,
      question:
        "Which of the following acts as the input of a class-based component?",
      options: ["Class", "Factory", "Render", "Props"],
      correct_answer: "Props",
    },
    {
      _id: 5,
      question: "What is ReactJs?",
      options: [
        "Server side framework ",
        "A Library for building interaction interfaces ",
        "Client Side Framework ",
        "None of the Above",
      ],
      correct_answer: "A Library for building interaction interfaces ",
    },
    {
      _id: 6,
      question: "React is ............ Javascript library ",
      options: [
        "Module based",
        "Component based",
        "System based",
        "All are correct",
      ],
      correct_answer: "Component based",
    },
    {
      _id: 7,
      question:
        "A valid react component can return ...... number of elements. ",
      options: ["1", "2", "3", "None of the Above"],
      correct_answer: "1",
    },
    {
      _id: 8,
      question:
        "Which of the following API is a MUST for every ReactJS component? ",
      options: ["getInitialState", "render", "renderComponent", "None"],
      correct_answer: "render",
    },
    {
      _id: 9,
      question: "What is the default port for webpack dev server? ",
      options: ["3000", "8080", "3306", "8809"],
      correct_answer: "3000",
    },
    {
      _id: 10,
      question: "React Js is developed by ",
      options: ["Google", "Microsoft", "Facebook", "None of the Above"],
      correct_answer: "Microsoft",
    },
  ];

  useEffect(() => {
  }, [index]);

  const handleClick = (value) => {
    if (questAns[index].correct_answer === value) {
      setCorrect(correct + 1);
    }
    handleIndex();
  };

  return (
    <Screen style={styles.container}>
      {questAns[index] ? (
        <>
          <QuestionCard question={questAns[index].question} />
          <FourOptionsContainer
            options={questAns[index].options}
            handleClick={handleClick}
          />
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <AppText>You have answered all question</AppText>
          <AppText>
            Out of {questAns.length} questions , {correct} are correct{" "}
          </AppText>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
  },
});
