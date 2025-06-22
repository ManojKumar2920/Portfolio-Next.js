import KairosAI from '@/assets/kairos.jpeg';
import MagicWrite from '@/assets/magicwrite.png';
import Jarvis from '@/assets/jarvis.png';
import NoteShare from '@/assets/noteshare.jpg';
import OpenHire from '@/assets/openhire.png';
import CodersCave from '@/assets/coderscave.jpg';
import Infest from '@/assets/infest.jpg';
import URLshort from '@/assets/urlshort.png';
import NotesTaker from '@/assets/notestaker.png';
import Vols from '@/assets/vols.webp';
import Prime from '@/assets/prime-logo.png';
import { IoMdArrowRoundForward as Arrow } from "react-icons/io";

const ProjectContent = [
    {
        imageSrc: Prime,
        title : 'Voting Platform (Amazon Prime)',
        description : 'Developed a high-traffic fan voting web app for Panchayat Season 4, enabling users to vote between Team Kranti and Team Manju. Engineered for massive scale, handling over 15 million requests and 2+ lakh concurrent users, with 6 million votes recorded in just 4 days.',
        icon: <Arrow />,
        link: 'https://vols.noricai.com/'
    },
    {
        imageSrc: Vols,
        title : 'Vols - New era of Data Platform',
        description : 'Architected a large-scale data provisioning platform (Vols AI) with Next.js and TypeScript, improving data processing efficiency by 30% and reducing server response times by 15 milliseconds on average. Built with robust workflows for dataset upload, automated review, admin approval, and marketplace integration.',
        icon: <Arrow />,
        link: 'https://vols.noricai.com/'
    },
    {
        imageSrc :MagicWrite,
        title : 'MagicWrite - Paraphrasing Tool',
        description : 'MagicWrite is a powerful AI-driven tool designed to assist users in paraphrasing text quickly and effectively. MagicWrite leverages cutting-edge AI technology to provide unique and plagiarism-free content.',
        icon: <Arrow />,
        link: 'https://github.com/ManojKumar2920/MagicWrite'
    },
    {
        imageSrc :Jarvis,
        title : 'Jarvis Assistant',
        description : 'A Python-based voice-activated assistant, featuring speech recognition and integration with Spotify for tasks like fetching date/time, web searches, and playing music.',
        icon: <Arrow />,
        link: 'https://github.com/ManojKumar2920/Jarvis'
    },
    {
        imageSrc :KairosAI,
        title : 'Kairos AI - Coding Assistant',
        description : 'Kairos AI, an open-source AI chatbot designed to assist with programming-related questions and problems. Kairos AI leverages the powerful Gemini model for a seamless user experience.',
        icon: <Arrow />,
        link: 'https://github.com/ManojKumar2920/Kairos-Chat'
    },
    {
        imageSrc :NoteShare,
        title : 'Notes Share',
        description : 'Notes Share is a collaborative note-sharing application built with Django. It allows users to create, share, and manage notes seamlessly.',
        icon: <Arrow />,
        link: 'https://github.com/ManojKumar2920/Notes-Sharing-Django-Web-Application'
    },
    {
        imageSrc :URLshort,
        title : 'MiniMe',
        description : 'MiniMe is an open-source URL shortener application built using Next.js. It allows users to easily shorten long URLs and share the shortened versions.',
        icon: <Arrow />,
        link: 'https://mini-me-url-shortner.vercel.app/'
    },
    {
        imageSrc :NotesTaker,
        title : 'Auto Notes Taker',
        description : 'Automated notes maker from audio recordings is a tool used to covert the recordings of online classes and audio file to document notes.',
        icon: <Arrow />,
        link: 'https://github.com/ManojKumar2920/Automated-Notes-Maker'
    },
]

export default ProjectContent;