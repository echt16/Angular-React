import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex2 from './Ex2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const props = {
  author: 'William Shakespeare',
  biografy: 'William Shakespeare was born in April 1564 in Stratford-upon-Avon, England. He was an English playwright, poet, and actor, widely regarded as one of the greatest writers in the English language and the world"s preeminent dramatist. Shakespeare"s body of work includes 39 plays, 154 sonnets, and two long narrative poems. His plays, which span the genres of tragedy, comedy, and history, have been translated into every major living language and are performed more often than those of any other playwright. He married Anne Hathaway in 1582, and they had three children. Shakespeare died on April 23, 1616, and was buried in the Holy Trinity Church in Stratford-upon-Avon.',
  work: 'Hamlet',
  review: '"Hamlet," one of Shakespeare"s most renowned tragedies, is a profound exploration of treachery, revenge, incest, and moral corruption. The play tells the story of Prince Hamlet of Denmark, who is compelled to avenge his father"s murder by his uncle Claudius, who has usurped the throne and married Hamlet"s mother, Gertrude. Shakespeare"s intricate portrayal of Hamlet"s inner turmoil and his philosophical reflections on life and death make the play a timeless study of the human condition.The character of Hamlet is one of the most complex and enduring in literature, embodying a range of human emotions and existential dilemmas. His famous soliloquy, "To be, or not to be," delves into the nature of existence and the inevitability of death, capturing the essence of human anxiety and contemplation.Shakespeare"s masterful use of language, rich with metaphor and wordplay, enhances the play"s depth and resonance. The themes of madness, revenge, and the consequences of corruption are as relevant today as they were in the Elizabethan era. "Hamlet" remains a cornerstone of Western literature, continually inviting interpretation and reflection.'
};

root.render(
  <React.StrictMode>
    <App data={props}/>
    <hr/>
    <Ex2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
