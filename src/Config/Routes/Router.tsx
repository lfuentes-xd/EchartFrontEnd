import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import {Apartments, Graph, Weigth, NormalWeight, Graphics} from '../../Views/index'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Weigth />} index/>
                    <Route path='/NormalWeight' element={<NormalWeight />} />
                    <Route path='/Graph' element={<Graph />} />
                    <Route path='/Apartments' element={<Apartments />} />
                    <Route path='/Graphics' element={<Graphics />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router