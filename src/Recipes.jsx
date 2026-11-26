import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Recipes.css'
const DummyJson = () => {
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true;

        const fetchRecipes = async () => {
            setLoading(true)
            setError(null)

            try {

                const res = await axios.get('https://dummyjson.com/recipes')
                if (mounted) setRecipes(res.data.recipes)
                console.log(res.data.recipes)

            } catch (error) {
                if (mounted) setError('데이터를 불러오지 못했습니다.')
            } finally {
                if (mounted) setLoading(false)
            }
        }

        fetchRecipes()

        return () => {
            mounted = false
        }

    }, [])
    if (loading)
        return (
            <div className="recipes-wrap">
                <h2 className="recipes-title">DummyJSON Recipes</h2>
                <p className="recipes-state">로딩중...</p>
            </div>
        );

    if (error)
        return (
            <div className="recipes-wrap">
                <h2 className="recipes-title">DummyJSON Recipes</h2>
                <p className="recipes-error">{error}</p>
            </div>
        );
    

return (
    <div className="recipes-wrap">
        <h2>레시피 목록</h2>
        <ul>
            {recipes.map((c) => {
                return (
                    <li key={c.id}>
                        <span>Recipes #{c.id}</span>

                        <div className="img-wrap">
                            <img src={c.image} alt={c.name} />
                        </div>

                        <h2>{c.name}</h2>

                        <ol>
                            {c.instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>

                        <span>{c.cuisine}</span>
                    </li>
                )
            })}
        </ul>
    </div>
)

}

export default DummyJson