import React from "react"
import ExercisePost from "./ExercisePost"
import FoodPost from "./FoodPost"
import RecommendationPost from "./RecommendationPost"

const FullPost: React.FC = () => {
  return (
    <>
      <FoodPost />
      <ExercisePost />
      <RecommendationPost />
    </>
  )
}

export default FullPost
