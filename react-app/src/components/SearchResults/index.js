import React from "react"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CourseDiv from "../CourseDiv";
import LessonDiv from "../LessonDiv";

const SearchResults = () => {

    // These two lines of code grab our search query from the URL
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get("q")

    const courses = Object.values(useSelector(state => state.curriculum.courses))
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))

    const courseResults = courses?.filter(course => course.name.toLowerCase().includes(searchQuery?.toLowerCase()))
    const lessonResults = lessons?.filter(lesson => lesson.name.toLowerCase().includes(searchQuery?.toLowerCase()))

    const authenticated = useSelector(state => state.session.user) !== null

    const numResults = authenticated ? courseResults.length + lessonResults.length : courseResults.length


    return (
        <>
            {numResults === 1 ? 
                <h1> Found {`${numResults} result for '${searchQuery}'`}</h1> 
            : 
                <h1> Found {`${numResults} results for '${searchQuery}'`}</h1>}

            {courseResults.length > 0 && 
            <div>
                <h2>Courses</h2>
                {courseResults.map(course =>
                    <CourseDiv course={course} key={course.id}/>
                )}
            </div>}

            {lessonResults.length > 0 && authenticated && 
            <div>
                <h2>Lessons</h2>
                {lessonResults.map(lesson =>
                    <LessonDiv lesson={lesson} key={lesson.id}/>    
                )}
            </div>}
        </>
    )
};

export default SearchResults;
