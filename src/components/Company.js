import React, { useState } from 'react'

const Company = ({ data }) => {
	const [toggleData, setToggleData] = useState(false)
	const handleToggleData = () => {
		setToggleData(prevState => !prevState)
	}
	return (
		<div className="card mt-4">
			<div className='d-flex'>
				<div className="card-body flex-wrap d-flex flex-column align-items-center" >
					<div className='d-flex dataDiv'>
						<span className='com'>{data.name}</span>
						<div className='com text-center'>
							<div>Height</div>
							<div>{data.height}</div>
						</div>
						<div className=' com text-center'>
							<div>Mass</div>
							<div>{data.mass}</div>
						</div>
						<div className='com text-center'>
							<div>Birth Year</div>
							<div>{data.birth_year}</div>
						</div>

						<button className='viewDetail' onClick={handleToggleData}>View Details</button>
					</div>
					{toggleData && <div className="d-flex flex-column com">
						<h4>Description</h4>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi iste quibusdam est voluptatum nostrum numquam, recusandae placeat voluptatibus culpa ducimus, sequi dolore eaque, atque nam rerum natus voluptates tenetur velit? Dicta eveniet...</p>
						<div className='d-flex'>
							<div className='expandedData'>
								<h4>Hair Color</h4>
								<p>{data.hair_color}</p>
								<h4>Skin Color</h4>
								<p>{data.skin_color}</p>
								<h4>Eye Color</h4>
								<p>{data.eye_color}</p>
							</div>
							<div className='expandedData'>
								<h4>Gender</h4>
								<p>{data.gender}</p>
								<h4>No.of Films</h4>
								<p>{data.films?.length}</p>
								<h4>Created At</h4>
								<p>{data.created}</p>
							</div>
							<div className="expandedData">
							<h4>Last Edited</h4>
								<p>{data.edited}</p>
							</div>
						</div>
					</div>}
				</div>
			</div>
		</div >
	)
}

export default Company