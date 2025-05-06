import Breadcrumb from '../components/global/Breadcrumb'
import DoctorList from '../components/QuickBook/DoctorList'
import DoctorSearch from '../components/QuickBook/DoctorSearch'

const QuickBook: React.FC = () => {
    const breadcrumbStages = [
        { label: 'Home', href: '/home' },
        { label: 'Quick Book', href: '/quick-book' },
    ]
    return (
        <>
            <div className="bg-offwhite">
                <div className="contain">
                    <Breadcrumb stages={breadcrumbStages} />
                    <DoctorSearch />
                    <DoctorList />
                </div>
            </div>
        </>
    )
}

export default QuickBook
