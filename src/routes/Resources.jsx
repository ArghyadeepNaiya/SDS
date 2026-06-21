import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from '../components/navbar/Navbar'
import Contact from '../components/contact/Contact'
import './resources.css'

/* ─────────────────── Resource Data ─────────────────── */
const resources = [
    {
        id: 1,
        title: 'Introduction to Machine Learning',
        description:
            'A comprehensive guide covering supervised, unsupervised, and reinforcement learning fundamentals with real-world examples.',
        category: 'Machine Learning',
        badge: 'ml',
        fileType: 'PDF',
        fileSize: '4.2 MB',
        downloadUrl: '#',
    },
    {
        id: 2,
        title: 'Statistics for Data Science',
        description:
            'Probability distributions, hypothesis testing, regression analysis, and Bayesian inference — all explained with Python code.',
        category: 'Statistics',
        badge: 'stats',
        fileType: 'PDF',
        fileSize: '3.8 MB',
        downloadUrl: '#',
    },
    {
        id: 3,
        title: 'Python Data Wrangling Cheat Sheet',
        description:
            'Quick-reference guide for Pandas, NumPy, and data-cleaning patterns you will use every single day.',
        category: 'Python',
        badge: 'python',
        fileType: 'PDF',
        fileSize: '1.1 MB',
        downloadUrl: '#',
    },
    {
        id: 4,
        title: 'Deep Learning with PyTorch',
        description:
            'Build CNNs, RNNs, and Transformers from scratch. Includes annotated code and architecture diagrams.',
        category: 'Deep Learning',
        badge: 'dl',
        fileType: 'PDF',
        fileSize: '6.5 MB',
        downloadUrl: '#',
    },
    {
        id: 5,
        title: 'Linear Algebra Essentials',
        description:
            'Vectors, matrices, eigenvalues and SVD — the mathematical backbone behind every ML algorithm.',
        category: 'Statistics',
        badge: 'stats',
        fileType: 'PDF',
        fileSize: '2.9 MB',
        downloadUrl: '#',
    },
    {
        id: 6,
        title: 'Scikit-Learn Project Starter',
        description:
            'End-to-end ML pipeline template with feature engineering, model selection, and evaluation utilities.',
        category: 'Machine Learning',
        badge: 'ml',
        fileType: 'ZIP',
        fileSize: '8.3 MB',
        downloadUrl: '#',
    },
    {
        id: 7,
        title: 'NLP & Text Mining Handbook',
        description:
            'Tokenisation, TF-IDF, word embeddings, and transformer fine-tuning walkthroughs for text data.',
        category: 'Deep Learning',
        badge: 'dl',
        fileType: 'PDF',
        fileSize: '5.1 MB',
        downloadUrl: '#',
    },
    {
        id: 8,
        title: 'Matplotlib & Seaborn Visualization Guide',
        description:
            'Create publication-ready charts, heatmaps, and interactive dashboards with clean, reusable code.',
        category: 'Python',
        badge: 'python',
        fileType: 'PDF',
        fileSize: '2.4 MB',
        downloadUrl: '#',
    },
    {
        id: 9,
        title: 'Academic Paper Writing Template',
        description:
            'LaTeX and Markdown templates for research papers, with citation management and formatting best practices.',
        category: 'Academics',
        badge: 'acad',
        fileType: 'ZIP',
        fileSize: '1.7 MB',
        downloadUrl: '#',
    },
]

const categories = ['All', 'Machine Learning', 'Statistics', 'Python', 'Deep Learning', 'Academics']

/* ─────────────────── Download Icon ─────────────────── */
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
)

/* ─────────────────── File-type Icon ─────────────────── */
const FileIcon = ({ type }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {type === 'PDF' ? (
            <>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </>
        ) : (
            <>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </>
        )}
    </svg>
)

/* ─────────────────── Resource Card ─────────────────── */
const ResourceCard = ({ resource, index }) => {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        cardRef.current.style.setProperty('--mouse-x', `${x}%`)
        cardRef.current.style.setProperty('--mouse-y', `${y}%`)
    }

    return (
        <motion.div
            className="resource-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            layout
        >
            <div className="card-shine" />
            <div className="card-content">
                <span className={`card-badge ${resource.badge}`}>
                    {resource.category}
                </span>

                <h3 className="card-title">{resource.title}</h3>
                <p className="card-description">{resource.description}</p>

                <div className="card-meta">
                    <span>
                        <FileIcon type={resource.fileType} />
                        {resource.fileType}
                    </span>
                    <span>{resource.fileSize}</span>
                </div>

                <a
                    href={resource.downloadUrl}
                    className="card-download"
                    download
                    onClick={(e) => e.stopPropagation()}
                >
                    <DownloadIcon /> Download
                </a>
            </div>
        </motion.div>
    )
}

/* ─────────────────── Resources Page ─────────────────── */
const Resources = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered =
        activeFilter === 'All'
            ? resources
            : resources.filter((r) => r.category === activeFilter)

    return (
        <>
            <Navbar />
            <div className="resources-page">
                {/* Header */}
                <motion.div
                    className="resources-header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1>
                        Resource <span>Library</span>
                    </h1>
                    <p>
                        Download curated study materials, cheat sheets, project
                        templates, and research papers — all open and free.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    className="filter-tabs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Cards */}
                <div className="cards-grid">
                    <AnimatePresence mode="popLayout">
                        {filtered.length > 0 ? (
                            filtered.map((resource, i) => (
                                <ResourceCard
                                    key={resource.id}
                                    resource={resource}
                                    index={i}
                                />
                            ))
                        ) : (
                            <motion.div
                                className="empty-state"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key="empty"
                            >
                                No resources found for this category yet.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Contact />
        </>
    )
}

export default Resources
