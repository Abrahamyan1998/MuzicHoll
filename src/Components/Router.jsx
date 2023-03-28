import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import Singer from './Singer/Singer'
import SingersPage from './SingersPage/SingersPage'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='' element={<SingersPage />} />
                <Route path='/:name' element={<Singer />} />
            </Route>
        </Routes>
    )
}

export default Router