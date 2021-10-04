import Card from '@material-ui/core/Card';
import ModelLoader from '../ModelLoader';
import { useState } from 'react';
import './models.css';

import rake from '../../assets/images/rake.png';
import scoopS from '../../assets/images/scoopS.png';
import scoopB from '../../assets/images/scoopB.png';
import stem from '../../assets/images/stem.png';
import extensionHandle from '../../assets/images/extensionHandle.png';
import multitool from '../../assets/images/multitool.png';

const ToolModel = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [currentModel, setCurrentModel] = useState(0);

	const modelsData = [
		{
			name: 'Rake',
			image: rake,
			dataSrc: '../../assets/images/rake.png',
			title: '',
			text: `This tool is used for exploration on some planets and natural satellites in the recollection of small rocks and pebbles with diameter larger than one centimeter. It's designed to link in a standard handle.`,
		},
		{
			name: 'Small scoop',
			image: scoopS,
			dataSrc: '',
			title: '',
			text: 'It’s used for the exploration on some planets and natural satellites , recollecting material samples that can include some liquid substances; such as mud and water.  It has a width of 11.2 centimeters and 20.3 centimeters of depth.',
		},
		{
			name: 'Big scoop',
			image: scoopB,
			dataSrc: '',
			title: '',
			text: 'It’s used for the exploration on some planets and natural satellites , recollecting material samples that can include some liquid substances; such as mud and water.   It has a width of 6.6 centimeters and 10.41 centimeters of depth.',
		},
		{
			name: 'Stem',
			image: stem,
			dataSrc: '',
			title: '',
			text: 'This shaft is used as the common stem of the toolset. There is an angle locking mechanism at the bottom where the tool heads (Scoops and rake) can be locked by simply pulling the lock pin.',
		},
		{
			name: 'Extension handle',
			image: extensionHandle,
			dataSrc: '',
			title: '',
			text: 'A shaft is used as a handle. It has a T-handle and a wheel-handle. At the bottom is located a socket, to link it to the stem.',
		},
		{
			name: 'Multitool',
			image: multitool,
			dataSrc: '',
			title: '',
			text: 'A shaft is used as a handle. It has a T-handle and a wheel-handle. At the bottom is located a socket, to link it to the stem.',
		}
	]

	const openModal = (model) => {
		setModalOpen(true);
		setCurrentModel(model);
	};

	return (
		<div style={{ width: '100%' }}>
			<div className="cards-container">
				{modelsData.map((model, index) => (
					<Card key={model.name} className="card-model">
						{model.name}
						<div className="card-body">
							<div style={{ height: 170 }}>{model.text}</div>
							<img src={model.image} width={150} alt="" />
						</div>
						<div className="show-model-button" onClick={() => openModal(index)}>
							Show model
						</div>
					</Card>
				))}
			</div>
			{/* <div>
				<Card id={model.name} className="card-model">
					{model.name}
					<div className="card-body">
						<div style={{ height: 170 }}>{model.text}</div>
						<img src={model.image} width={150} />
					</div>
					<div className="show-model-button" onClick={() => openModal(index)}>
						Show model
					</div>
				</Card>
			</div> */}
			{
				isModalOpen && (
					<>
						<div
							style={{ width: '100%', height: '100vh', position: 'absolute', backgroundColor: '#fff4', top: 0, zIndex: 99 }}
							onClick={() => setModalOpen(false)}
						/>
						<div style={{ zIndex: 100, position: 'absolute', top: 200, width: 600, height: 500, left: '25%' }}>
							<ModelLoader src={currentModel}/>
						</div>
					</>
				)
			}
		</div>
	)
};

export default ToolModel;