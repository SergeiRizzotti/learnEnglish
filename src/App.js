import React from 'react';
import Header from './components/Header/Header.jsx';
import HeaderBlock from './components/HeaderBlock/HeaderBlock.jsx';
import Paragraf from './components/Paragraf/Paragraf.jsx';
import Card from './components/Card/Card.jsx'
import TrainingBlock from './components/TrainingBlock/TrainingBlock.jsx';

// import './App.scss';

const wordsList = [{
		eng: 'between',
		rus: 'между',
		img: 'https://picsum.photos/200/180?random=1'
	},
	{
		eng: 'high',
		rus: 'высокий',
		img: 'https://picsum.photos/200/180?random=2'
	},
	{
		eng: 'really',
		rus: 'действительно',
		img: 'https://picsum.photos/200/180?random=3'
	},
	{
		eng: 'something',
		rus: 'что-нибудь',
		img: 'https://picsum.photos/200/180?random=4'
	},
	{
		eng: 'most',
		rus: 'большинство',
		img: 'https://picsum.photos/200/180?random=5'
	},
	{
		eng: 'another',
		rus: 'другой',
		img: 'https://picsum.photos/200/180?random=6'
	},
	{
		eng: 'much',
		rus: 'много',
		img: 'https://picsum.photos/200/180?random=7'
	},
	{
		eng: 'family',
		rus: 'семья',
		img: 'https://picsum.photos/200/180?random=8'
	},
	{
		eng: 'own',
		rus: 'личный',
		img: 'https://picsum.photos/200/180?random=9'
	},
	{
		eng: 'out',
		rus: 'из/вне',
		img: 'https://picsum.photos/200/180?random=10'
	},
	{
		eng: 'leave',
		rus: 'покидать',
		img: 'https://picsum.photos/200/180?random=11'
	},
];

function App() {
	return (
		<>
			<HeaderBlock>
				<Header>
					Учите слова онлайн
				</Header>
				<Paragraf>
					Используйте карточки для запоминания и активно пополняйте словарный запас.
				</Paragraf>
			</HeaderBlock>
			<TrainingBlock>
					{ 
						wordsList.map(({ eng, rus, img }, i) => (
						<Card 
							key={i}
							eng={eng}
							rus={rus}
							img={img}
						/>
						)) 
					}
			</TrainingBlock>
		</>
		);
}

export default App;