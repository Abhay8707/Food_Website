import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Coustmer/Pages/HomePage/Homepage'
import { Resturants } from '../Coustmer/Pages/Resturants/Resturants'

export const CostumerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/restaurants/:city/:title/:id' element={<Resturants/>} />
        </Routes>
    )
}


