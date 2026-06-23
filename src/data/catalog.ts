import type { CatalogService, Caregiver } from '../types/booking'

// Service catalogue powering the booking flows.
// Prices are illustrative INR amounts.

export const homeHealthcareServices: CatalogService[] = [
    {
        id: 'hh-nursing',
        category: 'home_healthcare',
        title: 'Nursing Care at Home',
        description:
            'Trained nurses for injections, vitals monitoring and post-op care.',
        price: 799,
        unit: 'per visit',
        duration: '60 min',
        icon: '🩺',
        popular: true,
    },
    {
        id: 'hh-injection',
        category: 'home_healthcare',
        title: 'Injection / IV Infusion',
        description: 'Doctor-prescribed injections and IV drips at home.',
        price: 299,
        unit: 'per visit',
        duration: '30 min',
        icon: '💉',
    },
    {
        id: 'hh-physio',
        category: 'home_healthcare',
        title: 'Physiotherapy',
        description: 'Certified physiotherapists for recovery and mobility.',
        price: 699,
        unit: 'per session',
        duration: '45 min',
        icon: '🧑‍⚕️',
        popular: true,
    },
    {
        id: 'hh-elder',
        category: 'home_healthcare',
        title: 'Elderly Care Attendant',
        description: '12/24-hour trained attendants for senior care.',
        price: 1499,
        unit: 'per day',
        duration: '12 hrs',
        icon: '👵',
    },
    {
        id: 'hh-wound',
        category: 'home_healthcare',
        title: 'Wound Dressing',
        description: 'Sterile wound dressing and care by skilled nurses.',
        price: 499,
        unit: 'per visit',
        duration: '30 min',
        icon: '🩹',
    },
    {
        id: 'hh-icu',
        category: 'home_healthcare',
        title: 'ICU Setup at Home',
        description: 'Hospital-grade ICU equipment and critical-care nursing.',
        price: 4999,
        unit: 'per day',
        duration: '24 hrs',
        icon: '🏥',
    },
]

export const doctorConsultServices: CatalogService[] = [
    {
        id: 'dc-general',
        category: 'doctor_consultation',
        title: 'General Physician',
        description: 'Consult in 2 minutes for fever, cold, infections & more.',
        price: 299,
        unit: 'per consult',
        duration: '15 min',
        icon: '🧑‍⚕️',
        popular: true,
    },
    {
        id: 'dc-pediatric',
        category: 'doctor_consultation',
        title: 'Pediatrician',
        description: "Expert care for your child's health concerns.",
        price: 449,
        unit: 'per consult',
        duration: '15 min',
        icon: '👶',
    },
    {
        id: 'dc-derma',
        category: 'doctor_consultation',
        title: 'Dermatologist',
        description: 'Skin, hair and nail concerns resolved online.',
        price: 499,
        unit: 'per consult',
        duration: '15 min',
        icon: '🧴',
    },
    {
        id: 'dc-cardio',
        category: 'doctor_consultation',
        title: 'Cardiologist',
        description: 'Heart health consultations with senior specialists.',
        price: 699,
        unit: 'per consult',
        duration: '20 min',
        icon: '❤️',
        popular: true,
    },
    {
        id: 'dc-gyno',
        category: 'doctor_consultation',
        title: 'Gynecologist',
        description: "Women's health and pregnancy care consultations.",
        price: 599,
        unit: 'per consult',
        duration: '20 min',
        icon: '🤰',
    },
    {
        id: 'dc-ortho',
        category: 'doctor_consultation',
        title: 'Orthopedic',
        description: 'Bone, joint and muscle pain consultations.',
        price: 599,
        unit: 'per consult',
        duration: '20 min',
        icon: '🦴',
    },
]

export const ambulanceServices: CatalogService[] = [
    {
        id: 'amb-basic',
        category: 'emergency',
        title: 'Basic Life Support (BLS)',
        description: 'Equipped ambulance with trained paramedic and oxygen.',
        price: 1499,
        unit: 'base fare',
        duration: 'ETA 12-20 min',
        icon: '🚑',
        popular: true,
    },
    {
        id: 'amb-advanced',
        category: 'emergency',
        title: 'Advanced Life Support (ALS)',
        description: 'ICU-on-wheels with ventilator, monitor and EMT.',
        price: 2999,
        unit: 'base fare',
        duration: 'ETA 15-25 min',
        icon: '🚨',
    },
    {
        id: 'amb-nurse',
        category: 'emergency',
        title: 'Emergency Nurse Visit',
        description: 'ICU-trained nurse dispatched to your location.',
        price: 999,
        unit: 'base fare',
        duration: 'ETA 20-30 min',
        icon: '🩺',
    },
    {
        id: 'amb-doctor',
        category: 'emergency',
        title: 'Emergency Doctor Visit',
        description: 'Doctor home visit for urgent medical attention.',
        price: 1999,
        unit: 'base fare',
        duration: 'ETA 25-35 min',
        icon: '👨‍⚕️',
    },
]

export const allServices: CatalogService[] = [
    ...homeHealthcareServices,
    ...doctorConsultServices,
    ...ambulanceServices,
]

export function getServiceById(id: string): CatalogService | undefined {
    return allServices.find((s) => s.id === id)
}

// Pool of caregivers/providers used to "assign" a booking.
export const caregiverPool: Caregiver[] = [
    {
        name: 'Nurse Priya Sharma',
        role: 'Registered Nurse',
        rating: 4.9,
        phone: '+91 98xxxx2345',
        initials: 'PS',
        experience: '8 yrs exp',
        vehicle: 'Bike • DL 3C 1123',
    },
    {
        name: 'Dr. Arjun Mehta',
        role: 'General Physician',
        rating: 4.8,
        phone: '+91 99xxxx8810',
        initials: 'AM',
        experience: '11 yrs exp',
        vehicle: 'Car • DL 8C 4521',
    },
    {
        name: 'Ravi Kumar',
        role: 'Physiotherapist',
        rating: 4.7,
        phone: '+91 97xxxx5567',
        initials: 'RK',
        experience: '6 yrs exp',
        vehicle: 'Bike • DL 1A 9087',
    },
    {
        name: 'Sunita Devi',
        role: 'Elderly Care Attendant',
        rating: 4.9,
        phone: '+91 96xxxx3344',
        initials: 'SD',
        experience: '9 yrs exp',
    },
]

export const ambulanceCrew: Caregiver[] = [
    {
        name: 'Paramedic Suresh Yadav',
        role: 'BLS Paramedic',
        rating: 4.9,
        phone: '+91 98xxxx0001',
        initials: 'SY',
        experience: 'EMT-B certified',
        vehicle: 'Ambulance • DL 1CAB 2024',
    },
    {
        name: 'EMT Anita Rao',
        role: 'Advanced Life Support',
        rating: 4.8,
        phone: '+91 98xxxx0002',
        initials: 'AR',
        experience: 'EMT-A certified',
        vehicle: 'ICU Ambulance • DL 1CAB 9111',
    },
]

export const timeSlots: string[] = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
]
