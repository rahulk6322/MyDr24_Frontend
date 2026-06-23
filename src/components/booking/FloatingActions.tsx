import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaAmbulance, FaCalendarPlus } from 'react-icons/fa'

// Always-visible quick actions to reach the dynamic booking & emergency flows.
const FloatingActions: React.FC = () => {
    const { pathname } = useLocation()

    // Hide on the emergency page itself and on tracking screens.
    if (pathname === '/emergency' || pathname.startsWith('/track')) return null

    return (
        <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6">
            <Link
                to="/book"
                className="flex items-center gap-2 rounded-full bg-blue px-4 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:scale-105"
            >
                <FaCalendarPlus className="text-base" />
                <span className="hidden sm:inline">Book a Service</span>
            </Link>
            <Link
                to="/emergency"
                className="flex items-center gap-2 rounded-full bg-[#E11D48] px-4 py-3 text-[14px] font-bold text-white shadow-lg transition hover:scale-105"
                style={{ boxShadow: '0 6px 20px rgba(225,29,72,0.45)' }}
            >
                <FaAmbulance className="text-lg" />
                <span className="hidden sm:inline">Emergency</span>
            </Link>
        </div>
    )
}

export default FloatingActions
