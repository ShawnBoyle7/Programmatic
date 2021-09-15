// Create the div that will display our results dropdown
// Within that container, we'll have a div for courses and a div for lessons

import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchDropdown.css"

const SearchDropdown = ({ searchQuery, setSearchQuery, setRenderSearchDropdown  }) => {

    const courses = Object.values(useSelector(state => state.curriculum.courses))
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))

    const courseResults = courses?.filter(course => course.name.toLowerCase().includes(searchQuery?.toLowerCase()))
    const lessonResults = lessons?.filter(lesson => lesson.name.toLowerCase().includes(searchQuery?.toLowerCase()))

    document.querySelector("html").addEventListener("click", () => {
        setRenderSearchDropdown(false)
    });

    const handleClick = () => {
        setRenderSearchDropdown(false)
        setSearchQuery("")
    }

    return (
        <>
            <div className="search-dropdown">

                <div className="search-courses">
                    <h3>Courses!!! :)</h3>
                    <div className="search-courses-results">
                        {courseResults.length ? 
                            courseResults.map(course =>
                                <Link to={`/courses/${course.id}`} onClick={handleClick} key={course.id}> {course.name} </Link>
                            )
                        : <p>No courses found :/</p>}
                    </div>
                </div>

                <div className="search-lessons">
                    <h3>LESSONS :3</h3>
                    <div className="search-lessons-results">
                        {lessonResults.length ? 
                            lessonResults.map(lesson =>
                                <Link to={`/lessons/${lesson.id}`} onClick={handleClick} key={lesson.id}> {lesson.name} </Link>
                            )
                        : <p>No lessons found :/.....</p>}
                    </div>
                </div>
            </div>
        </>
    )
};

export default SearchDropdown;