import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CostumerRoutes } from './CostumerRoutes'
export const Routers = () => {
    return (
        <Routes>
            <Route path="/*" element={<CostumerRoutes />} />
        </Routes>
    )
}

