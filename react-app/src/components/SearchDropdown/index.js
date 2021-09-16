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

    const authenticated = useSelector(state => state.session.user) !== null

    document.querySelector("html").addEventListener("click", () => {
        setRenderSearchDropdown(false)
    });

    const handleClick = () => {
        setRenderSearchDropdown(false)
        setSearchQuery("")
    }

    // Function to highlight the matched portions of a result from the search query
    // Result = search result (course.name, lesson.name)
    const formatResult = (result) => {
        // Index is where the match for the user input within the result begins
        const index = result.toLowerCase().indexOf(searchQuery.toLowerCase())
        const length = searchQuery.length

        // We slice the results to preserve casing

        // Slice from the beginning until where the match starts, which is index
        // This makes a copy of everything up until the index where the query was matched and makes a copy
        const preMatch = result.slice(0, index)

        // Start at the match, stop at the end of the match
        // This makes a copy of everything starting from the match until the end of the match
        const match = result.slice(index, index + length)

        // Starts after the end of the match until the end of the result
        // This makes a copy of everything after the match until the end of the result
        const postMatch = result.slice(index + length)

        // Render the whole result with a class for the matching portion to be styled
        return <span className="search-result">{preMatch}<span className="match">{match}</span>{postMatch}</span>
    }

    return (
        <>
            <div className="search-dropdown">

                <div className="search-courses">
                    <h3>Courses!!! :)</h3>
                    <div className="search-courses-results">
                        {courseResults.length ? 
                            courseResults.map(course =>
                                <Link to={`/courses/${course.id}`} onClick={handleClick} key={course.id}> {formatResult(course.name)} </Link>
                            )
                        : <p>No courses found :/</p>}
                    </div>
                </div>

                {authenticated && 
                    <div className="search-lessons">
                        <h3>LESSONS :3</h3>
                        <div className="search-lessons-results">
                            {lessonResults.length ? 
                                lessonResults.map(lesson =>
                                    <Link to={`/lessons/${lesson.id}`} onClick={handleClick} key={lesson.id}> {formatResult(lesson.name)} </Link>
                                )
                            : <p>No lessons found :/.....</p>}
                        </div>
                    </div>
                }
            </div>
        </>
    )
};

export default SearchDropdown;