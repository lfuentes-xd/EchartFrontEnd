import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import {NormalWeight, Graphics, WeigthAnalysis, BicepsWeight} from '../../Views/Pesos/index'
import { Graph, Apartments, Weights } from '../../Views/index'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/NormalWeight' element={<NormalWeight />} />
                    <Route path='/Graph' element={<Graph />} />
                    <Route path='/Apartments' element={<Apartments />} />
                    <Route path='/WeigthAnalysis' element={<WeigthAnalysis />} />
                    <Route path='/Graphics' element={<Graphics />} />
                    <Route path='/BicepsWeight' element={<BicepsWeight />} />
                    <Route path='/Weights' element={<Weights />}/>
                    <Route path='/' element={<Weights />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router