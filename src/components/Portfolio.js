import React from 'react'
import { useState } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import project from './project'


export default function Portfolio() {

    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    const [selected, setSelected] = useState('All')
    const onSelectFilter = (filter) => setSelected(() => filter);

    return (
        <div className='portfolio'>
            <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
            <ProjectList selected={selected} projects={project()} />


        </div>
    )

}