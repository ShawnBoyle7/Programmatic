import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchDropdown.css"

const SearchDropdown = ({ searchQuery, setSearchQuery, setRenderSearchDropdown  }) => {

    const courses = Object.values(useSelector(state => state.curriculum.courses))
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))

    const courseResults = courses?.filter(course => course.name.toLowerCase().includes(searchQuery?.toLowerCase())).slice(0,5)
    const lessonResults = lessons?.filter(lesson => lesson.name.toLowerCase().includes(searchQuery?.toLowerCase())).slice(0,5)

    const authenticated = useSelector(state => state.session.user) !== null

    document.querySelector("html").addEventListener("click", () => {
        setRenderSearchDropdown(false)
    });

    const handleClick = () => {
        setRenderSearchDropdown(false)
        setSearchQuery("")
    }

    const formatResult = (result) => {

        const index = result.toLowerCase().indexOf(searchQuery.toLowerCase())
        const length = searchQuery.length

        const preMatch = result.slice(0, index)

        const match = result.slice(index, index + length)

        const postMatch = result.slice(index + length)

        return <span className="search-result">{preMatch}<span className="match">{match}</span>{postMatch}</span>
    }

    return (
        <>
            <div className="search-dropdown">

                <div className="search-courses">
                    <h3>Courses</h3>
                    <div className="search-courses-results">
                        {courseResults.length ?
                            courseResults.map(course =>
                                <Link key={course.id} to={`/courses/${course.id}`} onClick={handleClick}>
                                    <div className='result-div'>
                                        {formatResult(course.name)}
                                    </div>
                                </Link>
                            )
                        :
                        <div className='result-div'>
                                No courses found
                        </div>}
                    </div>
                </div>

                {authenticated &&
                    <div className="search-lessons">
                        <h3>Lessons</h3>
                        <div className="search-lessons-results">
                            {lessonResults.length ?
                                lessonResults.map(lesson =>
                                    <Link key={lesson.id} to={`/lessons/${lesson.id}`} onClick={handleClick}>
                                        <div className='result-div'>
                                            {formatResult(lesson.name)}
                                        </div>
                                    </Link>
                                )
                            :
                            <div className='result-div'>
                                No lessons found
                            </div>}
                        </div>
                    </div>
                }
            </div>
        </>
    )
};

export default SearchDropdown;
