import React from 'react'
import { FaCaretRight } from 'react-icons/fa'

interface BreadcrumbProps {
    stages: { label: string; href?: string }[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ stages }) => {
    return (
        <nav className="text-sm font-medium py-3">
            <ul className="flex items-center">
                {stages.map((stage, index) => (
                    <li key={index} className="flex items-center">
                        <a
                            href={stage.href || '#'}
                            className={`text-black font-rubik font-semibold ${index === stages.length - 1 ? 'font-semibold text-blue' : ''}`}
                        >
                            {stage.label}
                        </a>
                        {index < stages.length - 1 && (
                            <span className=" text-black  ">
                                <FaCaretRight />
                            </span>
                        )}
                    </li>
                ))}
            </ul>
            <hr className="mt-2 mb-4" />
        </nav>
    )
}

export default Breadcrumb
