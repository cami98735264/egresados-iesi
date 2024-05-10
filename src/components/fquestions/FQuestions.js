import svg from '../../assets/sections-imgs/fquestions.svg';
import axios from 'axios';
import './FQuestions.css';
import { useEffect, useState } from 'react';
import PaginatedItems from '../utils/pagination/PaginatedItems.js';

const FQuestions = () => {
    const [questionsRetrieved, setQuestionsRetrieved] = useState([]);
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const response = await axios.get("/api/info/faq");
                setQuestionsRetrieved(response.data.questions);
            } catch (error) {
                console.error(error);
            }
        }
        getQuestions();
    }, []);
    return (
        <section className='fquestions-container' id="preguntas-frecuentes">
            <aside className="fquestions-title-cont">
                <h2 className="spa-titles text-4xl md:text-5xl lg:text-5xl p-4">Preguntas Frecuentes</h2>
            </aside>
            <div className="fquestions-img-cont">
                <img src={svg} className="svgs-sections" alt='Imágen de preguntas frecuentes'></img>
            </div>
            <div className="fquestions-acordeon">
            <PaginatedItems itemsPerPage={3} questionsRetrieved={questionsRetrieved} />
            </div>
        </section>
    );
    }


export default FQuestions;