import { Routes, Route } from 'react-router-dom';
import Wheel from './wheel.tsx';
import { CContainer } from '@coreui/react'

function App() {
    return (
        <CContainer className="px-4" lg>
            <h1>Ethereum Roulette</h1>
            <div>
                <Routes>
                    <Route path="/" element={<Wheel />} />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
        </CContainer>
    );
}

export default App;