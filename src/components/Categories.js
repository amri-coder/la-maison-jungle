import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lmj-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>-Veuillez choisir une catégorie-</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')} className='btn btn-primary btn-sm'>Réinitialiser</button>
        </div>
    )
}

export default Categories